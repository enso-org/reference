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
            <a href="Database-Data-Sql" className="font-bold">Sql</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">optimize_fragments</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Merges neighboring code fragments to create a more compact representation of the same code. </p><p>Arguments: <ul><li> fragments: The fragments to be merged together.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Sql_Fragment</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A fragment of a SQL query. </p><p>It can either be a Sql<i>Code</i>Part that represents raw SQL code or Sql<div class="Unclosed"><i>Interpolation which represents an object that will be interpolated into the query.</i></div></p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Sql_Code_Part</span> <span class="parameter">code </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A SQL fragment that represents raw SQL code. </p><p>Arguments: <ul><li> code: A fragment of SQL code.</li></ul> </p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Sql_Interpolation</span> <span class="parameter">sql_type object </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A SQL fragment that represents an object which will be interpolated into the query. </p><p>Arguments: <ul><li> sql_type: The expected SQL type of `object`.</li><li> object: A value that will be interpolated into the query, interpreted
       as having the type `sql_type`.</li></ul> </p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Sql_Type</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents an internal SQL data-type.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Sql_Type</span> <span class="parameter">typeid name </span></p></div></div><div><div class=""><p>Represents an internal SQL data-type. </p></div><div><p>Arguments: <ul><li> typeid: a numerical type id, as defined in `java.sql.Types`.</li><li> name: a database</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">boolean</span> <span class="argument"></span></p></div></div><div><div class=""><p>The SQL representation of <code>Boolean</code> type.</p></div></div></div></div><div><div class="method flex"><p><span class="name">boolean</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">integer</span> <span class="argument"></span></p></div></div><div><div class=""><p>The SQL representation of <code>Integer</code> type.</p></div></div></div></div><div><div class="method flex"><p><span class="name">integer</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">decimal</span> <span class="argument"></span></p></div></div><div><div class=""><p>The SQL type representing decimal numbers.</p></div></div></div></div><div><div class="method flex"><p><span class="name">decimal</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">numeric</span> <span class="argument"></span></p></div></div><div><div class=""><p>The SQL type representing a general numeric type.</p></div></div></div></div><div><div class="method flex"><p><span class="name">numeric</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">varchar</span> <span class="argument"></span></p></div></div><div><div class=""><p>The SQL type representing one of the suppported textual types.</p></div></div></div></div><div><div class="method flex"><p><span class="name">varchar</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_definitely_integer</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns True if this type represents an integer. </p><p>It only handles the standard types so it may return false negatives for non-standard ones.</p></div></div></div></div><div><div class="method flex"><p><span class="name">is_definitely_integer</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_definitely_boolean</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns True if this type represents a boolean. </p><p>It only handles the standard types so it may return false negatives for non-standard ones.</p></div></div></div></div><div><div class="method flex"><p><span class="name">is_definitely_boolean</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_definitely_double</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns True if this type represents a floating point number. </p><p>It only handles the standard types so it may return false negatives for non-standard ones.</p></div></div></div></div><div><div class="method flex"><p><span class="name">is_definitely_double</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_definitely_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p>Returns True if this type represents a Text.</p></div></div></div></div><div><div class="method flex"><p><span class="name">is_definitely_text</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">join</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Joins a vector of code fragments with the provided separator. </p><p>Arguments: <ul><li> separator: The separator to use when joining the code fragments.</li><li> statements: The SQL statements to join using `separator`.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">interpolation</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a Builder representing an interpolation of the given object. </p><p>Arguments: <ul><li> sql_type: The expected SQL type of `object`.</li><li> object: The object to be interpolated into the query as if it has the type
   given by `sql_type`.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">code</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a Builder representing a code fragment containing the specified raw code. </p><p>Arguments: <ul><li> text: The raw SQL code.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">empty</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a Builder representing and empty code fragment.</p></div></div></div></div><div></div><div></div><div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div></div></div></div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div><div></div><div></div></div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div>
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
