import sys
import getopt
from download_helpers import download_from_git

ORGANIZATION = "enso-org"
REPO = "enso"
BRANCH = "main"
DIRECTORY = "distribution/std-lib"


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


if __name__ == '__main__':
    main(sys.argv[1:])
