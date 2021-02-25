"""
Creates `gen` directory with all necessary files.
"""
import glob
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
        print("Generating: " + out_file_name)
        try:
            __gen_file(parser, filename, out_file_name, out_dir, style_file)
            all_file_names.append(out_file_name.replace(".html", ""))
        except execjs.Error as err:
            print("Could not generate: " + out_file_name)
            print("Got an exception: " + str(err))

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
    parse_ast = "$e_doc_parser_generate_html_source"
    parse_pure_doc = "$e_doc_parser_generate_html_from_doc"
    stylesheet_link = '<link rel="stylesheet" href="' + style_file + '"/>'
    parsed = parser.call(parse_ast, enso_file.read())
    enso_file.close()
    html_file = open(out_dir + "/" + out_name, "w")
    if len(parsed) == 0:
        parsed = parser.call(
            parse_pure_doc, "No documentation available for chosen source file."
        )
    html_file.write(stylesheet_link + parsed)
    html_file.close()


def init_gen_dir(name: str, style_file: str) -> None:
    """
    Creates the `gen` directory with all necessary files.
    """
    safe_create_directory(name)
    stylesheet_file: str = "/" + style_file
    copy_file(constants.IN_DIR + stylesheet_file, name + stylesheet_file)


def init_parser(parser_file: str) -> execjs.ExternalRuntime:
    """
    Compiles the JS parser to call from within Python code.
    """
    parser = open(constants.IN_DIR + "/" + parser_file, "r").read()
    parser = execjs.compile(parser)
    return parser
