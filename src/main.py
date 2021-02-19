"""
Enso standard library documentation generator.
"""
import argparse
from downloaders import download_stdlib, download_parser, download_stylesheet

# pylint: disable=no-name-in-module
from parse import init_parser, init_gen_dir, gen_all_files

# pylint: enable=no-name-in-module


def main():
    """
    Program entry point.
    """
    arg_parser = argparse.ArgumentParser(
        description="Generates documentation sites for Enso Standard Library."
    )
    arg_parser.add_argument("token", help="GitHub user Personal Access Token.")
    args = arg_parser.parse_args()
    run_gen(args.token)


def run_gen(token):
    """
    Runs the actual generation process.
    """
    download_stdlib(token)
    download_parser()
    download_stylesheet()
    parser = init_parser()
    init_gen_dir()
    gen_all_files(parser)
    print("All done.")


if __name__ == "__main__":
    main()
