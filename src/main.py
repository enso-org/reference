"""
Enso standard library documentation generator.
"""
import sys
from downloaders import download_stdlib, download_parser, download_stylesheet

# pylint: disable=no-name-in-module
from parse import init_parser, init_gen_dir, gen_all_files

# pylint: enable=no-name-in-module


def main(argv):
    """
    Program entry point.
    """
    download_stdlib(argv)
    download_parser()
    download_stylesheet()
    parser = init_parser()
    init_gen_dir()
    gen_all_files(parser)
    print("All done.")


if __name__ == "__main__":
    main(sys.argv[1:])
