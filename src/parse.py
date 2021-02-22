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
    Recursively generates all doc files and puts them into `gen` directory.
    """
    # pylint: disable=no-member
    for filename in glob.iglob("**/*" + constants.FILE_EXT, recursive=True):
        out_file_name = (
            filename.replace(constants.IN_DIR + "/std-lib/", "")
            .replace("/", "-")
            .replace(constants.FILE_EXT, ".html")
        )
        print("Generating: " + out_file_name)
        if out_file_name != "Base-src-Data-Text-Extensions.html":
            try:
                __gen_file(parser, filename, out_file_name)
            except execjs.Error as err:
                print("Could not generate: " + out_file_name)
                print("Got an exception: " + str(err))


def __gen_file(parser: execjs.ExternalRuntime, path: str, out_name: str) -> None:
    """
    Generates doc HTML and saves it.
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
    Creates `gen` directory with all necessary files.
    """
    # pylint: disable=no-member
    safe_create_directory(constants.OUT_DIR)
    os.system(
        "cp " + constants.IN_DIR + "/style.css " + constants.OUT_DIR + "/style.css"
    )
    os.system("cp src/index.html " + constants.OUT_DIR + "/index.html")


def init_parser() -> execjs.ExternalRuntime:
    """
    Compiles JS parser to call from Python.
    """
    # pylint: disable=no-member
    parser = open(constants.IN_DIR + "/parser.js", "r").read()
    parser = execjs.compile(parser)
    return parser
