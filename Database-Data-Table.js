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
    <input type="checkbox" id="Database" checked="True" />
    <label for="Database">
      <a href="Database">Database</a>
    </label>
    <ul>
      <li className="section">
        <input type="checkbox" id="Database-Data" checked="True" />
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
            <a href="Database-Data-Table" className="font-bold">Table</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">freshen_columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Ensures that the provided columns do not clash with the vector of names provided as first argument. </p><p>Arguments: <ul><li> used_names: The already used names.</li><li> columns: The columns to rename to avoid clashes.</li></ul> </p><p>Original column names are kept if possible, but if they would clash, the columns are renamed.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">rename_columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Transforms the vector of columns, changing names of each column to the corresponding name from the second vector. </p><p>Arguments: <ul><li> columns: A vector of columns to rename.</li><li> new_names: The new names for the columns.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">fresh_names</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Transforms <code>preferred_names</code> names in such a way to not collide with <code>used_names</code>. </p><p>Arguments: <ul><li> used_names: The names that have already been used.</li><li> preferred_names: The names that the user wants to use.</li></ul> </p><p>If a name from <code>preferred_names</code> does not collide with others, it is kept as is, otherwise numerical suffixes are added.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">combine_names</span> <span class="argument">left_names right_names left_suffix right_suffix</span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a list of non-colliding names by merging the two lists and appending suffixes if necessary. </p><p>Arguments: <ul><li> left_names: The names on the left.</li><li> right_names: The names on the right.</li><li> left_suffix: The suffix to apply to colliding names on the left.</li><li> right_suffix: The suffix to apply to colliding names on the right.</li></ul> </p><p>If even after appending the suffixes it is impossible to have unique names, it throws a panic. It returns two vectors, one for each input. It assumes that the names within each argument itself are unique.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">display_dataframe</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Renders an ASCII-art representation for a Table from a dataframe that contains a fragment of the underlying data and count of all rows. </p><p>Arguments: <ul><li> df: The materialized dataframe that contains the data to be displayed, it
   should have no indices set.</li><li> indices_count: Indicates how many columns from the materialized dataframe
   should be treated as indices in the display (index columns will be bold if
   `format_terminal` is enabled).</li><li> - all_rows_count: The count of all rows in the underlying Table; if
   `all_rows_count` is bigger than the amount of rows of `df`, an additional
   line will be included that will say how many hidden rows there are.</li><li> - format_term: A boolean flag, specifying whether to use ANSI escape codes
   for rich formatting in the terminal.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">make_table</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a Table out of a connection, name and list of column names. </p><p>Arguments: <ul><li> connection: The connection to a database.</li><li> table_name: The name of the table to get.</li><li> columns: The names of the columns to get.</li></ul> </p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Aggregate_Table</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a table with grouped rows.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Aggregate_Table</span> <span class="parameter">name connection internal_columns context </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Represents a table with grouped rows. </p><p>Arguments: <ul><li> name: The name of the table.</li><li> connection: The connection with whicg the table is associated.</li><li> internal_columns: The internal representation of the table columns.</li><li> context: The context associated with this table.</li></ul> </p><p><div class="summary"> </div></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a vector of aggregate columns in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">count</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a column containing the number of elements in each group.</p></div></div></div></div><div><div class="method flex"><p><span class="name">count</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">at</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns an aggregate column with the given name, contained in this table. </p><p>Arguments: <ul><li> name: The name of the aggregate column to get from the aggregate table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">at</span> <span class="argument">name</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">make_column</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Helper to create aggregate columns from internal columns. </p><p>Arguments: <ul><li> internal: The internal column to make into an aggregate column.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">make_column</span> <span class="argument">internal</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">ungrouped</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Helper that returns the underlying table from before grouping.</p></div></div></div></div><div><div class="method flex"><p><span class="name">ungrouped</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Table</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a column-oriented table data structure backed by a database.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Table</span> <span class="parameter">name connection internal_columns context </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Represents a column-oriented table data structure backed by a database. </p><p>Arguments: <ul><li> name: The name of the table.</li><li> connection: The connection with whicg the table is associated.</li><li> internal_columns: The internal representation of the table columns.</li><li> context: The context associated with this table.</li></ul> </p><p><div class="summary"> </div></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">display</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a text containing an ASCII-art table displaying this data. </p><p>Arguments: <ul><li> show_rows: the number of initial rows that should be displayed.</li><li> format_terminal: whether ANSI</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">display</span> <span class="argument">show_rows=10 format_terminal=False</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">print</span> <span class="argument">show_rows=10</span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Prints an ASCII-art table with this data to the standard output. </p><p>Arguments: <ul><li> show_rows: the number of initial rows that should be displayed.</li></ul></p></div></div></div></div><div><div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Converts this table into a JSON structure.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">at</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the column with the given name. </p><p>Arguments: <ul><li> name: The name of the column to get.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">at</span> <span class="argument">name</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">resolve</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Resolves the column name to a column within this table. </p><p>Arguments: <ul><li> column: The name (or column handle) for the column you want to resolve.</li></ul> </p><p>If instead of a name, a column is provided, it is returned as-is as long as it comes from the same context.</p></div></div></div></div><div><div class="method flex"><p><span class="name">resolve</span> <span class="argument">column</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">where</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Selects only the rows of this table that correspond to <code>True</code> values in <code>filter</code>. </p><p>Arguments: <ul><li> filter: A column of boolean values that will be used to mask the table
       rows.</li></ul> </p><p>This is useful for filtering the rows by given predicate. </p><div class="example"><div class="summary">Example</div> Select only the rows of <code>my_table</code> where the <code>&quot;Status&quot;</code> column has the value <code>&quot;Valid&quot;</code> <div><div class="doc-code-container" id="ftTxTGrz"><pre><code>my_table.where (my_table.at &quot;Status&quot; == &quot;Valid&quot;)</code><br /></pre></div><button id="3D89p6Yw" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">where</span> <span class="argument">filter</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">limit</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a new Table that will include at most <code>max_rows</code> rows from the original Table. </p><p>Arguments: <ul><li> max_rows: The maximum number of rows to get from the table.</li></ul> </p><p>Since this Table is backed by an SQL database, the Table returned by the <code>limit</code> method is deterministic only if the Table has been ordered (using the <code>sort</code> method). </p><p>Otherwise, no order is imposed, so the returned Table will include at most <code>max_rows</code> rows, but there are no guarantees on which rows will be selected. Moreover, even if the underlying table in the database did not change, different sets of rows may be returned each time the returned Table is materialized. </p><p>The limit is applied at the very end, so the new Table behaves exactly as the old one, just limitting its results when being materialized. Specifically, applying further filters will still apply to the whole result set and the limit will be taken after applying these filters. </p><div class="example"><div class="summary">For example:</div> In the call below, assuming that the table of <code>t1</code> contains rows for numbers 1, 2, ..., 10, will return rows starting from 6 and not an empty result as one could expect if the limit was applied before the filters. <div><div class="doc-code-container" id="HO7wYwrf"><pre><code>t1 = table.sort by='A' . limit 5</code><br /><code>t2 = t1.where (t1.at 'A' &gt; 5)</code><br /><code>t2.to_dataframe</code><br /></pre></div><button id="afh0D2Rx" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">limit</span> <span class="argument">max_rows</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the column value at the given name. </p><p>Arguments: <ul><li> name: The name of the column to set.</li><li> column: The new value for the column called `name`.</li></ul> </p><p>If a column with the given name already exists, it will be replaced. Otherwise a new column is added.</p></div></div></div></div><div><div class="method flex"><p><span class="name">set</span> <span class="argument">name column</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the vector of columns contained in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sets the index of this table, using the column with the provided name. </p><p>Arguments: <ul><li> index: The column to use as the index of the table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument">index</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">indices</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the (possibly empty) list of indices for this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">indices</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">index</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the index (or indexes) of this table, as a column (indexed by itself). </p><p>Throws <code>No_Index_Set_Error</code> if there is no index set.</p></div></div></div></div><div><div class="method flex"><p><span class="name">index</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Sorts the table according to the specified rules. </p><p>Arguments: <ul><li> by: Specifies the columns used for reordering the table. This
       argument may be one of:</li><ul><li> a text: The text is treated as a column name.</li><li> a column: Any column, which is an expression computed from this
           table.</li></ul><li> an order rule: Specifies both the sorting column and additional
           settings, that will take precedence over the global parameters of
           this sort operation. The `column` field of the rule may be a text
           or a column, with the semantics described above.</li><li>         - a vector of any of the above: This will result in a hierarchical
           sorting, such that the first rule is applied first, the second is
           used for breaking ties, etc.</li><li><div class="InvalidList"> order: Specifies the default sort order for this operation. All the</div></li></ul> rules specified in the <code>by</code> argument will default to this setting,  unless specified in the rule.  compared to non-missing ones. This setting may be overriden by the  particular rules of the <code>by</code> argument.  Note thet this argument is  independent from <code>order</code>, i.e. missing values will always be sorted  according to this rule, ignoring the ascending / descending setting. </p><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code> <div><div class="doc-code-container" id="8Vcrnwyn"><pre><code>table.sort by='Quantity'</code><br /></pre></div><button id="IPK9zSVC" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in descending order by the value in column <code>'Quantity'</code>, placing missing values at the top of the table. <div><div class="doc-code-container" id="LbHGIgnQ"><pre><code>table.sort by='Quantity' order=Sort_Order.Descending missing_last=False</code><br /></pre></div><button id="Ny6mRAZ6" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code>, using the value in column <code>'Rating'</code> for breaking ties. <div><div class="doc-code-container" id="CiCQNuQ4"><pre><code>table.sort by=['Quantity', 'Rating']</code><br /></pre></div><button id="Wpbwa3On" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in column <code>'Quantity'</code>, using the value in column <code>'Rating'</code> in descending order for breaking ties. <div><div class="doc-code-container" id="AnDkyqvD"><pre><code>table.sort by=['Quantity', Order_Rule 'Rating' (order=Sort_Order.Descending)]</code><br /></pre></div><button id="l6bWbT2U" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting <code>table</code> in ascending order by the value in an externally computed column, using the value in column <code>'Rating'</code> for breaking ties. <div><div class="doc-code-container" id="SUfk44PS"><pre><code>quality_ratio = table.at 'Rating' / table.at 'Price'</code><br /><code>table.sort by=[quality_ratio, 'Rating']</code><br /></pre></div><button id="kgK28ZOz" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument">by order=Sort_Order.Ascending missing_last=True</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">select</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Selects a subset of columns from this table by name. </p><p>Arguments: <ul><li> columns: The names of the columns to select from the table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">select</span> <span class="argument">columns</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">join</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Efficiently joins two tables based on either the index or a key column. </p><p>Arguments: <ul><li> other: the table being the right operand of this join operation.</li><li> on: the column(s) or expression(s) of `this` that should be used as
       the join key. If this argument is not provided, the index of `this`
       will be used.</li><li>     - drop_unmatched: whether the rows of `this` without corresponding
       matches in `other` should be dropped from the result.</li><li>     - left_suffix: a suffix that should be added to the columns of `this`
       when there's a name conflict with a column of `other`.</li><li>     - right_suffix: a suffix that should be added to the columns of `other`
       when there's a name conflict with a column of `this`.</li></ul> </p><p>The resulting table contains rows of <code>this</code> extended with rows of <code>other</code> with matching indexes. If the index in <code>other</code> is not unique, the corresponding rows of <code>this</code> will be duplicated in the result.</p></div></div></div></div><div><div class="method flex"><p><span class="name">join</span> <span class="argument">other on=Nothing drop_unmatched=False left_suffix='_left' right_suffix='_right'</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">group</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns an aggregate table resulting from grouping the elements by the value of the specified column. </p><p>Arguments: <ul><li> by: The column names on which to group. If this is not set, the index
       will be used for grouping instead.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">group</span> <span class="argument">by=Nothing</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_missing_rows</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a new Table without rows that contained missing values in any of the columns.</p></div></div></div></div><div><div class="method flex"><p><span class="name">drop_missing_rows</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_missing_columns</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a new Table without columns that contained any missing values. </p></div><div><p>This operation needs to actually materialize the underlying query in order to know which columns to drop.</p></div></div></div></div><div><div class="method flex"><p><span class="name">drop_missing_columns</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">row_count</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the amount of rows in this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">row_count</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_dataframe</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a materialized dataframe containing rows of this table. </p><p>Arguments: <ul><li> max_rows: specifies a maximum amount of rows to fetch; if not set, all
       available rows are fetched.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">to_dataframe</span> <span class="argument">max_rows=Nothing</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reset_index</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Brings the index back as columns.</p></div></div></div></div><div><div class="method flex"><p><span class="name">reset_index</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_sql</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns an SQL statement that will be used for materializing this table.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_sql</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">info</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a Table describing this table's contents. </p></div><div><p>The table lists all columns, counts of non-null items and storage types of each column.</p></div></div></div></div><div><div class="method flex"><p><span class="name">info</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">make_column</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Helper to create columns from internal columns. </p><p>Arguments: <ul><li> internal: The internal column to use for creating a column.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">make_column</span> <span class="argument">internal</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">updated_columns</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of this table with updated internal columns. </p><p>Arguments: <ul><li> columns: The columns with which to update this table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">updated_columns</span> <span class="argument">columns</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">updated_context</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of this table with updated context. </p><p>Arguments: <ul><li> ctx: The new context for this table.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">updated_context</span> <span class="argument">ctx</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">internal_columns_with_index</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a vector that contains first the internal representations of all indices and then all columns.</p></div></div></div></div><div><div class="method flex"><p><span class="name">internal_columns_with_index</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">insert</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Inserts a new row to the table. </p><p>Arguments: <ul><li> values: The values making up the row of the table.</li></ul> </p><p>It actually modifies the underlying table in the database.  It can only be called on the Table if no operations modifying it have been performed like modifying, removing or adding columns, filtering, grouping etc.</p></div></div></div></div><div><div class="method flex"><p><span class="name">insert</span> <span class="argument">values</span></p></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div><div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div>
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
