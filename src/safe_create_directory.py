"""
Safely creates a new directory from provided `path`.
"""
import os
import shutil


def safe_create_directory(path: str) -> None:
    """
    Safely creates a new directory from provided `path`.
    """
    if os.path.exists(path):
        shutil.rmtree(path)

    os.makedirs(path)
