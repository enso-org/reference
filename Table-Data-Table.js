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
            <a href="Table-Data-Column">Column</a>
          </li>
          <li>
            <a href="Table-Data-Order_Rule">Order_Rule</a>
          </li>
          <li>
            <a href="Table-Data-Table" className="font-bold">Table</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">print_table</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper function for creating an ASCII-art representation of tabular data. </p><p>Arguments: <ul><li> header: vector of names of columns in the table.</li><li> rows: a vector of rows, where each row is a vector that contains a text
   representation of each cell</li><li> indices_count: the number specifying how many columns should be treated as
   indices; this will make them in bold font if `format_term` is enabled.</li><li> format_term: a boolean flag, specifying whether to use ANSI escape codes
   for rich formatting in the terminal.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">ansi_bold_enabled</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Adds ANSI bold escape sequences to text if the feature is enabled. </p><p>Arguments: <ul><li> txt: The text to possibly bold.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">pad</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Ensures that the <code>txt</code> has at least <code>len</code> characters by appending spaces at the end. </p><p>Arguments: <ul><li> txt: The text to pad.</li><li> len: The minimum length of the text.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_columns</span> <span class="argument">cols</span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Aggregate_Table</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a table with grouped rows.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Aggregate_Table</span> <span class="parameter">java_table </span></p></div></div><div><div class=""><p>A table type with grouped rows. </p></div><div><p>Arguments: <ul><li> java_table: The internal representation of the table.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a vector of aggregate columns in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">values</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a table containing columns resulting from calling <code>values</code> on <div><div class="doc-code-container" id="jyrCBSYf"><pre><code>each column in `this`.</code><br /></pre></div><button id="pEAbTE1B" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">values</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">count</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a column containing the number of elements in each group of the <div><div class="doc-code-container" id="gBfiyfMG"><pre><code>aggregate table.</code><br /></pre></div><button id="m4zS7G0a" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">count</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">at</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns an aggregate column with the given name, contained in this table. </p></div><div><p>Arguments: <ul><li> name: The name of the aggregate column to get.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">at</span> <span class="argument">name</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">print</span> <span class="argument"></span></p></div></div><div><div class=""><p>Prints an ASCII-art table with this data to the standard output. </p></div><div><p>Arguments: <ul><li> show_rows: the number of initial rows that should be displayed.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">print</span> <span class="argument">show_rows=10</span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">comparator_to_java</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Wraps the Enso comparator function so it's usable in Java. </p><p>Arguments: <ul><li> cmp: The Enso comparator function.</li><li> x: The left operand to the compartor.</li><li> y: The right operand to the comparator.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Table</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a column-oriented table data structure.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Table</span> <span class="parameter">java_table </span></p></div></div><div><div class=""><p>A table. </p></div><div><p>Arguments: <ul><li> java_table: The internal java representation of the table.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">display</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a text containing an ASCII-art table displaying this data. </p></div><div><p>Arguments: <ul><li> show_rows: the number of initial rows that should be displayed.</li><li> format_terminal: whether ANSI</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">display</span> <span class="argument">show_rows=10 format_terminal=False</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">print</span> <span class="argument">show_rows=10</span></p></div></div><div><div class=""><p>Prints an ASCII-art table with this data to the standard output. </p></div><div><p>Arguments: <ul><li> show_rows: the number of initial rows that should be displayed.</li></ul></p></div></div></div></div><div><div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts this table to a JSON structure.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_default_visualization_data</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a Text used to display this table in the IDE by default. </p><p>Returns a JSON object containing useful metadata and previews of column values.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_default_visualization_data</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">at</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the column with the given name. </p></div><div><p>Arguments: <ul><li> name: The name of the column being looked up.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">at</span> <span class="argument">name</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">where</span> <span class="argument"></span></p></div></div><div><div class=""><p>Selects only the rows of this table that correspond to <code>True</code> values in <div><div class="doc-code-container" id="wQCGCvQN"><pre><code>`indexes`.</code><br /></pre></div><button id="6zxAv9Zw" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - indexes: The column to mask the table by. This column should contain <div><div class="doc-code-container" id="7hB0wsrS"><pre><code>boolean values (`True` or `False`) that determine whether or not the</code><br /><code>corresponding row is kept.</code><br /></pre></div><button id="3bV51amw" class="doc-copy-btn flex">Copy</button></div> </p><p>This is useful for filtering the rows by given predicate. </p><div class="example"><div class="summary">Example</div> Select only the rows of <code>my_table</code> where the <code>&quot;Status&quot;</code> column has the value <code>&quot;Valid&quot;</code> <div><div class="doc-code-container" id="pV83icch"><pre><code>my_table.where (my_table.at &quot;Status&quot; == &quot;Valid&quot;)</code><br /></pre></div><button id="cq7pA064" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">where</span> <span class="argument">indexes</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set</span> <span class="argument"></span></p></div></div><div><div class=""><p>Sets the column value at the given name. </p></div><div><p>Arguments: <ul><li> name: The name of the column to set the value of.</li><li> column: The new value for the column called `name`.</li></ul> </p><p>If a column with the given name already exists, it will be replaced. Otherwise a new column is added.</p></div></div></div></div><div><div class="method flex"><p><span class="name">set</span> <span class="argument">name column</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the vector of columns contained in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument"></span></p></div></div><div><div class=""><p>Sets the index of this table, using the column with the provided name. </p></div><div><p>Arguments: <ul><li> index: The name of the column to use as the index in this table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument">index</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">index</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the index of this table, as a column that is indexed by itself. </p></div><div><p>Throws <code>No_Index_Set_Error</code> if there is no index set in the table it is being called on.</p></div></div></div></div><div><div class="method flex"><p><span class="name">index</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">select</span> <span class="argument"></span></p></div></div><div><div class=""><p>Selects a subset of columns from this table by name.</p></div></div></div></div><div><div class="method flex"><p><span class="name">select</span> <span class="argument">columns</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">join</span> <span class="argument"></span></p></div></div><div><div class=""><p>Efficiently joins two tables based on either the index or the specified <div><div class="doc-code-container" id="6xchAfGG"><pre><code>key column.</code><br /></pre></div><button id="54jFzd5r" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - other: The table being the right operand of this join operation.      - on: The column of `this` that should be used as the join key. If this <div><div class="doc-code-container" id="EIFGgHTy"><pre><code>argument is not provided, the index of `this` will be used.</code><br /></pre></div><button id="CYQVH91c" class="doc-copy-btn flex">Copy</button></div>      - drop_unmatched: Whether the rows of `this` without corresponding <div><div class="doc-code-container" id="oggNu0H3"><pre><code>matches in `other` should be dropped from the result.</code><br /></pre></div><button id="OzGs0NgA" class="doc-copy-btn flex">Copy</button></div>      - left_suffix: A suffix that should be added to the columns of `this` <div><div class="doc-code-container" id="dQdOK3VQ"><pre><code>when there's a name conflict with a column of `other`.</code><br /></pre></div><button id="UjdUPHtS" class="doc-copy-btn flex">Copy</button></div>      - right_suffix: A suffix that should be added to the columns of `other` <div><div class="doc-code-container" id="SryBL0fT"><pre><code>when there's a name conflict with a column of `this`.</code><br /></pre></div><button id="Y2SLyNBF" class="doc-copy-btn flex">Copy</button></div> </p><p>The resulting table contains rows of <code>this</code> extended with rows of <code>other</code> with matching indexes. If the index values in <code>other</code> are not unique, the corresponding rows of <code>this</code> will be duplicated in the result.</p></div></div></div></div><div><div class="method flex"><p><span class="name">join</span> <span class="argument">other on=Nothing drop_unmatched=False left_suffix='_left' right_suffix='_right'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_missing_rows</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a new Table without rows that contained missing values in any of <div><div class="doc-code-container" id="5NUnavCv"><pre><code>the columns.</code><br /></pre></div><button id="HXkTLSon" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">drop_missing_rows</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_missing_columns</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a new Table without columns that contained any missing values.</p></div></div></div></div><div><div class="method flex"><p><span class="name">drop_missing_columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">row_count</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the number of rows in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">row_count</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the number of rows in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">info</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a Table describing this table's contents. </p></div><div><p>The table lists all columns, counts of non-null items and storage types of each column.</p></div></div></div></div><div><div class="method flex"><p><span class="name">info</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">group</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns an aggregate table resulting from grouping the elements by the <div><div class="doc-code-container" id="cDV8NZD3"><pre><code>value of the specified column.</code><br /></pre></div><button id="KfQArm9H" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - by: The column in the table to perform grouping by. If this argument <div><div class="doc-code-container" id="kWKRJi8F"><pre><code>is not set, the index is used for grouping instead.</code><br /></pre></div><button id="DFrCDdeE" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> Creates a simple table and computes aggregation statistics: <div><div class="doc-code-container" id="RiYzAgEi"><pre><code>name = ['name', [&quot;foo&quot;, &quot;bar&quot;, &quot;foo&quot;, &quot;baz&quot;, &quot;foo&quot;, &quot;bar&quot;, &quot;quux&quot;]]</code><br /><code>price = ['price', [0.4, 3.5, Nothing, 6.7, Nothing, 97, Nothing]]</code><br /><code>quantity = ['quantity', [10, 20, 30, 40, 50, 60, 70]]</code><br /><code>t = Table.new [name, price, quantity]</code><br /></pre></div><button id="69GGNFvK" class="doc-copy-btn flex">Copy</button></div> </div><p>agg = t.group by='name' </p><p>records<i>num = agg.count total</i>quantity = agg.at 'quantity' . sum mean<div class="Unclosed"><i>price = agg.at 'price' . mean </i></div></p><p>Table.join <div class="InvalidLink">[records_num, total_quantity, mean_price]</div></p></div></div></div></div><div><div class="method flex"><p><span class="name">group</span> <span class="argument">by=Nothing</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sorts the table according to the specified rules. </p><p>Arguments: <ul><li> by: Specifies the columns used for reordering the table. This argument
       may be one of:</li><li> a text: The text is treated as a column name.</li><li> a column: Any column, that may or may not belong to this table.
         Sorting by a column will result in reordering the rows of this
         table in a way that would result in sorting the given column.</li><li>       - an order rule: Specifies both the sorting column and additional
         settings, that will take precedence over the global parameters of
         this sort operation. The `column` field of the rule may be a text
         or a column, with the semantics described above.</li><li>       - a vector of any of the above: This will result in a hierarchical
         sorting, such that the first rule is applied first, the second is
         used for breaking ties, etc.</li><li><div class="InvalidList"> order: Specifies the default sort order for this operation. All the</div></li></ul> rules specified in the <code>by</code> argument will default to this setting,  unless specified in the rule.  compared to non-missing ones. This setting may be overriden by the  particular rules of the <code>by</code> argument.  Note thet this argument is  independent from <code>order</code>, i.e. missing values will always be sorted  according to this rule, ignoring the ascending / descending setting. </p><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code> <div><div class="doc-code-container" id="b50ZV9Oi"><pre><code>table.sort by='Quantity'</code><br /></pre></div><button id="9Dw2uh0Q" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in descending order by the value in column <code>'Quantity'</code>, placing missing values at the top of the table. <div><div class="doc-code-container" id="j8USCtnq"><pre><code>table.sort by='Quantity' order=Sort_Order.Descending missing_last=False</code><br /></pre></div><button id="o78lxBGu" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code>, using the value in column <code>'Rating'</code> for breaking ties. <div><div class="doc-code-container" id="veXd6f3C"><pre><code>table.sort by=['Quantity', 'Rating']</code><br /></pre></div><button id="aO22Xy9I" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code>, using the value in column <code>'Rating'</code> in descending order for breaking ties. <div><div class="doc-code-container" id="us6YwSSl"><pre><code>table.sort by=['Quantity', Order_Rule 'Rating' (order=Sort_Order.Descending)]</code><br /></pre></div><button id="HxTAHqyv" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in an externally computed column, using the value in column <code>'Rating'</code> for breaking ties. <div><div class="doc-code-container" id="HctTHGJC"><pre><code>quality_ratio = table.at 'Rating' / table.at 'Price'</code><br /><code>table.sort by=[quality_ratio, 'Rating']</code><br /></pre></div><button id="FsYU2Ga7" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Sorting <code>table</code> in ascending order, by the value in column</div> <code>'position'</code>, using a custom comparator function. <div><div class="doc-code-container" id="G43V49Za"><pre><code>manhattan_comparator a b = (a.x.abs + a.y.abs) . compare_to (b.x.abs + b.y.abs)</code><br /><code>table.sort by=(Order_Rule 'position' comparator=manhattan_comparator)</code><br /></pre></div><button id="eVTDfX0P" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument">by order=Sort_Order.Ascending missing_last=True</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">build_java_order_rules</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Transforms order rules from Enso into Java. </p><p>Arguments: <ul><li> rules: The rule(s) to convert.</li><li> order: The sorting order.</li><li> missing_last: Whether or not missing values should be ordered last.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">build_java_order_rules</span> <span class="argument">rules order missing_last</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">build_java_order_rule</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Builds a java order rule. </p><p>Arguments: <ul><li> rule: The rule to convert.</li><li> order: The sort order.</li><li> missing_last: Whether or not missing values should be ordered last.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">build_java_order_rule</span> <span class="argument">rule order missing_last</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">concat</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Concatenates <code>other</code> to <code>this</code>. </p><p>Arguments: <ul><li> other: The table to concatenate to `this`.</li></ul> </p><p>Any column that is present in one table, but missing in another, will be <code>Nothing</code>-padded in the positions corresponding to the missing column.</p></div></div></div></div><div><div class="method flex"><p><span class="name">concat</span> <span class="argument">other</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a table containing the first <code>count</code> elements in this table. </p><p>Arguments: <ul><li> count: The number of elements to take from the start of this table.</li></ul> </p><p>If <code>this</code> has a number of rows in it less than <code>count</code>, the entire table will be returned.</p></div></div></div></div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">take_end</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a table containing the last <code>count</code> elements in this table. </p><p>Arguments: <ul><li> count: The number of elements to take from the end of this table.</li></ul> </p><p>If <code>this</code> has a number of rows in it less than <code>count</code>, the entire table will be returned.</p></div></div></div></div><div><div class="method flex"><p><span class="name">take_end</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the first row in the table, if it exists. </p><p>If the table is empty, this method will return a dataflow error containing <code>Nothing</code>.</p></div></div></div></div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the first row in the table, if it exists. </p><p>If the table is empty, this method will return a dataflow error containing <code>Nothing</code>.</p></div></div></div></div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the last row in the table, if it exists. </p><p>If the table is empty, this method will return a dataflow error containing <code>Nothing</code>.</p></div></div></div></div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a table containing the rows of <code>this</code> table with their order reversed.</p></div></div></div></div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">join</span> <span class="argument"></span></p></div></div><div><div class=""><p>Joins a vector of tables (or columns) into a single table, using each table's index as the join key. </p></div><div><p>Arguments: <ul><li> tables: A vector of tables to join into a single table.</li></ul> </p><p>Particularly useful for joining multiple columns derived from one original table into a new table.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new table from a vector of <code>[name, items]</code> pairs. </p></div><div><p>Arguments: <ul><li> columns: The `[name, items]` pairs to construct a new table from.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a new table with the given in two columns: <div><div class="doc-code-container" id="Siyl5MLH"><pre><code>Table.new [[&quot;foo&quot;, [1, 2, 3]], [&quot;bar&quot;, [True, False, True]]]</code><br /></pre></div><button id="bIG5KSnT" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_rows</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new table from a vector of column names and a vector of vectors specifying row contents. </p></div><div><p>Arguments: <ul><li> header: A list of texts specifying the column names</li><li> rows: A vector of vectors, specifying the contents of each table row. The
   length of each element of `rows` must be equal in length to `header`.</li></ul> </p><div class="example"><div class="summary">Example</div> The code below creates a table with 3 columns, named <code>foo</code>, <code>bar</code>, and <code>baz</code>, containing <code>[1, 2, 3]</code>, <code>[True, False, True]</code>, and <code>['a', 'b', 'c']</code>, respectively. <div><div class="doc-code-container" id="FLRxfCRc"><pre><code>header = [ 'foo' , 'bar' , 'baz' ]</code><br /><code>row_1 =  [ 1     , True  , 'a'   ]</code><br /><code>row_2 =  [ 2     , False , 'b'   ]</code><br /><code>row_3 =  [ 3     , True  , 'c'   ]</code><br /><code>Table.from_rows header [row_1, row_2, row_3]</code><br /></pre></div><button id="L1VmYbNy" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">No_Index_Set_Error</span> <span class="parameter"></span></p></div></div><div><div class=""><p>An error returned when getting an index but no index is set for that table.</p></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">No_Such_Column_Error</span> <span class="parameter">column_name </span></p></div></div><div><div class=""><p>An error returned when a non-existent column is being looked up. </p></div><div><p>Arguments: <ul><li> column_name: The name of the column that doesn't exist.</li></ul></p></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div></div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div></div><div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div></div></div></div><div></div><div></div></div><div></div></div></div></div></div>
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
