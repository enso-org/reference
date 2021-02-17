import sys
import getopt
from download_helpers import download_from_git, download_from_url, line_prepender

ORGANIZATION = "enso-org"
REPO = "enso"
BRANCH = "main"
DIRECTORY = "distribution/std-lib"
PARSER_COMMIT = "5e309bddcbec33cfbd150fcb8a16b45192cf5189"
PARSER_PREAMBLE = "var __ScalaJSEnv = { global: window };"


def main(argv):
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

    url = "https://packages.luna-lang.org/parser-js/nightly/"
    url = url + PARSER_COMMIT + "/scala-parser.js"
    download_to = "distribution/scala-parser.js"
    download_from_url(url, download_to)
    line_prepender(download_to, PARSER_PREAMBLE)


if __name__ == '__main__':
    main(sys.argv[1:])
