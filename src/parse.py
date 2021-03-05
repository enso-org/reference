"""
Creates `gen` directory with all necessary files.
"""
import glob
import logging
from typing import List
import execjs
import constants
from copy_file import copy_file
from safe_create_directory import safe_create_directory


def gen_all_files(
    parser: execjs.ExternalRuntime, std_dir: str, out_dir: str, style_file: str
) -> List[str]:
    """
    Recursively generates all doc files and puts them into the `gen` directory.
    """
    all_file_names: List[str] = []

    for filename in glob.iglob("**/*" + constants.FILE_EXT, recursive=True):
        out_file_name = (
            filename.replace(std_dir + "/", "")
            .replace("/", "-")
            .replace("-src-", "-")
            .replace(constants.FILE_EXT, ".html")
        )
        logging.info("Generating: %s", out_file_name)
        try:
            __gen_file(parser, filename, out_file_name, out_dir, style_file)
            all_file_names.append(out_file_name.replace(".html", ""))
        except execjs.Error as err:
            logging.info("Could not generate: %s", out_file_name)
            logging.info("Got an exception: %s", str(err))

    return all_file_names


def __gen_file(
    parser: execjs.ExternalRuntime,
    path: str,
    out_name: str,
    out_dir: str,
    style_file: str,
) -> None:
    """
    Generates an HTML file from Enso source file provided with `path` and saves
    it as `out_name`.
    """
    enso_file = open(path, "r")
    stylesheet_link = '<link rel="stylesheet" href="' + style_file + '"/>'
    parsed = parser.call(constants.PARSE_AST_METHOD, enso_file.read())
    enso_file.close()
    html_file = open(out_dir + "/" + out_name, "w")
    if len(parsed) == 0:
        parsed = parser.call(
            constants.PARSE_PURE_METHOD,
            "\n\n*Enso Reference Viewer.*\n\nNo documentation available for chosen source file.",
        )
    html_file.write(stylesheet_link + parsed.replace("display: flex", "display: none").replace("<hr><br><hr><br>", "<hr><br>"))
    html_file.close()


def init_gen_dir(name: str, style_file: str) -> None:
    """
    Creates the `gen` directory with all necessary files.
    """
    safe_create_directory(name)
    stylesheet_file: str = "/" + style_file
    favicon_file: str = "favicon.ico"
    copy_file(constants.IN_DIR + stylesheet_file, name + stylesheet_file)
    copy_file(favicon_file, name + "/" + favicon_file)


def init_parser(parser_file: str) -> execjs.ExternalRuntime:
    """
    Compiles the JS parser to call from within Python code.
    """
    parser = open(constants.IN_DIR + "/" + parser_file, "r").read()
    parser = execjs.compile(parser)
    return parser
