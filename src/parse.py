"""
Creates `gen` directory with all necessary files.
"""
import glob
import execjs
import constants
from copy_file import copy_file
from safe_create_directory import safe_create_directory


def gen_all_files(
    parser: execjs.ExternalRuntime, std_dir: str, out_dir: str, style_file: str
) -> None:
    """
    Recursively generates all doc files and puts them into the `gen` directory.
    """
    for filename in glob.iglob("**/*" + constants.FILE_EXT, recursive=True):
        out_file_name = (
            filename.replace(std_dir + "/", "")
            .replace("/", "-")
            .replace(constants.FILE_EXT, ".html")
        )
        print("Generating: " + out_file_name)
        try:
            __gen_file(parser, filename, out_file_name, out_dir, style_file)
        except execjs.Error as err:
            print("Could not generate: " + out_file_name)
            print("Got an exception: " + str(err))


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
    js_method = "$e_doc_parser_generate_html_source"
    stylesheet_link = '<link rel="stylesheet" href="' + style_file + '"/>'
    parsed = parser.call(js_method, enso_file.read())
    enso_file.close()
    html_file = open(out_dir + "/" + out_name, "w")
    html_file.write(stylesheet_link + parsed)
    html_file.close()


def init_gen_dir(name: str, style_file: str) -> None:
    """
    Creates the `gen` directory with all necessary files.
    """
    safe_create_directory(name)
    stylesheet_file: str = "/" + style_file
    index_html_file: str = "/index.html"
    source_directory: str = "src"
    copy_file(constants.IN_DIR + stylesheet_file, name + stylesheet_file)
    copy_file(source_directory + index_html_file, name + index_html_file)


def init_parser(parser_file: str) -> execjs.ExternalRuntime:
    """
    Compiles the JS parser to call from within Python code.
    """
    parser = open(constants.IN_DIR + "/" + parser_file, "r").read()
    parser = execjs.compile(parser)
    return parser
