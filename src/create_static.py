"""
Methods for generating static HTML content.
"""
from airium import Airium


def create_index_page(out_dir: str, out_name: str) -> None:
    """
    Generates index page.
    """
    template = Airium()

    print("Generating: " + out_name)

    with template.html():
        with template.head():
            template.link(href="style.css", rel="stylesheet")
            template.style(_t="ul { padding-inline-start: 1em; }")
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
                             padding-left: 2em"""
                ):
                    with template.ul():
                        with template.li(_t="Foo"):
                            with template.ul():
                                template.li(_t="Bar")
                                template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")
                        template.li(_t="Foo")
                        template.li(_t="Bar")
                        template.li(_t="Baz")

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
