"""
Replaces all occurrences of a word in a file.
"""
import os


def replace_all_occurrences_in_file(
    path_old: str, path_new: str, old_word: str, new_word: str
) -> None:
    """
    Replaces all occurrences of a word in a file.
    """
    file1 = open(path_old, "r")
    file2 = open(path_new, "w")

    for line in file1.readlines():
        new_line: str = line.replace(old_word, new_word)
        file2.write(new_line)
    file1.close()
    file2.close()
    os.remove(path_old)
