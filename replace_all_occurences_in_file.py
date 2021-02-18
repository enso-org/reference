import os


def replace_all_occurrences_in_file(path_old, path_new, pat, to):
    file1 = open(path_old, 'r')
    file2 = open(path_new, 'w')

    for line in file1.readlines():
        new_line = line.replace(pat, to)
        file2.write(new_line)
    file1.close()
    file2.close()
    os.remove(path_old)
