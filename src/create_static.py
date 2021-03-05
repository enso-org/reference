"""
Methods for generating static HTML content.
"""
from typing import List
import logging
from airium import Airium


def create_index_page(out_dir: str, out_name: str, gen_files: List[str]) -> None:
    """
    Generates index page.
    """
    template = Airium()
    logging.info("Generating: %s", out_name)
    with template.html():
        with template.head():
            template.title(_t="Enso Reference")
            template.link(href="style.css", rel="stylesheet")
            template.link(href="favicon.ico", rel="icon")
            template.style(
                _t="""ul, .section ul {
                        cursor: pointer;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        word-wrap: initial;
                      }
                      
                      ul li {
                        padding: 5px 10px;
                      }
                      
                      .section ul { display: none; }
                      .section input:checked ~ ul { display: block; }
                      .section input[type=checkbox] { display: none; }
                      .section { 
                        position: relative; 
                        padding-left: 20px !important;
                      }
                      
                      .section label:after {
                        content: "+";
                        position: absolute;
                        top: 0; left: 0;
                        padding: 0;
                        text-align: center;
                        font-size: 17px;
                        color: cornflowerblue;
                        transition: all 0.3s;
                      }
                      
                      .section input:checked ~ label:after { 
                        color: cadetblue;
                        transform: rotate(45deg);
                      }
                      
                      @media only screen and (max-width: 1100px) {
                          #tree {
                              width: 30% !important;
                          }
                      }
                      
                      @media only screen and (max-width: 850px) {
                          #tree {
                              width: 40% !important;
                          }
                      }
                      """
            )
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
                    id="tree",
                    style="""background-color: #efefef;
                             border-radius: 14px; 
                             width: 20%; 
                             margin: 15px; 
                             padding-left: 20px;
                             padding-top: 10px;
                             overflow: scroll;
                             height: 90%;""",
                ):
                    grouped_file_names = group_by_prefix(gen_files)
                    create_html_tree(template, "", grouped_file_names, gen_files)
                template.iframe(
                    frameborder="0",
                    height="100%",
                    id="frame",
                    src="Base-Main.html",
                    width="100%",
                    target="_blank",
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
    if len(ele) > 0:
        with template.ul():
            for key, value in ele.items():
                file_name = curr_beg + "-" + key
                action = ""
                if file_name in all_existing_files:
                    action = "set_frame_content('" + file_name + ".html')"
                if len(value) > 0:
                    klass = "section"
                    with template.li(klass=klass):
                        template.input(type="checkbox", id=file_name)
                        template.label(for_=file_name, _t=key, onclick=action)
                        beg = curr_beg
                        if len(curr_beg) == 0:
                            beg = key
                        else:
                            beg = beg + "-" + key
                        create_html_tree(template, beg, value, all_existing_files)
                else:
                    template.li(onclick=action, style="padding-left: 19px;", _t=key)


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
