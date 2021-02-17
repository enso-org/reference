import os
import base64
import shutil
import requests
from github import Github
from github import GithubException


def get_sha_for_tag(repository, tag):
    branches = repository.get_branches()
    matched_branches = [match for match in branches if match.name == tag]
    if matched_branches:
        return matched_branches[0].commit.sha

    tags = repository.get_tags()
    matched_tags = [match for match in tags if match.name == tag]
    if not matched_tags:
        raise ValueError('No Tag or Branch exists with that name')
    return matched_tags[0].commit.sha


def download_directory(repository, sha, server_path):
    if os.path.exists(server_path):
        shutil.rmtree(server_path)

    os.makedirs(server_path)
    contents = repository.get_dir_contents(server_path, ref=sha)

    for content in contents:
        print("Downloading: %s" % content.path)
        if content.type == 'dir' and not content.path.endswith("THIRD-PARTY"):
            os.makedirs(content.path)
            download_directory(repository, sha, content.path)
        else:
            try:
                path = content.path
                if path.endswith(".enso"):
                    file_content = repository.get_contents(path, ref=sha)
                    file_data = base64.b64decode(file_content.content)
                    file_out = open(content.path, "wb+")
                    file_out.write(file_data)
                    file_out.close()
            except (GithubException, IOError) as exc:
                print('Error processing %s: %s', content.path, exc)


def download_from_git(token: str,
                      org: str,
                      repo: str,
                      branch: str,
                      folder: str):
    github = Github(token)
    organization = github.get_organization(org)
    repository = organization.get_repo(repo)
    sha = get_sha_for_tag(repository, branch)
    download_directory(repository, sha, folder)


def download_from_url(url, to):
    r = requests.get(url, allow_redirects=True)
    print("Downloading: %s" % url)
    open(to, 'wb').write(r.content)


def line_prepender(filename, line):
    with open(filename, 'r+') as f:
        content = f.read()
        f.seek(0, 0)
        f.write(line.rstrip('\r\n') + '\n' + content)