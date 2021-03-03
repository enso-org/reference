"""
File containing all the constants.
"""

#: The GitHub organization from which the standard libraries will be downloaded.
ORGANIZATION: str = "enso-org"
#: The repository in the above organization from which standard libraries
#: will be downloaded.
REPO: str = "enso"
#: The branch in the above repository from which standard libraries
#: will be downloaded.
BRANCH: str = "main"
#: The directory in the above branch from which standard libraries
#: will be downloaded.
DIRECTORY: str = "distribution/std-lib"

#: The commit from which scala parser will be obtained.
PARSER_COMMIT: str = "43c6fde4ef5873c645aa1ff196d7b36864831468"
#: The URL used to download scala parser package.
PARSER_URL: str = "https://packages.luna-lang.org/parser-js/nightly/"
#: The method in scala parser used to generate documentation from AST.
PARSE_AST_METHOD: str = "$e_doc_parser_generate_html_source"
#: The method in scala parser used to generate documentation from doc code.
PARSE_PURE_METHOD: str = "$e_doc_parser_generate_html_from_doc"
#: The URL leading to IDE repository.
IDE_REPO_URL: str = "https://raw.githubusercontent.com/enso-org/ide/"
#: The branch in the above repository from which stylesheet will be downloaded.
IDE_BRANCH: str = "develop"
#: The directory in the above repository from which stylesheet will be obtained.
IDE_DIRECTORY: str = "/src/rust/ide/view/src/documentation/"

#: The Enso source file extension.
FILE_EXT: str = ".enso"

#: The input directory, into which all downloads will go.
IN_DIR: str = "distribution"
#: The input directory, into which the Standard Library will go.
STD_LIB_DIR: str = IN_DIR + "/std-lib"
#: The output directory, into which all generated content will go.
OUT_DIR: str = "gen"


#: The scala parser file name.
PARSER_FILE: str = "scala-parser.js"
#: The stylesheet file name.
STYLE_FILE: str = "style.css"
#: The generated HTML index page.
INDEX_FILE: str = "index.html"
