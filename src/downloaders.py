"""
Downloaders for docs stylesheet, parser and stdlib.
"""
import constants
from download_helpers import download_from_url, download_from_git
from replace_all_occurences_in_file import replace_all_occurrences_in_file


def download_stylesheet(branch: str, file_name: str) -> None:
    """
    Downloads the stylesheet from the IDE's repository.
    """
    file_path: str = constants.IDE_DIRECTORY + file_name
    url: str = constants.IDE_REPO_URL + branch + file_path
    download_to: str = constants.IN_DIR + "/temp-" + file_name
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, constants.IN_DIR + "/" + file_name, ".docVis", "body"
    )


def download_parser(parser_url: str, parser_commit: str, parser_file: str) -> None:
    """
    Downloads the scala parser from the Engine's repository.
    """
    url: str = parser_url + parser_commit + "/" + parser_file
    download_to: str = constants.IN_DIR + "/temp-" + parser_file
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to,
        constants.IN_DIR + "/" + parser_file,
        "export ",
        "// export",
    )


def download_stdlib(token: str, org: str, repo: str, branch: str, folder: str) -> None:
    """
    Downloads the Standard Library from the Engine's repository.
    """
    download_from_git(token, org, repo, branch, folder)
