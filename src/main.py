"""
Enso standard library documentation generator.
"""
import argparse
import constants
from downloaders import download_stdlib, download_parser, download_stylesheet
from parse import init_parser, init_gen_dir, gen_all_files


def main(token: str) -> None:
    """
    Program entry point.
    """
    download_stdlib(token)
    download_parser()
    download_stylesheet()
    parser = init_parser()
    init_gen_dir()
    gen_all_files(parser)
    print("All done.")


if __name__ == "__main__":
    arg_parser = argparse.ArgumentParser(
        description="Generates documentation sites for Enso Standard Library."
    )
    arg_parser.add_argument("token", help="GitHub user Personal Access Token.")
    arg_parser.add_argument(
        "--org", default=constants.ORGANIZATION, help="GitHub organization."
    )
    arg_parser.add_argument(
        "--repo", default=constants.REPO, help="Organization's repository."
    )
    arg_parser.add_argument("--br", default=constants.BRANCH, help="Repository branch.")
    arg_parser.add_argument(
        "--dir", default=constants.DIRECTORY, help="Repository directory."
    )
    arg_parser.add_argument(
        "--commit", default=constants.DIRECTORY, help="Scala parser commit."
    )
    arg_parser.add_argument(
        "--out", default=constants.OUT_DIR, help="Output directory."
    )
    args = arg_parser.parse_args()
    constants.ORGANIZATION = args.org
    constants.REPO = args.repo
    constants.BRANCH = args.br
    constants.DIRECTORY = args.dir
    constants.PARSER_COMMIT = args.commit
    constants.OUT_DIR = args.out
    main(args.token)
