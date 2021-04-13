import { StaticNavigation } from "components/navigation";
import {
  Container,
  ContainerOrScreenIfSmall,
  RootContainer,
} from "components/container";
import { Header } from "components/header";
import { Chapter } from "components/chapter";
import { SectionCommunity } from "components/section-community";
import { SectionFooter } from "components/section-footer";
import { StickyButtons } from "components/sticky-buttons";

import AtomsIcon from "../../../public/img/icon/atoms.svg";
import MethodsIcon from "../../../public/img/icon/methods.svg";
import SubmodulesIcon from "../../../public/img/icon/submodules.svg";

function Docs() {
  return (
    <div>
      {/*<div className="breadcrumb-panel">*/}
      {/*  <Container>/!*BREADCRUMBS2*!/</Container>*/}
      {/*</div>*/}
      <Container>
        <div className="root">
          <div className="toc"><div>
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
      <ul>
  <li className="section">
    <input type="checkbox" id="Test" />
    <label for="Test">
      <a href="Test">Test</a>
    </label>
    <ul>
      <li>
        <a href="Test-Bench">Bench</a>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Database" />
    <label for="Database">
      <a href="Database">Database</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Database-Data" />
        <label for="Database-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li>
            <a href="Database-Data-Dialect">Dialect</a>
          </li>
          <li>
            <a href="Database-Data-Column">Column</a>
          </li>
          <li>
            <a href="Database-Data-Sql">Sql</a>
          </li>
          <li>
            <a href="Database-Data-Table">Table</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Database-Data-Internal" />
            <label for="Database-Data-Internal">
              <a href="">Internal</a>
            </label>
            <ul>
              <li>
                <a href="Database-Data-Internal-Base_Generator">Base_Generator</a>
              </li>
              <li>
                <a href="Database-Data-Internal-IR">IR</a>
              </li>
              <li>
                <a href="Database-Data-Internal-Helpers">Helpers</a>
              </li>
              <li>
                <a href="Database-Data-Internal-Vector_Builder">Vector_Builder</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Database-Connection" />
        <label for="Database-Connection">
          <a href="">Connection</a>
        </label>
        <ul>
          <li>
            <a href="Database-Connection-Database">Database</a>
          </li>
          <li>
            <a href="Database-Connection-Connection">Connection</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Geo" />
    <label for="Geo">
      <a href="Geo">Geo</a>
    </label>
    <ul>
      <li>
        <a href="Geo-Geo_Json">Geo_Json</a>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Table" />
    <label for="Table">
      <a href="Table">Table</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Table-Data" />
        <label for="Table-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li>
            <a href="Table-Data-Column">Column</a>
          </li>
          <li>
            <a href="Table-Data-Order_Rule">Order_Rule</a>
          </li>
          <li>
            <a href="Table-Data-Table">Table</a>
          </li>
          <li>
            <a href="Table-Data-Storage">Storage</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Table-Io" />
        <label for="Table-Io">
          <a href="">Io</a>
        </label>
        <ul>
          <li>
            <a href="Table-Io-Csv">Csv</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Table-Internal" />
        <label for="Table-Internal">
          <a href="">Internal</a>
        </label>
        <ul>
          <li>
            <a href="Table-Internal-Java_Exports">Java_Exports</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Image" checked="True" />
    <label for="Image">
      <a href="Image">Image</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Image-Codecs" />
        <label for="Image-Codecs">
          <a href="Image-Codecs" className="font-bold">Codecs</a>
        </label>
        <ul>
          <li>
            <a href="Image-Codecs-Internal">Internal</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Image-Data" />
        <label for="Image-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li className="section">
            <input type="checkbox" id="Image-Data-Matrix" />
            <label for="Image-Data-Matrix">
              <a href="Image-Data-Matrix">Matrix</a>
            </label>
            <ul>
              <li>
                <a href="Image-Data-Matrix-Internal">Internal</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Image-Data-Histogram">Histogram</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Image-Data-Image" />
            <label for="Image-Data-Image">
              <a href="Image-Data-Image">Image</a>
            </label>
            <ul>
              <li>
                <a href="Image-Data-Image-Internal">Internal</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Base" />
    <label for="Base">
      <a href="Base">Base</a>
    </label>
    <ul>
      <li>
        <a href="Base-Math">Math</a>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-Meta" />
        <label for="Base-Meta">
          <a href="Base-Meta">Meta</a>
        </label>
        <ul>
          <li>
            <a href="Base-Meta-Enso_Project">Enso_Project</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-Data" />
        <label for="Base-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li className="section">
            <input type="checkbox" id="Base-Data-Noise" />
            <label for="Base-Data-Noise">
              <a href="Base-Data-Noise">Noise</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Noise-Generator">Generator</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Interval" />
            <label for="Base-Data-Interval">
              <a href="Base-Data-Interval">Interval</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Interval-Bound">Bound</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Json" />
            <label for="Base-Data-Json">
              <a href="Base-Data-Json">Json</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Json-Internal">Internal</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Map" />
            <label for="Base-Data-Map">
              <a href="Base-Data-Map">Map</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Map-Internal">Internal</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Base-Data-Locale">Locale</a>
          </li>
          <li>
            <a href="Base-Data-Pair">Pair</a>
          </li>
          <li>
            <a href="Base-Data-Vector">Vector</a>
          </li>
          <li>
            <a href="Base-Data-Maybe">Maybe</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Ordering" />
            <label for="Base-Data-Ordering">
              <a href="Base-Data-Ordering">Ordering</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Ordering-Sort_Order">Sort_Order</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Base-Data-List">List</a>
          </li>
          <li>
            <a href="Base-Data-Range">Range</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Array" />
            <label for="Base-Data-Array">
              <a href="">Array</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Array-Extensions">Extensions</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Number" />
            <label for="Base-Data-Number">
              <a href="">Number</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Number-Extensions">Extensions</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Time" />
            <label for="Base-Data-Time">
              <a href="">Time</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Time-Time_Of_Day">Time_Of_Day</a>
              </li>
              <li>
                <a href="Base-Data-Time-Time">Time</a>
              </li>
              <li>
                <a href="Base-Data-Time-Date">Date</a>
              </li>
              <li>
                <a href="Base-Data-Time-Duration">Duration</a>
              </li>
              <li>
                <a href="Base-Data-Time-Zone">Zone</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Any" />
            <label for="Base-Data-Any">
              <a href="">Any</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Any-Extensions">Extensions</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Data-Text" />
            <label for="Base-Data-Text">
              <a href="">Text</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Text-Extensions">Extensions</a>
              </li>
              <li>
                <a href="Base-Data-Text-Split_Kind">Split_Kind</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-System" />
        <label for="Base-System">
          <a href="">System</a>
        </label>
        <ul>
          <li className="section">
            <input type="checkbox" id="Base-System-Process" />
            <label for="Base-System-Process">
              <a href="Base-System-Process">Process</a>
            </label>
            <ul>
              <li>
                <a href="Base-System-Process-Exit_Code">Exit_Code</a>
              </li>
            </ul>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-System-File" />
            <label for="Base-System-File">
              <a href="Base-System-File">File</a>
            </label>
            <ul>
              <li>
                <a href="Base-System-File-Option">Option</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Base-System-Platform">Platform</a>
          </li>
          <li>
            <a href="Base-System-Environment">Environment</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-Polyglot" />
        <label for="Base-Polyglot">
          <a href="">Polyglot</a>
        </label>
        <ul>
          <li>
            <a href="Base-Polyglot-Java">Java</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-Error" />
        <label for="Base-Error">
          <a href="">Error</a>
        </label>
        <ul>
          <li>
            <a href="Base-Error-Extensions">Extensions</a>
          </li>
          <li>
            <a href="Base-Error-Common">Common</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Base-Network" />
        <label for="Base-Network">
          <a href="">Network</a>
        </label>
        <ul>
          <li className="section">
            <input type="checkbox" id="Base-Network-Uri" />
            <label for="Base-Network-Uri">
              <a href="Base-Network-Uri">Uri</a>
            </label>
            <ul>
              <li>
                <a href="Base-Network-Uri-Internal">Internal</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Base-Network-Proxy">Proxy</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Base-Network-Http" />
            <label for="Base-Network-Http">
              <a href="Base-Network-Http">Http</a>
            </label>
            <ul>
              <li>
                <a href="Base-Network-Http-Form">Form</a>
              </li>
              <li>
                <a href="Base-Network-Http-Method">Method</a>
              </li>
              <li>
                <a href="Base-Network-Http-Version">Version</a>
              </li>
              <li>
                <a href="Base-Network-Http-Status_Code">Status_Code</a>
              </li>
              <li className="section">
                <input type="checkbox" id="Base-Network-Http-Request" />
                <label for="Base-Network-Http-Request">
                  <a href="Base-Network-Http-Request">Request</a>
                </label>
                <ul>
                  <li>
                    <a href="Base-Network-Http-Request-Body">Body</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Base-Network-Http-Header">Header</a>
              </li>
              <li className="section">
                <input type="checkbox" id="Base-Network-Http-Response" />
                <label for="Base-Network-Http-Response">
                  <a href="Base-Network-Http-Response">Response</a>
                </label>
                <ul>
                  <li>
                    <a href="Base-Network-Http-Response-Body">Body</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="Base-Network-Internal">Internal</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li className="section">
    <input type="checkbox" id="Visualization" />
    <label for="Visualization">
      <a href="">Visualization</a>
    </label>
    <ul>
      <li>
        <a href="Visualization-Geo_Map">Geo_Map</a>
      </li>
      <li>
        <a href="Visualization-Histogram">Histogram</a>
      </li>
      <li>
        <a href="Visualization-Helpers">Helpers</a>
      </li>
      <li>
        <a href="Visualization-Scatter_Plot">Scatter_Plot</a>
      </li>
      <li className="section">
        <input type="checkbox" id="Visualization-Sql" />
        <label for="Visualization-Sql">
          <a href="">Sql</a>
        </label>
        <ul>
          <li>
            <a href="Visualization-Sql-Visualization">Visualization</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Visualization-Table" />
        <label for="Visualization-Table">
          <a href="">Table</a>
        </label>
        <ul>
          <li>
            <a href="Visualization-Table-Visualization">Visualization</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul></div></div>
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Image.Image.write</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Write an image to a file. </p><p>Arguments: <ul><li> location: The location to write the image to.</li><li> flags: A vector of flags that control how the image is written.</li></ul> </p><div class="example"><div class="summary">Example</div> Write the image with applying png compression. <div><div class="doc-code-container" id="gra6smYT"><pre><code>Codecs.write path image</code><br /></pre></div><button id="b848q9rK" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Write the image with applying png compression. <div><div class="doc-code-container" id="veQVNQ7v"><pre><code>Codecs.write path image (Codecs.Write_Png_Compression 9)</code><br /></pre></div><button id="ThXuHAl8" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Write the image with applying several flags. <div><div class="doc-code-container" id="uYemW1LC"><pre><code>Codecs.write path image [Codecs.Write_Jpeg_Quality 40, Codecs.Write_Jpeg_Progressive]</code><br /></pre></div><button id="S4yjRZmS" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">read</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Read an image from a file. </p><p>The functon reads images in RGB format, or RGBA if the <code>Read_Alpha_Channel</code> flag is specified. </p><p>Arguments: <ul><li> location: the file to read.</li><li> flags: the read flags.</li></ul> </p><div class="example"><div class="summary">Example</div> Read the image. <div><div class="doc-code-container" id="bVDaOddz"><pre><code>Codecs.read &quot;image.png&quot;</code><br /></pre></div><button id="mjmXCLAl" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Read the image with alpha channel. <div><div class="doc-code-container" id="91MmsdHl"><pre><code>Codecs.read &quot;image.png&quot; Codecs.Read_Alpha_Channel</code><br /></pre></div><button id="1qeUiWvR" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Read the image and convert it to grayscale. <div><div class="doc-code-container" id="0unZlVCo"><pre><code>Codecs.read &quot;image.png&quot; Codecs.Read_Grayscale</code><br /></pre></div><button id="c6Bx5UkA" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Write_Flag</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Write_Jpeg_Quality</span> <span class="parameter">value=95 </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the quality used when writing a JPEG. </p><p>Arguments: <ul><li> value: A quality value from 0 to 100 (the higher, the better).</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Jpeg_Progressive</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Enable progressive JPEG compression format. Disabled by default.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Jpeg_Optimize</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Enable optimized JPEG encoding algorithms. Disabled by default.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Jpeg_Luma_Quality</span> <span class="parameter">value=0 </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the luma quality level used when writing a JPEG. </p><p>Arguments: <ul><li> value: A quality value from 0 to 100 (the higher, the better).</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Jpeg_Chroma_Quality</span> <span class="parameter">value=0 </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the chroma quality level used when writing a JPEG. </p><p>Arguments: <ul><li> value: A quality value from 0 to 100 (the higher, the better).</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Png_Compression</span> <span class="parameter">value=3 </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the compression level used when writing a PNG. </p><p>Arguments: <ul><li> value: A compression level from 0 to 9. A higher value means a smaller
       size but a longer compression time.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Write_Webp_Quality</span> <span class="parameter">value=101 </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the quality used when writing a WEBP image. </p><p>Arguments: <ul><li> value: A quality from 0 to 100 (the higher, the better). A quality
       above 100 indicates that the encoder should use lossless compression.</li></ul></p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Read_Flag</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Read_Alpha_Channel</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Read the image with its alpha channel, otherwise the channel gets cropped.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Read_Grayscale</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Always convert the image to a single channel grayscale image.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Read_Gdal</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Use Geographic Data Abstraction Library (GDAL) driver to load images in geospatial raster data formats.</p></div></div></div></div></div><div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div></div>
        </div>
      </Container>
    </div>
  );
}

export default function Main(props) {
  return (
    <RootContainer className="theme-light">
      <Header />

      <Chapter id="home" noSpacing="true">
        <div className="bg-lang-bg">
          <StaticNavigation dark="true" />
        </div>
      </Chapter>
      <div className="doc">
        <Docs />
      </div>
      <Chapter id="community">
        <SectionCommunity />
      </Chapter>

      <StickyButtons />

      <Chapter id="footer">
        <SectionFooter />
      </Chapter>
    </RootContainer>
  );
}
