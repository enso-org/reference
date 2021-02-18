import sys
import getopt
import execjs
import glob
from download_helpers import *
from replace_all_occurences_in_file import *
from safe_create_dir import *

ORGANIZATION = "enso-org"
REPO = "enso"
BRANCH = "main"
DIRECTORY = "distribution/std-lib"
PARSER_COMMIT = "5e309bddcbec33cfbd150fcb8a16b45192cf5189"


def main(argv):
    download_stdlib(argv)
    download_parser()
    download_stylesheet()
    parser = init_parser()
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
        try:
            gen_file(parser, filename, out_file_name)
        except:
            print("Could not generate: " + out_file_name)


def gen_file(parser, path, out_name):
    """
    Generates doc HTML and saves it.
    """
    out_dir = "gen"

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
    in_dir = "distribution"
    out_dir = "gen"
    safe_create_directory(out_dir)
    os.system("cp " + in_dir + "/style.css " + out_dir + "/style.css")
    os.system("cp src/index.html " + out_dir + "/index.html")


def init_parser():
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
    repo_url = "https://raw.githubusercontent.com/enso-org/ide/"
    file_path = "develop/src/rust/ide/view/src/documentation/style.css"
    url = repo_url + file_path
    download_to = "distribution/temp-style.css"
    download_from_url(url, download_to)
    replace_all_occurrences_in_file(
        download_to, "distribution/style.css", ".docVis", "body"
    )


def download_parser():
    """
    Downloads scala parser from Engine repository.
    """
    url = "https://packages.luna-lang.org/parser-js/nightly/"
    url = url + PARSER_COMMIT + "/scala-parser.js"
    download_to = "distribution/scala-parser.js"
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
        opts, args = getopt.getopt(argv, "t:", ["token="])
    except getopt.GetoptError as err:
        print(str(err))
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-t", "--token"):
            token = arg
        else:
            print("Expected GitHub token.")
            sys.exit(2)

    download_from_git(
        token, org=ORGANIZATION, repo=REPO, branch=BRANCH, folder=DIRECTORY
    )


if __name__ == "__main__":
    main(sys.argv[1:])
