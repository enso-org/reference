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
          <a href="Image-Codecs">Codecs</a>
        </label>
        <ul>
          <li>
            <a href="Image-Codecs-Internal">Internal</a>
          </li>
        </ul>
      </li>
      <li className="section">
        <input type="checkbox" id="Image-Data" checked="True" />
        <label for="Image-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li className="section">
            <input type="checkbox" id="Image-Data-Matrix" />
            <label for="Image-Data-Matrix">
              <a href="Image-Data-Matrix" className="font-bold">Matrix</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_vector</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Create a matrix from the provided vector. </p><p>Arguments: <ul><li> values: the vector of numbers.</li><li> rows: the number of rows in the resulting matrix.</li><li> channels: the number of channels in the resulting matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a matrix. <div><div class="doc-code-container" id="UUvWM9ff"><pre><code>Matrix.from_vector [1, 1, 0, 0] . to_vector == [1, 1, 0, 0]</code><br /></pre></div><button id="mekHdzzy" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">identity</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Create an identity matrix containing ones on a main diagonal. </p><p>Arguments: <ul><li> rows: the number of rows in the resulting matrix.</li><li> columns: the number of columns in the resulitng matrix.</li><li> channels: the number of channels in the resulting matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a matrix. <div><div class="doc-code-container" id="Hy6it2wr"><pre><code>Matrix.eye 2 2 channels=1 . to_vector == [1, 0, 0, 1]</code><br /></pre></div><button id="GVZDzFvM" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">ones</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Create a matrix with all elements set to one. </p><p>Arguments: <ul><li> rows: the number of rows in the resulting matrix.</li><li> columns: the number of columns in the resulitng matrix.</li><li> channels: the number of channels in the resulting matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a matrix. <div><div class="doc-code-container" id="Gx7cNJkr"><pre><code>Matrix.ones 2 2 channels=2 . to_vector == [1, 1, 1, 1, 1, 1, 1, 1]</code><br /></pre></div><button id="Mu1yztVR" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">zeros</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Create a matrix with all elements set to zero. </p><p>Arguments: <ul><li> rows: the number of rows in the resulting matrix.</li><li> columns: the number of columns in the resulitng matrix.</li><li> channels: the number of channels in the resulting matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a matrix. <div><div class="doc-code-container" id="7796IXjB"><pre><code>Matrix.zeros 2 2 . to_vector == [0, 0, 0, 0]</code><br /></pre></div><button id="EUBsvUiA" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Matrix</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Matrix</span> <span class="parameter">opencv_mat </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The matrix data type. </p><p>Arguments: <ul><li> opencv_mat: The internal representation of the matrix.</li></ul> </p><p>Each value of the matrix is represented with an array of channels. In contrast to an Image data type, Matrix values are not normalized.</p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">rows</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Return the number of matrix rows.</p></div></div></div></div><div><div class="method flex"><p><span class="name">rows</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Return the number of matrix columns.</p></div></div></div></div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">channels</span> <span class="argument"></span></p></div></div><div><div class=""><p>Return the number of matrix channels.</p></div></div></div></div><div><div class="method flex"><p><span class="name">channels</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">get</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Get the matrix value at the specified row and column. </p><p>Arguments: <ul><li> row: the row index.</li><li> column: the column index.</li></ul> </p><div class="example"><div class="summary">Example</div> Get the value at the specified row and column. <div><div class="doc-code-container" id="Qphud8Bb"><pre><code>Matrix.ones 2 3 . get 0 0 == [1]</code><br /></pre></div><button id="l2EvuJax" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Get the non-existend value. <div><div class="doc-code-container" id="DCn0M2FE"><pre><code>Matrix.ones 2 3 . get 2 2 . catch x-&gt;x == Index_Out_Of_Bounds_Error 2 3 2</code><br /></pre></div><button id="J32f4STW" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">get</span> <span class="argument">row column</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reshape</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Reshape the matrix specifying new number of rows and channels. </p><p>Arguments: <ul><li> rows: the new number of rows.</li><li> channels: the new number of channels.</li></ul> </p><div class="example"><div class="summary">Example</div> Reshape the matrix to a new shape of 3 rows and 1 column, with 1 channel. <div><div class="doc-code-container" id="fX5W1e19"><pre><code>Matrix.from_vector [0, 0, 0] . reshape rows=3 channels=1</code><br /></pre></div><button id="gCv6xToN" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">reshape</span> <span class="argument">rows channels=Nothing</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">+</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Calculates the per-element sum of two matrices or a matrix and a scalar. </p><p>Arguments: <ul><li> value: A value can be a number, a vector of numbers, or a matrix. The
       number value is applied to each values's channel of the matrix. The
       vector value is padded with zeros to match the number of channels and
       then applied to each pixel of this matrix. The matrix value must have
       the same dimensions (rows, columns, and channels) as this
       matrix. Otherwise, the operation results in a `Dimensions_Not_Equal`
       error. The matrix is applied element-wise, e.g., each matrix element is
       combined with the appropriate value (the element with the same row and
       column) of this matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Add 1 to each channel of the matrix. <div><div class="doc-code-container" id="A58mIbxq"><pre><code>m + 1</code><br /></pre></div><button id="dgsRCxGP" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Add 100 to the first channel of the matrix. <div><div class="doc-code-container" id="eVR4difJ"><pre><code>m + [100] == m + [100, 0, 0]</code><br /></pre></div><button id="P5j9UnUT" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Add two matrices. <div><div class="doc-code-container" id="J8UJ5r1C"><pre><code>m + m</code><br /></pre></div><button id="e4Oa9gsK" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">+</span> <span class="argument">value</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">-</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Calculates the per-element difference of two matrices or of a matrix and a scalar. </p><p>Arguments: <ul><li> value: A value can be a number, a vector of numbers, or a matrix. The
       number value is applied to each values's channel of the matrix. The
       vector value is padded with zeros to match the number of channels and
       then applied to each pixel of this matrix. The matrix value must have
       the same dimensions (rows, columns, and channels) as this
       matrix. Otherwise, the operation results in a `Dimensions_Not_Equal`
       error. The matrix is applied element-wise, e.g., each matrix element is
       combined with the appropriate value (the element with the same row and
       column) of this matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Subtract 10 from each channel of the matrix. <div><div class="doc-code-container" id="IYZXHQt1"><pre><code>m - 10</code><br /></pre></div><button id="G9xdAdC9" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Subtract 2 from second channel of the matrix. <div><div class="doc-code-container" id="2wGDsue3"><pre><code>m - [0, 2] == m - [0, 2, 0, 0]</code><br /></pre></div><button id="X9kvSRNy" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Subtract two matrices. <div><div class="doc-code-container" id="oWWfjLhr"><pre><code>m - m</code><br /></pre></div><button id="jGCqOawE" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">-</span> <span class="argument">value</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">*</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Calculates the per-element product of two matrices or a matrix and a scalar. </p><p>Arguments: <ul><li> value: A value can be a number, a vector of numbers, or a matrix. The
       number value is applied to each values's channel of the matrix. The
       vector value is padded with zeros to match the number of channels and
       then applied to each pixel of this matrix. The matrix value must have
       the same dimensions (rows, columns, and channels) as this
       matrix. Otherwise, the operation results in a `Dimensions_Not_Equal`
       error. The matrix is applied element-wise, e.g., each matrix element is
       combined with the appropriate value (the element with the same row and
       column) of this matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Multiply each channel of the matrix by 2. <div><div class="doc-code-container" id="US97mMCd"><pre><code>m * 2</code><br /></pre></div><button id="J29CCsna" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Multiply first channel of the matrix by 2, and second channel by 4. <div><div class="doc-code-container" id="QVNUm8or"><pre><code>m * [2, 4, 1, 1]</code><br /></pre></div><button id="N2E2A8BH" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Multiply first channel of the matrix by 2, and zero the rest of the channels. <div><div class="doc-code-container" id="Tnn93j8X"><pre><code>m * [2]</code><br /></pre></div><button id="wKH5Cwlb" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Multiply two matrices. <div><div class="doc-code-container" id="XHxK40YS"><pre><code>m * m</code><br /></pre></div><button id="s6sGC8ly" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">*</span> <span class="argument">value</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">/</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Performs per-element division of two matrices or a matrix and a scalar. </p><p>Arguments: <ul><li> value: A value can be a number, a vector of numbers, or a matrix. The
       number value is applied to each values's channel of the matrix. The
       vector value is padded with zeros to match the number of channels and
       then applied to each pixel of this matrix. The matrix value must have
       the same dimensions (rows, columns, and channels) as this
       matrix. Otherwise, the operation results in a `Dimensions_Not_Equal`
       error. The matrix is applied element-wise, e.g., each matrix element is
       combined with the appropriate value (the element with the same row and
       column) of this matrix.</li></ul> </p><div class="example"><div class="summary">Example</div> Divide each channel of the matrix by 2. <div><div class="doc-code-container" id="uLMMyOlZ"><pre><code>m / 2</code><br /></pre></div><button id="1nnV5MQt" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Divide first channel of the matrix by 2, and second channel by 4. <div><div class="doc-code-container" id="QOdJclRb"><pre><code>m / [2, 4, 1, 1]</code><br /></pre></div><button id="Gm7tJ1f6" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Divide two matrices. <div><div class="doc-code-container" id="SimZgCV5"><pre><code>m / m</code><br /></pre></div><button id="hAtwL2MH" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">/</span> <span class="argument">value</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">==</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Check the equality of two matrices. </p><p>Arguments: <ul><li> that: the matrix to compare with.</li></ul> </p><div class="info"><div class="summary">Implementation Note</div> Two matrices considered equal when they have the same number of rows, columns and channels, and have the same values.</div></div></div></div></div><div><div class="method flex"><p><span class="name">==</span> <span class="argument">that</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">normalize</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Normalize the matrix into a range of <a href="so that the
     minimum value of the matrix becomes `min_value` and the maximum value of
     the matrix becomes `max_value`.

     Arguments:
     - min_value: the minimum value in the resulting normalized range.
     - max_value: the maximum value in the resulting normalized range.

     &gt; Example
       Normalize a matrix from vector.
           (Matrix.from_vector [0, 1, 2, 3, 4">min_value .. max_value</a>.normalize == (Matrix.from<div class="Unclosed"><i>vector <div class="InvalidLink">[0.0, 0.25, 0.5, 0.75, 1.0])</div> </i></div></p><div class="example"><div class="summary">Example</div> Normalize a matrix of ones. <div><div class="doc-code-container" id="s9tw6Kfu"><pre><code>(Matrix.ones 2 3).normalize == Matrix.zeros 2 3</code><br /></pre></div><button id="bLHMR71E" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Normalize an identity matrix. <div><div class="doc-code-container" id="X9nfAoaD"><pre><code>(Matrix.identity 3 3).normalize == Matrix.identity 3 3</code><br /></pre></div><button id="YZSDq1xw" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">normalize</span> <span class="argument">min_value=0.0 max_value=1.0</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_image</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Convert this matrix to an image.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_image</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_vector</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Get the elemets of this matrix as a vector.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_vector</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Convert this matrix to Json.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Matrix_Error</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Index_Out_Of_Bounds_Error</span> <span class="parameter">rows columns index </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Indicates that a matrix has been accessed with an illegal index. </p><p>Arguments: <ul><li> rows: The number of rows in the matrix.</li><li> columns: The number of columns in the matrix.</li><li> index: The requested index in the matrix.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Dimensions_Not_Equal</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An error indicating that an operation has failed due to a mismatch of matrix dimensions.</p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">to_display_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Pretty-prints a matrix error to be readable by the users.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_display_text</span> <span class="argument"></span></p></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div><div></div></div></div></div></div></div></div>
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
