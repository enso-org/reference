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
    <input type="checkbox" id="Image" />
    <label for="Image">
      <a href="Image">Image</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Image-Codecs" />
        <label for="Image-Codecs">
          <a href="Image-Codecs">Codecs</a>
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
    <input type="checkbox" id="Base" checked="True" />
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
        <input type="checkbox" id="Base-Data" checked="True" />
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
            <input type="checkbox" id="Base-Data-Number" checked="True" />
            <label for="Base-Data-Number">
              <a href="">Number</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Number-Extensions" className="font-bold">Extensions</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Decimal.parse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Parses a textual representation of a decimal into a decimal number, returning <code>Nothing</code> if the text does not represent a valid decimal. </p></div><div><p>Arguments: <ul><li> text: The text to parse into a decimal.</li></ul> </p><div class="example"><div class="summary">Example</div> Parse the text &quot;7.6&quot; into a decimal number. <div><div class="doc-code-container" id="0Q1kK6zL"><pre><code>Decimal.parse 7.6</code><br /></pre></div><button id="frxgE826" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Number to JSON conversion. </p></div><div><div class="example"><div class="summary">Example</div> Convert the number 8 to JSON. <div><div class="doc-code-container" id="P5BUFeFa"><pre><code>8.to_json</code><br /></pre></div><button id="yWE5s5g7" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.max</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the larger value of <code>this</code> and <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The number to compare `this` against.</li></ul> </p><div class="example"><div class="summary">Example</div> Find the maximum of 2 and 5. <div><div class="doc-code-container" id="5wugBddU"><pre><code>2.max 5</code><br /></pre></div><button id="CvSO0did" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.min</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the smaller value of <code>this</code> and <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The number to compare `this` against.</li></ul> </p><div class="example"><div class="summary">Example</div> Find the minimum of 2 and 5. <div><div class="doc-code-container" id="s00nNyRa"><pre><code>2.min 5</code><br /></pre></div><button id="JxQpfC0i" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.equals</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks equality of numbers, using an <code>epsilon</code> value. </p></div><div><p>Arguments: <ul><li> that: The number to check equality against.</li><li> epsilon: The value by which `this` and `that` can be separated by before
   counting as not equal.</li></ul> </p><div class="example"><div class="summary">Example</div> Check if 1 is equal to 1.0000001 within 0.001. <div><div class="doc-code-container" id="KtUPqVEM"><pre><code>1.equals 1.0000001 epsilon=0.001</code><br /></pre></div><button id="zQvnLbSz" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Integer.up_to</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new right-exclusive range of integers from <code>this</code> to <code>n</code>. </p></div><div><p>Arguments: <ul><li> n: The end of the range.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a range from 1 to 5. <div><div class="doc-code-container" id="Axh7sqpT"><pre><code>1.up_to 5</code><br /></pre></div><button id="5sEtZMcH" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Decimal.format</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE<span class="details"> The API will become more user-friendly in future.</span></span></p></div></div></div><div><div class=""><p> </p></div><div><p>Converts a decimal value to a string, using the Java string formatting syntax. </p><p>Arguments: <ul><li> fmt: The java</li></ul> </p><div class="example"><div class="summary">Example</div> Convert the value 5 to a string. <div><div class="doc-code-container" id="Spje6mCs"><pre><code>5.fmt &quot;%d&quot;</code><br /></pre></div><button id="15EOXiGK" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.log</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the <code>base</code>-log of <code>this</code>. </p></div><div><p>Arguments: <ul><li> base: The base for the logarithm.</li></ul> </p><div class="example"><div class="summary">Example</div> Calculate log 2 of 4. <div><div class="doc-code-container" id="ezKonFWU"><pre><code>4.log 2</code><br /></pre></div><button id="fZc91aaX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.sqrt</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the square root of <code>this</code>. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the square root of 8. <div><div class="doc-code-container" id="SuSjJ754"><pre><code>8.sqrt</code><br /></pre></div><button id="xIEwrXIv" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.ln</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the natural logarithm function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the natural logarithm of 2. <div><div class="doc-code-container" id="eBrhYkiN"><pre><code>2.ln</code><br /></pre></div><button id="kYWcylmb" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.exp</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the exponential function, raising Euler's number <code>r</code> to the power of <code>this</code>. </p></div><div><div class="example"><div class="summary">Example</div> Calculate e to the 4th power. <div><div class="doc-code-container" id="nmsqOTUU"><pre><code>4.exp</code><br /></pre></div><button id="wSRJ8o9M" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.tanh</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the hyperbolic tangent function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the hyperbolic tangent of 1. <div><div class="doc-code-container" id="3jOyUZOO"><pre><code>1.tanh</code><br /></pre></div><button id="Fr78IzTP" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.cosh</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the hyperbolic cosine function. </p></div><div><div class="example"><div class="summary">Example</div> Calcualte the hyperbolic cosine of 1. <div><div class="doc-code-container" id="CHbPwtmi"><pre><code>1.cosh</code><br /></pre></div><button id="3vA3VDed" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.sinh</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the hyperbolic sine function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the hyperbolic sine of 1. <div><div class="doc-code-container" id="iaz5Bpag"><pre><code>1.sinh</code><br /></pre></div><button id="48gwlzU8" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.tan</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the tangent function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the tangent of 2. <div><div class="doc-code-container" id="fiCfiza1"><pre><code>2.tan</code><br /></pre></div><button id="jGm2DPev" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.cos</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the cosine function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the cosine of 2. <div><div class="doc-code-container" id="2M4v2TDf"><pre><code>2.cos</code><br /></pre></div><button id="gMnRQNf6" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.sin</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the sine function. </p></div><div><div class="example"><div class="summary">Example</div> Calculate the sine of 2. <div><div class="doc-code-container" id="5vS0VGTx"><pre><code>2.sin</code><br /></pre></div><button id="v1BApEWK" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.atan_2</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the argument (angle) in the conversion from cartesian to polar coordinates, taking <code>this</code> as the x coordinate. </p></div><div><p>Arguments: <ul><li> y: The y coordinate.</li></ul> </p><p>The returned angle is in the -pi through pi range. </p><div class="example"><div class="summary">Example</div> Convert the coordinates 1 and 2 to polar form. <div><div class="doc-code-container" id="GtIIWmIP"><pre><code>1.atan_2 2</code><br /></pre></div><button id="sj3CH3pX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.atan</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the inverse of the tangent function. </p></div><div><p>Selects a value in the -pi/2 through pi/2 range. </p><div class="example"><div class="summary">Example</div> Calculate the inverse tangent of 1. <div><div class="doc-code-container" id="z0bnLJHe"><pre><code>1.acos</code><br /></pre></div><button id="P1OnBdNw" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.acos</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the inverse of the cosine function. </p></div><div><p>Selects a value in the -pi/2 through pi/2 range. </p><div class="example"><div class="summary">Example</div> Calculate the inverse cosine of 1. <div><div class="doc-code-container" id="uZP4GdqP"><pre><code>1.acos</code><br /></pre></div><button id="dBhG46xf" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Number.asin</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the inverse of the sine function </p></div><div><p>Selects a value in the -pi/2 through pi/2 range. </p><div class="example"><div class="summary">Example</div> Calculate the inverse sine of 1. <div><div class="doc-code-container" id="Ne0BnZLt"><pre><code>1.asin</code><br /></pre></div><button id="UZdqCE36" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div>
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
