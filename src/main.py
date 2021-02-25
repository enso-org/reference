"""
Enso standard library documentation generator.
"""
import argparse
import constants
from downloaders import download_stdlib, download_parser, download_stylesheet
from parse import init_parser, init_gen_dir, gen_all_files
from create_static import create_index_page


def main(arguments: argparse.Namespace) -> None:
    """
    Program entry point.
    """
    # download_stdlib(
    #     arguments.token, arguments.org, arguments.repo, arguments.br, arguments.dir
    # )
    # download_parser(arguments.parser_url, arguments.commit, arguments.parser)
    # download_stylesheet(arguments.ide_br, arguments.style)
    parser = init_parser(arguments.parser)
    # init_gen_dir(arguments.out, arguments.style)
    gen_files = gen_all_files(parser, arguments.std, arguments.out, arguments.style)
    create_index_page(arguments.out, arguments.index, gen_files)
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
        "--ide_br", default=constants.IDE_BRANCH, help="IDE branch."
    )
    arg_parser.add_argument(
        "--commit", default=constants.PARSER_COMMIT, help="Scala parser commit."
    )
    arg_parser.add_argument(
        "--out", default=constants.OUT_DIR, help="Output directory."
    )
    arg_parser.add_argument(
        "--std", default=constants.STD_LIB_DIR, help="Std-Lib directory."
    )
    arg_parser.add_argument(
        "--style", default=constants.STYLE_FILE, help="Style file name."
    )
    arg_parser.add_argument(
        "--parser", default=constants.PARSER_FILE, help="Parser file name."
    )
    arg_parser.add_argument(
        "--parser_url", default=constants.PARSER_URL, help="URL to parser."
    )
    arg_parser.add_argument(
        "--index", default=constants.INDEX_FILE, help="Index page name."
    )
    args = arg_parser.parse_args()
    main(args)
