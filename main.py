import os
import sys
import getopt
import execjs
from download_helpers import download_from_git, download_from_url, remove_exports

ORGANIZATION = "enso-org"
REPO = "enso"
BRANCH = "main"
DIRECTORY = "distribution/std-lib"
PARSER_COMMIT = "5e309bddcbec33cfbd150fcb8a16b45192cf5189"


def main(argv):
    download_base(argv)
    download_parser()
    parser = init_parser()
    test_parse(parser)


def test_parse(parser):
    example = open('distribution/std-lib/Base/src/Math.enso', 'r').read()
    parsed = parser.call("$e_doc_parser_generate_html_source", example)
    os.mkdir('distribution/gen')
    html_file = open('distribution/gen/Math.html', 'w')
    html_file.write(parsed)
    html_file.close()

    example = open('distribution/std-lib/Base/src/Meta.enso', 'r').read()
    parsed = parser.call("$e_doc_parser_generate_html_source", example)
    html_file = open('distribution/gen/Meta.html', 'w')
    html_file.write(parsed)
    html_file.close()


def init_parser():
    parser = open('distribution/parser.js', 'r').read()
    parser = execjs.compile(parser)
    return parser


def download_parser():
    url = "https://packages.luna-lang.org/parser-js/nightly/"
    url = url + PARSER_COMMIT + "/scala-parser.js"
    download_to = "distribution/scala-parser.js"
    download_from_url(url, download_to)
    remove_exports()


def download_base(argv):
    token = ""
    try:
        opts, args = getopt.getopt(argv, "t:", ["token="])
    except getopt.GetoptError as err:
        print(str(err))
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-t", "--token"):
            token = arg
    download_from_git(token,
                      org=ORGANIZATION,
                      repo=REPO,
                      branch=BRANCH,
                      folder=DIRECTORY)


if __name__ == '__main__':
    main(sys.argv[1:])
