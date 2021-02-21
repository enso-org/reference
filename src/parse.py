"""
Creates `gen` directory with all necessary files.
"""
import os
import glob
import execjs
from safe_create_directory import safe_create_directory


def gen_all_files(parser: execjs.ExternalRuntime) -> None:
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
                __gen_file(parser, filename, out_file_name)
            except execjs.Error as err:
                print("Could not generate: " + out_file_name)
                print("Got an exception: " + str(err))


def __gen_file(parser: execjs.ExternalRuntime, path: str, out_name: str) -> None:
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


def init_gen_dir() -> None:
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
