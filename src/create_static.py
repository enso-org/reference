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
            template.title(_t="Enso Std-Lib Docs")
            template.link(href="style.css", rel="stylesheet")
            template.style(_t="ul { padding-inline-start: 3px; }")
            template.style(
                _t="""li { padding-left: 0px; 
                                      transition: all 0.3s ease; 
                                      cursor: pointer;}"""
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
                _t="Enso Docs",
            )
            with template.div(style="background-color: #fafafa; display: flex"):
                with template.div(
                    style="""background-color: #efefef;
                             border-radius: 14px; 
                             width: 20%; 
                             margin: 15px; 
                             padding-left: 2em;
                             overflow: scroll;
                             height: 90%;"""
                ):
                    with template.ul():
                        grouped_file_names = group_by_prefix(gen_files)
                        for key, value in grouped_file_names.items():
                            template.li(_t=key)
                            with template.ul():
                                for name in value:
                                    template.li(
                                        _t=name,
                                        onclick="set_frame_content('"
                                        + key
                                        + "-"
                                        + name
                                        + ".html')",
                                    )
                template.iframe(
                    frameborder="0",
                    height="100%",
                    id="frame",
                    src="Base-src-Network-Http-Request-Body.html",
                    width="100%",
                )

    html_file = open(out_dir + "/" + out_name, "w")
    html_file.write(str(template))
    html_file.close()


def group_by_prefix(strings: List[str]) -> dict:
    """
    Groups strings by common prefixes
    """
    strings_by_prefix: dict = {}
    for string in strings:
        prefix, suffix = map(str.strip, string.split("-", 1))
        group = strings_by_prefix.setdefault(prefix, [])
        group.append(suffix)
    # for string_group in strings_by_prefix.values():
    #     group_by_prefix(string_group)
    return strings_by_prefix
