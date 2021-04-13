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
            <a href="Database-Data-Table">Table</a>
          </li>
          <li className="section">
            <input type="checkbox" id="Database-Data-Internal" checked="True" />
            <label for="Database-Data-Internal">
              <a href="">Internal</a>
            </label>
            <ul>
              <li>
                <a href="Database-Data-Internal-Base_Generator">Base_Generator</a>
              </li>
              <li>
                <a href="Database-Data-Internal-IR" className="font-bold">IR</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">lift_expression_map</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Lifts a function mapping expressions into a function mapping internal columns which applies the original function to their expressions, leaving other fields as-is. </p><p>Arguments: <ul><li> f: The function to map over expressions.</li><li> col: The column over which to apply `f`.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">substitute_origin</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper function to subsitute names tables inside of expressions. </p><p>Arguments: <ul><li> old_origin: The old table name.</li><li> new_origin: The new table name.</li><li> expr: The expression in which the substitution should be performed.</li></ul> </p><p>It is used for example when renaming a table during a join.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">make_constant</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates an expression which is a simple constant to be interpolated. </p><p>Arguments: <ul><li> sql_type: The SQL type of the value.</li><li> x: The value to turn into a constant.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">subquery_as_ctx</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a Context from a Sub<div class="Unclosed"><i>Query. </i></div></p><p>Arguments: <ul><li> subquery: The subquery to lift into a context.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">make_ctx_from</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a query context that just fetches data from a table, without any additional processing. </p><p>Arguments: <ul><li> table_name: The name of the tanle for which the context is being created.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Query</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>Describes a full SQL query.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Select</span> <span class="parameter">columns context </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A Select SQL query. </p><p>Arguments: <ul><li> expressions: List of pairs specifying the columns to materialize; each
       is a pair whose first element is the name of the materialized column
       and the second element is the expression to compute.</li><li><div class="InvalidList"> context: The query context, see `Context` for more detail.</div></li></ul> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Select_All</span> <span class="parameter">context </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A Select SQL query that gets all columns in a table. </p><p>Arguments: <ul><li> context: The query context, see `Context` for more detail.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Insert</span> <span class="parameter">table_name pairs </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An Insert SQL query that inserts a single row to the table. </p><p>Arguments: <ul><li> table_name: The name of the table to insert to.</li><li> pairs: A list of pairs consisting of a column name and and expression.</li></ul></p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Nulls_Order</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>Specifies how null values should be handled within the ordering.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Nulls_First</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Null values are included before any other values in the ordering.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Nulls_Last</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Null values are included after all other values in the ordering.</p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Order_Direction</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>Specifies the direction of the ordering.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Ascending</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Orders elements in ascending order.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Descending</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Orders elements in descending order.</p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Join_Kind</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>The kind of the join operation.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Join_Inner</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Inner join. </p><p>The result will contain only rows that had a match in both left and right source.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Join_Left</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Left join. </p><p>The result will contain all rows from the left source. Some of them may be duplicated if they have multiple matches on the right. If a row from the left source has no match on the right, it will be present exactly once in the result and the fields corresponding to the right source will be set to NULL.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Join_Right</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Right join. </p><p>The result will contain all rows from the right source. Some of them may be duplicated if they have multiple matches on the left. If a row from the right source has no match on the left, it will be present exactly once in the result and the fields corresponding to the left source will be set to NULL.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Join_Cross</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Cross join. </p><p>The result will contain a cross product of rows from the left source with the right source. Its <code>on</code> list should be empty, instead <code>where_filters</code> in the query can be used to filter the results.</p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">From_Spec</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>Used as part of the context, specifies the sources of the query.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">From_Table</span> <span class="parameter">table_name alias </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A query source that takes data directly from a table in the database. </p><p>Arguments: <ul><li> table_name: the full name identifying the table in the database.</li><li> alias: the name upon which the table can be referred to in other
       parts of the query, this is especially useful for example in
       self-joins, allowing to differentiate between different instances of
       the same table.</li></ul> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Join</span> <span class="parameter">kind left_spec right_spec on </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A query source that performs a join operation on two sources. </p><p>Arguments: <ul><li> kind: the kind of the join.</li><li> left_spec: the left data source to be joined</li><li> right_spec: the right data source to be joined</li><li> on: a list of expressions that will be used as join conditions, these
       are usually be equalities between expressions from the left and right
       sources.</li></ul> </p><p> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Sub_Query</span> <span class="parameter">columns context alias </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A query source consisting of a sub-query. </p><p>Arguments: <ul><li> columns: a list of pairs; each first element is the alias for the
       column created in the sub-query and the second element is the
       expression to be computed.</li><li><div class="InvalidList"> context: the context for the sub</div></li><li>     - alias: the name upon which the results of this sub
       referred to in other parts of the query.</li></ul> </p><p> </p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Context</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A context associated with an SQL query.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Context</span> <span class="parameter">from_spec where_filters orders groups meta_index limit </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A context associated with an SQL query. </p><p>The expressions can only be computed in a context which specifies from where their columns come and set filters and other settings for processing the query. </p><p>Arguments: <ul><li> from_spec: the sources for the query, see `From_Spec` for more
       details.</li><li> where_filters: a list of expressions for filtering 
       for which these expressions evaluate to true are included in the
       result.</li><li>     - orders: a list of ordering expressions, for each entry an ORDER BY
       clause is added.</li><li>     - groups: a list of grouping expressions, for each entry a GROUP BY is
       added, the resulting query can then directly include only the
       grouped-by columns or aggregate expressions.</li><li><div class="InvalidList"> meta_index: a list of internal columns to use for joining or grouping.</div></li><li>     - limit: an optional maximum number of elements that the equery should
       return.</li></ul> </p><p><div class="summary"> </div> </p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of the context with changed <code>meta_index</code>. </p><p>Arguments: <ul><li> new_index: The new index to set in the query.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_index</span> <span class="argument">new_index</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_where_filters</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of the context with changed <code>where_filters</code>. </p><p>Arguments: <ul><li> new_filters: The new filters to set in the query.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_where_filters</span> <span class="argument">new_filters</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_orders</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of the context with changed <code>orders</code>. </p><p>Arguments: <ul><li> new_orders: The new ordering clauses to set in the query.</li></ul> </p></div></div></div></div><div><div class="method flex"><p><span class="name">set_orders</span> <span class="argument">new_orders</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_groups</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of the context with changed <code>groups</code>. </p><p>Arguments: <ul><li> new_groups: The new grouping clauses to set in the query.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_groups</span> <span class="argument">new_groups</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">set_limit</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a copy of the context with changed <code>limit</code>. </p><p>Arguments: <ul><li> new_limit: The new limit clauses to set in the query.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">set_limit</span> <span class="argument">new_limit</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">as_subquery</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>'Lifts' this context into a subquery, so that the original context (with all filters etc.) is encapsulated within the subquery and all external references passed as the second argument, refer directly to that subquery. </p><p>It takes a list of lists of columns that should be included in that subquery (this can for example the list of regular columns, the list of indices etc.) It assumes that columns on these lists all have unique names. </p><p>It returns a new context and the lists transformed in such a way that each column corresponds to one from the original list but it is valid in the new context. </p><p>This is useful as a preprocessing step between combining queries, for example in a join. </p></div></div></div></div><div><div class="method flex"><p><span class="name">as_subquery</span> <span class="argument">alias column_lists</span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Expression</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>The internal representation of an SQL expression which can be a column reference, an interpolated constant or an operation that combines other expressions.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Column</span> <span class="parameter">origin name </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The internal representation of an SQL expression that gets a value from a column. </p><p>Arguments: <ul><li> origin: the name of the entity (table or sub
       originates from, it corresponds to the `alias` field in `from_spec`.</li><li> name: the name of the column directly in the table or its alias in a
       sub-query.</li></ul> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Constant</span> <span class="parameter">sql_type value </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The internal representation of an SQL expression which is a constant to be interpolated when building the query. </p><p>Arguments: <ul><li> sql_type: The SQL type that this object is going to be serialized to.
       It is usually inferred from the expression's context.</li><li> value: the value to be interpolated; it should be a simple Number, Text
       or other types that are serializable for JDBC.</li></ul> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Operation</span> <span class="parameter">kind expressions </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The internal representation of an SQL expression built from an operation and sub-expressions. </p><p>Arguments: <ul><li> kind: the name of the operation, these can be both functions or infix
       operators, the actual implementation is determined by a specific
       dialect.</li><li>     - expression: a list of expressions which are arguments to the operation;
       different operations support different amounts of arguments.</li></ul> </p></div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div><div><div></div><div><div><div><div></div><div></div></div><div></div></div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div>
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
