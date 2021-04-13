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
    <input type="checkbox" id="Table" checked="True" />
    <label for="Table">
      <a href="Table">Table</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Table-Data" checked="True" />
        <label for="Table-Data">
          <a href="">Data</a>
        </label>
        <ul>
          <li>
            <a href="Table-Data-Column" className="font-bold">Column</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Index_Out_Of_Bounds_Error.to_display_text</span> <span class="argument"></span></p></div></div><div><div class=""><p>Pretty-prints the index out of bounds error.</p></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">Index_Out_Of_Bounds_Error</span> <span class="parameter">index length </span></p></div></div><div><div class=""><p>A type representing an error for an out-of-bounds index in a column. </p></div><div><p>Arguments: <ul><li> index: The index of the element requested.</li><li> length: The length of the column in which `index` was out of bounds.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">get_item_string</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Gets a textual representation of the item at position <code>ix</code> in <code>column</code>. </p><p>Arguments: <ul><li> column: The column to get the item from.</li><li> ix: The index in the column from which to get the item.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">storage_to_json</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper function for converting a column storage to JSON. </p><p>Arguments: <ul><li> storage: The storage to convert to JSON.</li><li> factory: The factory function for converting the storage.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">storage_type_bool</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Keep this in sync with <code>org.enso.table.data.Storage.Type.BOOL</code></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">storage_type_string</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Keep this in sync with <code>org.enso.table.data.Storage.Type.STRING</code></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">storage_type_double</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Keep this in sync with <code>org.enso.table.data.Storage.Type.DOUBLE</code></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">storage_type_long</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Keep this in sync with <code>org.enso.table.data.Storage.Type.LONG</code></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">run_vectorized_unary_op</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Executes a vectorized unary operation over the provided column. </p><p>Arguments: <ul><li> column: The column to execute the operation over.</li><li> name: The name of the vectorized operation.</li><li> fallback_fn: A function used if the vectorized operation isn't available.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">run_vectorized_binary_op</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Executes a vectorized binary operation over the provided column. </p><p>Arguments: <ul><li> column: The column to execute the operation over.</li><li> name: The name of the vectorized operation.</li><li> fallback_fn: A function used if the vectorized operation isn't available.</li><li> operand: The operand to apply to the function after `column`.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Aggregate_Column</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Wraps a column grouped by its index. Allows performing aggregation operations on the contained values.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div class="atom flex"><p><span class="name">Aggregate_Column</span> <span class="parameter">java_column </span></p></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">reduce</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts this aggregate column into a column, aggregating groups <div><div class="doc-code-container" id="8l5bkiAz"><pre><code>with the provided `function`.</code><br /></pre></div><button id="QHYsMVUa" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - function: the function used for value aggregation. Values belonging to <div><div class="doc-code-container" id="ljEsIgzS"><pre><code>each group are passed to this function in a vector.</code><br /></pre></div><button id="lGqisVwK" class="doc-copy-btn flex">Copy</button></div>      - skip_missing: controls whether missing values should be included in <div><div class="doc-code-container" id="IGvKnbET"><pre><code>groups.</code><br /></pre></div><button id="oj3sQbIJ" class="doc-copy-btn flex">Copy</button></div>      - name_suffix: a suffix that will be appended to the original column name <div><div class="doc-code-container" id="yTBVz8se"><pre><code>to generate the resulting column name.</code><br /></pre></div><button id="jLgLysp3" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">reduce</span> <span class="argument">function skip_missing=True name_suffix=&quot;_result&quot;</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">sum</span> <span class="argument"></span></p></div></div><div><div class=""><p>Sums the values in each group. </p></div><div><p>Arguments: <ul><li> name_suffix: a suffix that will be appended to the original column name
       to generate the resulting column name.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">sum</span> <span class="argument">name_suffix='_sum'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">max</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the maximum element of each group. </p></div><div><p>Arguments: <ul><li> name_suffix: a suffix that will be appended to the original column name
       to generate the resulting column name.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">max</span> <span class="argument">name_suffix='_max'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">min</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the minimum element of each group. </p></div><div><p>Arguments: <ul><li> name_suffix: a suffix that will be appended to the original column name
       to generate the resulting column name.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">min</span> <span class="argument">name_suffix='_min'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">count</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the number of non-missing elements in each group. </p></div><div><p>Arguments: <ul><li> name_suffix: a suffix that will be appended to the original column name
       to generate the resulting column name.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">count</span> <span class="argument">name_suffix='_count'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">mean</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the mean of non-missing elements in each group. </p></div><div><p>Arguments: <ul><li> name_suffix: a suffix that will be appended to the original column name
       to generate the resulting column name.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">mean</span> <span class="argument">name_suffix='_mean'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">values</span> <span class="argument"></span></p></div></div><div><div class=""><p>Gathers all elements in a group into a vector and returns a column of <div><div class="doc-code-container" id="rmBvy0qp"><pre><code>such vectors.</code><br /></pre></div><button id="KM8m7lKG" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - name_suffix: a suffix that will be appended to the original column name <div><div class="doc-code-container" id="7GGRAoRz"><pre><code>to generate the resulting column name.</code><br /></pre></div><button id="MWL38Ijt" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">values</span> <span class="argument">name_suffix='_values'</span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_vector</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new column given a name and a vector of elements. </p></div><div><p>Arguments: <ul><li> name: The name of the column to create.</li><li> items: The elements to contain in the column.</li></ul></p></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div></div></div></div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div></div><div></div><div></div></div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div></div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div></div></div>
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
