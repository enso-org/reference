"""
Enso standard library documentation generator.
"""
import argparse
import logging
import constants
from downloaders import download_stdlib, download_parser
from safe_create_directory import safe_create_directory
from parse import init_parser, gen_all_files
from create_static import add_breadcrumbs_to_pages


def main(arguments: argparse.Namespace) -> None:
    """
    Program entry point.
    """
    logging.basicConfig(level=arguments.log_level)
    if not arguments.dont_download:
        download_stdlib(
            arguments.token, arguments.org, arguments.repo, arguments.br, arguments.dir
        )
        download_parser(arguments.parser_url, arguments.commit, arguments.parser)
    parser = init_parser(arguments.parser)
    safe_create_directory("temp")
    safe_create_directory(arguments.out)
    gen_files = gen_all_files(parser, arguments.std, "temp")
    add_breadcrumbs_to_pages(arguments.out, "temp", gen_files)
    logging.info("All done.")


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
    arg_parser.add_argument("--log_level", default=logging.INFO, help="Logging level.")
    arg_parser.add_argument(
        "--dont_download", default=False, help="Have local stdlib and parser."
    )
    args = arg_parser.parse_args()
    main(args)
