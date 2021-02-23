"""
Downloaders for docs stylesheet, parser and stdlib.
"""
import constants
from download_helpers import download_from_url, download_from_git
from replace_all_occurences_in_file import replace_all_occurrences_in_file


def download_stylesheet() -> None:
    """
    Downloads the stylesheet from the IDE's repository.
    """
    file_path: str = "develop/src/rust/ide/view/src/documentation/style.css"
    url: str = constants.IDE_REPO_URL + file_path
    download_to: str = constants.IN_DIR + "/temp-style.css"
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, constants.IN_DIR + "/style.css", ".docVis", "body"
    )


def download_parser() -> None:
    """
    Downloads the scala parser from the Engine's repository.
    """
    url: str = constants.PARSER_URL + constants.PARSER_COMMIT + "/scala-parser.js"
    download_to: str = constants.IN_DIR + "/scala-parser.js"
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, constants.IN_DIR + "/parser.js", "export ", "// export"
    )


def download_stdlib(token: str) -> None:
    """
    Downloads the Standard Library from the Engine's repository.
    """
    download_from_git(
        token,
        org=constants.ORGANIZATION,
        repo=constants.REPO,
        branch=constants.BRANCH,
        folder=constants.DIRECTORY,
    )
