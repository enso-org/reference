"""
Enso standard library documentation generator.
"""
import os
import sys
import getopt
import glob
import execjs
import constants
from download_helpers import download_from_url, download_from_git
from replace_all_occurences_in_file import replace_all_occurrences_in_file
from safe_create_directory import safe_create_directory


def main(argv):
    """
    Program entry point.
    """
    download_stdlib(argv)
    download_parser()
    download_stylesheet()
    parser: execjs.ExternalRuntime = init_parser()
    init_gen_dir()
    gen_all_files(parser)
    print("All done.")


def gen_all_files(parser):
    """
    Recursively generates all doc files and puts them into `gen` directory.
    """
    for filename in glob.iglob("**/*.enso", recursive=True):
        out_file_name = (
            filename.replace("distribution/std-lib/", "")
            .replace("/", "-")
            .replace(".enso", ".html")
        )
        print("Generating: " + out_file_name)
        if out_file_name != "Base-src-Data-Text-Extensions.html":
            try:
                gen_file(parser, filename, out_file_name)
            except execjs.Error as err:
                print("Could not generate: " + out_file_name)
                print("Got an exception: " + str(err))


def gen_file(parser, path: str, out_name: str):
    """
    Generates doc HTML and saves it.
    """
    out_dir: str = "gen"

    enso_file = open(path, "r")
    parsed = parser.call("$e_doc_parser_generate_html_source", enso_file.read())
    enso_file.close()
    html_file = open(out_dir + "/" + out_name, "w")
    html_file.write('<link rel="stylesheet" href="style.css"/>' + parsed)
    html_file.close()


def init_gen_dir():
    """
    Creates `gen` directory with all necessary files.
    """
    in_dir: str = "distribution"
    out_dir: str = "gen"
    safe_create_directory(out_dir)
    os.system("cp " + in_dir + "/style.css " + out_dir + "/style.css")
    os.system("cp src/index.html " + out_dir + "/index.html")


def init_parser() -> execjs.ExternalRuntime:
    """
    Compiles JS parser to call from Python.
    """
    parser = open("distribution/parser.js", "r").read()
    parser = execjs.compile(parser)
    return parser


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


def download_stdlib(argv):
    """
    Downloads Std-Lib from Engine repository.
    """
    token = ""
    try:
        opts, _ = getopt.getopt(argv, "t:", ["token="])
    except getopt.GetoptError as err:
        print(str(err))
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-t", "--token"):
            token = arg
        else:
            print("Expected GitHub token.")
            sys.exit(2)

    # pylint: disable=no-member
    download_from_git(
        token,
        org=constants.ORGANIZATION,
        repo=constants.REPO,
        branch=constants.BRANCH,
        folder=constants.DIRECTORY,
    )


if __name__ == "__main__":
    main(sys.argv[1:])
