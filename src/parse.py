"""
Creates `gen` directory with all necessary files.
"""
import os
import glob
import execjs
import constants
from safe_create_directory import safe_create_directory


def gen_all_files(parser: execjs.ExternalRuntime) -> None:
    """
    Recursively generates all doc files and puts them into the `gen` directory.
    """
    # pylint: disable=no-member
    for filename in glob.iglob("**/*" + constants.FILE_EXT, recursive=True):
        out_file_name = (
            filename.replace(constants.IN_DIR + "/std-lib/", "")
            .replace("/", "-")
            .replace(constants.FILE_EXT, ".html")
        )
        print("Generating: " + out_file_name)
        try:
            __gen_file(parser, filename, out_file_name)
        except execjs.Error as err:
            print("Could not generate: " + out_file_name)
            print("Got an exception: " + str(err))


def __gen_file(parser: execjs.ExternalRuntime, path: str, out_name: str) -> None:
    """
    Generates an HTML file from Enso source file provided with `path` and saves
    it as `out_name`.
    """
    # pylint: disable=no-member
    enso_file = open(path, "r")
    parsed = parser.call("$e_doc_parser_generate_html_source", enso_file.read())
    enso_file.close()
    html_file = open(constants.OUT_DIR + "/" + out_name, "w")
    html_file.write('<link rel="stylesheet" href="style.css"/>' + parsed)
    html_file.close()


def init_gen_dir() -> None:
    """
    Creates the `gen` directory with all necessary files.
    """
    # pylint: disable=no-member
    safe_create_directory(constants.OUT_DIR)
    stylesheet_file: str = "/style.css"
    index_html_file: str = "/index.html"
    source_directory: str = "src"
    os.system(
        "cp "
        + constants.IN_DIR
        + stylesheet_file
        + " "
        + constants.OUT_DIR
        + stylesheet_file
    )
    os.system(
        "cp"
        + source_directory
        + index_html_file
        + " "
        + constants.OUT_DIR
        + index_html_file
    )


def init_parser() -> execjs.ExternalRuntime:
    """
    Compiles the JS parser to call from within Python code.
    """
    # pylint: disable=no-member
    parser = open(constants.IN_DIR + "/parser.js", "r").read()
    parser = execjs.compile(parser)
    return parser
