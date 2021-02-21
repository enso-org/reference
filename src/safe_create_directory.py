"""
Safely creates new directory from `path`.
"""
import os
import shutil


def safe_create_directory(path: str) -> None:
    """
    Safely creates new directory from `path`.
    """
    if os.path.exists(path):
        shutil.rmtree(path)

    os.makedirs(path)
