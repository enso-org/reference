"""
Downloaders for docs stylesheet, parser and stdlib.
"""
import constants
from download_helpers import download_from_url, download_from_git
from replace_all_occurences_in_file import replace_all_occurrences_in_file


def download_stylesheet():
    """
    Downloads stylesheet for docs from IDE repository.
    """
    repo_url: str = "https://raw.githubusercontent.com/enso-org/ide/"
    file_path: str = "develop/src/rust/ide/view/src/documentation/style.css"
    url: str = repo_url + file_path
    download_to: str = "distribution/temp-style.css"
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, "distribution/style.css", ".docVis", "body"
    )


def download_parser():
    """
    Downloads scala parser from Engine repository.
    """
    # pylint: disable=no-member
    url: str = "https://packages.luna-lang.org/parser-js/nightly/"
    url: str = url + constants.PARSER_COMMIT + "/scala-parser.js"
    download_to: str = "distribution/scala-parser.js"
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, "distribution/parser.js", "export ", "// export"
    )


def download_stdlib(token):
    """
    Downloads Std-Lib from Engine repository.
    """
    # pylint: disable=no-member
    download_from_git(
        token,
        org=constants.ORGANIZATION,
        repo=constants.REPO,
        branch=constants.BRANCH,
        folder=constants.DIRECTORY,
    )
