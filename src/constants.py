"""
File containing all the constants.
"""

#: GitHub organization from which std-lib will be downloaded.
ORGANIZATION: str = "enso-org"
#: Repository of mentioned organization from which std-lib will be downloaded.
REPO: str = "enso"
#: Branch of mentioned repository from which std-lib will be downloaded.
BRANCH: str = "main"
#: Directory from mentioned branch from which std-lib will be downloaded.
DIRECTORY: str = "distribution/std-lib"

#: Commit from which scala parser will be obtained.
PARSER_COMMIT: str = "5c735b0ae7fc14bf72f5c0bf43b17c3fdf5d86b4"
#: Scala parser package URL.
PARSER_URL: str = "https://packages.luna-lang.org/parser-js/nightly/"
#: IDE repository URL.
IDE_REPO_URL: str = "https://raw.githubusercontent.com/enso-org/ide/"

#: Enso file extension.
FILE_EXT: str = ".enso"

#: Input directory.
IN_DIR: str = "distribution"
#: Output directory.
OUT_DIR: str = "gen"
