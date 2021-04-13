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
            <input type="checkbox" id="Base-Data-Json" checked="True" />
            <label for="Base-Data-Json">
              <a href="Base-Data-Json">Json</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Json-Internal" className="font-bold">Internal</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse_helper</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper used to parse text into a JSON value. </p><p>Arguments: <ul><li> json_text: The textual representation of the JSON.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">into_helper</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper method for converting JSON objects into arbitrary types. </p><p>Arguments: <ul><li> fmt: The format to convert the JSON into.</li><li> json: The JSON being converted.</li></ul> </p><p>See <code>Json.into</code> for semantics documentation.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">render_helper</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper method for printing JSON values to Text. </p><p>Arguments: <ul><li> builder: An accumulator for text.</li><li> json: The json value being converted to text.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">mk_consumer</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a new top-level consumer.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">mk_array_consumer</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a new array consumer with the given parent. </p><p>Arguments: - parent: The parent of the new consumer.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">mk_object_consumer</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a new object consumer with the given parent. </p><p>Arguments: <ul><li> parent: The parent of the new consumer.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Object_Consumer</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A child consumer, used to process events inside objects.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Object_Consumer</span> <span class="parameter">last_key map parent </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A child consumer, used to process events inside objects. </p><p>Arguments: <ul><li> last_key: The last object key that has been seen.</li><li> map: The map representing the object.</li><li> parent: The parent consumer.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">on_key</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes a key. </p><p>Arguments: <ul><li> k: The key to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_key</span> <span class="argument">k</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes a value. </p><p>Arguments: <ul><li> v: The value to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument">v</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">seal</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the final value built by this consumer.</p></div></div></div></div><div><div class="method flex"><p><span class="name">seal</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Array_Consumer</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A child consumer, used to process events inside arrays.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Array_Consumer</span> <span class="parameter">builder parent </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A child consumer, used to process events inside arrays. </p><p>Arguments: <ul><li> builder: The builder for array values.</li><li> parent: The parent consumer.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes a value. </p><p>Arguments: <ul><li> v: The value to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument">v</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">seal</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the final value built by this consumer.</p></div></div></div></div><div><div class="method flex"><p><span class="name">seal</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Consumer</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A JSON parser event consumer, passed to the Java parser backend. </p><p>Conforms to the <code>org.enso.base.json.Parser.JsonConsumer</code> Java interface.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Consumer</span> <span class="parameter">child_consumer value </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A JSON parser event consumer, passed to the Java parser backend. </p><p>Arguments: <ul><li> child_consumer: The child consumer of this.</li><li> value: The value being consumed.</li></ul> </p><p>Conforms to the <code>org.enso.base.json.Parser.JsonConsumer</code> Java interface.</p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A helper for handling &quot;value emitted&quot; events. </p><p>Arguments: <ul><li> v: The value to act upon.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_value</span> <span class="argument">v</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">seal_child</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Closes the child consumer and either sets the current consumer to its parent, or takes its returned value as the final result of parsing.</p></div></div></div></div><div><div class="method flex"><p><span class="name">seal_child</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_start_object</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>start_object</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_start_object</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_key</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>key</code> event. </p><p>Arguments: <ul><li> k: The key to act upon.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_key</span> <span class="argument">k</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_end_object</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>end_object</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_end_object</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_start_array</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>start_array</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_start_array</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_end_array</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>end_array</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_end_array</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_long</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>long</code> event. </p><p>Arguments: <ul><li> n: The long value to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_long</span> <span class="argument">n</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_double</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>double</code> event. </p><p>Arguments: <ul><li> n: The double value to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_double</span> <span class="argument">n</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_string</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>string</code> event. </p><p>Arguments: <ul><li> s: The string value to process.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">on_string</span> <span class="argument">s</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_true</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>true</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_true</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_false</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>false</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_false</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">on_null</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Consumes the <code>null</code> event.</p></div></div></div></div><div><div class="method flex"><p><span class="name">on_null</span> <span class="argument"></span></p></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div>
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
