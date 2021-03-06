"""
Helper methods for downloading files and folders.
"""
import os
import logging
import base64
import requests
from github import Github
from github import GithubException
from github.Repository import Repository
import constants
from safe_create_directory import safe_create_directory


def __get_sha_for_tag(repository: Repository, tag: str) -> str:
    """
    Gets necessary SHA value from selected repository's branch.
    """
    branches = repository.get_branches()
    matched_branches = [match for match in branches if match.name == tag]
    if matched_branches:
        return matched_branches[0].commit.sha

    tags = repository.get_tags()
    matched_tags = [match for match in tags if match.name == tag]
    if not matched_tags:
        raise ValueError("No Tag or Branch exists with that name")
    return matched_tags[0].commit.sha


def __download_directory(repository: Repository, sha: str, server_path: str) -> None:
    """
    Recursively downloads directory from GitHub repo.
    """
    safe_create_directory(server_path)
    contents = repository.get_dir_contents(server_path, ref=sha)

    for content in contents:
        logging.info("Downloading: %s", content.path)
        if content.type == "dir" and not content.path.endswith("THIRD-PARTY"):
            os.makedirs(content.path)
            __download_directory(repository, sha, content.path)
        else:
            try:
                path = content.path
                if path.endswith(constants.FILE_EXT):
                    file_content = repository.get_contents(path, ref=sha)
                    file_data = base64.b64decode(file_content.content)  # type: ignore
                    file_out = open(content.path, "wb+")
                    file_out.write(file_data)
                    file_out.close()
            except (GithubException, IOError) as exc:
                logging.info("Error processing %s: %s", content.path, exc)


def download_from_git(
    token: str, org: str, repo: str, branch: str, folder: str
) -> None:
    """
    Downloads directory from GitHub repository.
    """
    github = Github(token)
    organization = github.get_organization(org)
    repository = organization.get_repo(repo)
    sha = __get_sha_for_tag(repository, branch)
    __download_directory(repository, sha, folder)


def download_from_url(url: str, to_file: str) -> None:
    """
    Downloads file from given URL.
    """
    request = requests.get(url, allow_redirects=True)
    logging.info("Downloading: %s", url)
    open(to_file, "wb").write(request.content)
