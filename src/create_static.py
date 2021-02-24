"""
Methods for generating static HTML content.
"""
from airium import Airium


def create_index_page(out_dir: str, out_name: str) -> None:
    """
    Generates index page.
    """
    template = Airium()

    with template.html():
        with template.head():
            template.link(href="style.css", rel="stylesheet")
        with template.body(style="background-color: #333"):
            template.h2(
                style="text-align: center; padding: 15px; margin: 0; color: #fafafa",
                _t="Enso Docs",
            )
            with template.div(style="background-color: #fafafa"):
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
