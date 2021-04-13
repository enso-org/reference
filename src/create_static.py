"""
Methods for generating static HTML content.
"""
from typing import List
import logging
from airium import Airium


def add_breadcrumbs_to_pages(out_dir: str, temp_dir: str, gen_files: List[str]) -> None:
    """
    Method used to create breadcrumbs (for now - tree) and add them to generated content.
    """
    template = Airium()
    logging.info("Generating breadcrumbs")
    gen_files.remove("Main")
    grouped_file_names = group_by_prefix(gen_files)
    create_html_tree(template, "", grouped_file_names, gen_files)
    breadcrumbs = (
        str(template).replace('class="', 'className="').replace("onclick", "onClick")
    )

    stl = """
    <style jsx>{`
        .section ul {
          cursor: pointer;
          list-style: none;
          padding: 0;
          margin: 0;
          word-wrap: initial;
        }
 
        .section span {
          cursor: pointer;
        }
 
        ul li {
          padding: 5px 10px;
        }
 
        .section ul {
          display: none;
        }
        .section input:checked ~ ul {
          display: block;
        }
        .section input[type='checkbox'] {
          display: none;
        }
        .section {
          position: relative;
          padding-left: 20px !important;
          list-style-type: none;
        }
 
        .section label:after {
          content: '▶';
          position: absolute;
          top: 7px;
          left: 0;
          padding: 0;
          text-align: center;
          font-size: 14px;
          color: rgba(75, 88, 100, var(--tw-text-opacity));
          transition: all 0.3s;
        }
 
        .section input:checked ~ label:after {
          transform: rotate(90deg);
        }
      `}</style>
      """

    breadcrumbs = "<div>" + stl + breadcrumbs + "</div>"

    for out_name in gen_files:
        temp_file = open(temp_dir + "/" + out_name + ".js", "r")
        out_file = open(out_dir + "/" + out_name + ".js", "w")
        out_file.write(temp_file.read().replace("{/*BREADCRUMBS*/}", breadcrumbs))
        temp_file.close()
        out_file.close()

    std_main_file = open(temp_dir + "/" + "Main.js", "r")
    index_file = open(out_dir + "/" + "index.js", "w")
    index_file.write(std_main_file.read().replace("{/*BREADCRUMBS*/}", breadcrumbs))
    std_main_file.close()
    index_file.close()


def create_html_tree(
    template: Airium, curr_beg: str, ele, all_existing_files: List[str]
) -> None:
    """
    Method used to create all of HTML tree chooser's branches and leaves.
    """
    if len(ele) > 0:
        with template.ul():
            for key, value in ele.items():
                file_name = curr_beg + "-" + key if len(curr_beg) > 0 else key
                action = ""
                if file_name in all_existing_files:
                    action = file_name
                elif file_name + "-Main" in all_existing_files:
                    action = file_name + "-Main"
                if len(value) > 0:
                    klass = "section"
                    with template.li(klass=klass):
                        template.input(type="checkbox", id=file_name)
                        with template.label(for_=file_name):
                            template.a(href=action, _t=key)
                        beg = curr_beg
                        if len(curr_beg) == 0:
                            beg = key
                        else:
                            beg = beg + "-" + key
                        create_html_tree(template, beg, value, all_existing_files)
                else:
                    with template.li():
                        template.a(href=action, _t=key)


def group_by_prefix(strings: List[str]) -> dict:
    """
    Groups strings by common prefixes
    """
    strings_by_prefix: dict = {}
    for string in strings:
        if len(string.split("-")) <= 1:
            strings_by_prefix.setdefault(string, [])
            continue
        prefix, suffix = map(str.strip, string.split("-", 1))
        group = strings_by_prefix.setdefault(prefix, [])
        group.append(suffix)
    for key, string_group in strings_by_prefix.items():
        strings_by_prefix[key] = group_by_prefix(string_group)
    return strings_by_prefix
