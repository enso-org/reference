"""
Creates `gen` directory with all necessary files.
"""
import glob
import logging
from typing import List
import execjs
import constants


def gen_all_files(
    parser: execjs.ExternalRuntime, std_dir: str, out_dir: str
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
            .replace("Standard-", "")
            .replace(constants.FILE_EXT, ".js")
        )
        logging.info("Generating: %s", out_file_name)
        try:
            __gen_file(parser, filename, out_file_name, out_dir)
            all_file_names.append(out_file_name.replace(".js", ""))
        except execjs.Error as err:
            logging.info("Could not generate: %s", out_file_name)
            logging.info("Got an exception: %s", str(err))

    return all_file_names


def __gen_file(
    parser: execjs.ExternalRuntime, path: str, out_name: str, out_dir: str
) -> None:
    """
    Generates an HTML file from Enso source file provided with `path` and saves
    it as `out_name`.
    """
    enso_file = open(path, "r")
    parsed = parser.call(constants.PARSE_AST_METHOD, enso_file.read())
    enso_file.close()
    html_file = open(out_dir + "/" + out_name, "w")
    if len(parsed.replace("<div>", "").replace("</div>", "")) == 0:
        tmp = "\n\n*Enso Reference Viewer.*\n\nNo documentation available for chosen source file."
        parsed = (
            parser.call(constants.PARSE_PURE_METHOD, tmp)
            .replace("<html>", "")
            .replace("</html>", "")
            .replace("<body>", "")
            .replace("</body>", "")
            .replace('style="font-size: 13px;"', "")
        )
    parsed = (
        parsed.replace("display: flex", "display: none")
        .replace("{", "&#123;")
        .replace("}", "&#125;")
    )
    for _ in range(30):
        parsed = parsed.replace("<div></div>", "")
    html_file.write(read_template("template.js").replace("{/*PAGE*/}", parsed))
    html_file.close()


def init_parser(parser_file: str) -> execjs.ExternalRuntime:
    """
    Compiles the JS parser to call from within Python code.
    """
    parser = open(constants.IN_DIR + "/" + parser_file, "r").read()
    parser = execjs.compile(parser)
    return parser


def read_template(template_file: str) -> str:
    """
    Reads the template into a string.
    """
    template = open("src/" + template_file, "r").read()
    return template
