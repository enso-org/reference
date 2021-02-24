"""
Runs a system command that copies file from one place to another.
"""
import os


def copy_file(from_path: str, to_path: str) -> None:
    """
    Runs a system command that copies file from one place to another.
    """
    os.system("cp " + from_path + " " + to_path)
