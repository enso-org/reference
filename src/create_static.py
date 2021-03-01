"""
Methods for generating static HTML content.
"""
from typing import List
from airium import Airium


def create_index_page(out_dir: str, out_name: str, gen_files: List[str]) -> None:
    """
    Generates index page.
    """
    template = Airium()
    print("Generating: " + out_name)
    with template.html():
        with template.head():
            template.title(_t="Enso Reference")
            template.link(href="style.css", rel="stylesheet")
            template.style(_t="ul { padding-inline-start: 15px; }")
            template.style(
                _t="""body li {
                        padding-left: 0px !important; 
                        transition: all 0.3s ease; 
                        cursor: pointer;
                        list-style-type: circle;
                      }
                                 
                      body li::marker {
                        color: cornflowerblue;
                      }"""
            )
            template.style(_t="li:hover { color: #0070c9; }")
            template.script(
                _t="""function set_frame_content(file) {
                          document.getElementById("frame").src = file
                      }"""
            )
        with template.body(style="background-color: #333"):
            template.h2(
                style="""text-align: center;
                         padding: 15px; 
                         margin: 0; 
                         color: #fafafa""",
                _t="Enso Reference",
            )
            with template.div(
                style="background-color: #fafafa; display: flex; height: 100%"
            ):
                with template.div(
                    style="""background-color: #efefef;
                             border-radius: 14px; 
                             width: 20%; 
                             margin: 15px; 
                             padding-left: 20px;
                             overflow: scroll;
                             height: 90%;"""
                ):
                    grouped_file_names = group_by_prefix(gen_files)
                    create_html_tree(template, "", grouped_file_names, gen_files)
                template.iframe(
                    frameborder="0",
                    height="100%",
                    id="frame",
                    src="Base-Main.html",
                    width="100%",
                )

    html_file = open(out_dir + "/" + out_name, "w")
    html_file.write(str(template))
    html_file.close()


def create_html_tree(
    template: Airium, curr_beg: str, ele, all_existing_files: List[str]
) -> None:
    """
    Method used to create all of HTML tree chooser's branches and leaves.
    """
    if isinstance(ele, dict):
        with template.ul():
            for key, value in ele.items():
                file_name = curr_beg + "-" + key
                onclick = ""
                if file_name in all_existing_files:
                    onclick = "set_frame_content('" + file_name + ".html')"
                template.li(onclick, _t=key)
                beg = curr_beg
                if len(curr_beg) == 0:
                    beg = key
                else:
                    beg = beg + "-" + key
                create_html_tree(template, beg, value, all_existing_files)
    else:
        with template.ul():
            for name in ele.items():
                file_name = curr_beg + "-" + name
                onclick = ""
                if file_name in all_existing_files:
                    onclick = "set_frame_content('" + file_name + ".html')"
                template.li(onclick, _t=name)


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
