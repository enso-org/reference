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
              <a href="Base-Data-Json" className="font-bold">Json</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_pairs</span> <span class="argument"></span></p></div></div><div><div class=""><p>A smart constructor, building an object representation based on a vector of key-value pairs. </p></div><div><p>Arguments: <ul><li> contents: A vector of key</li></ul> </p><p>All values used as keys must define a <code>to_json_key : Text</code> method. </p><div class="example"><div class="summary">Example</div> The following code: <div><div class="doc-code-container" id="6kWR6s2a"><pre><code>Json.from_pairs [[&quot;foo&quot;, 533], [&quot;bar&quot;, False]]</code><br /></pre></div><button id="SuHoz3WE" class="doc-copy-btn flex">Copy</button></div> Returns a JSON object, that after serialization becomes: <div><div class="doc-code-container" id="htLqim9o"><pre><code>{ &quot;foo&quot;: 533, &quot;bar&quot;: false }</code><br /></pre></div><button id="7G5Iqisg" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Nothing.to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Convert <code>Nothing</code> to JSON. </p></div><div><div class="example"><div class="summary">Example</div> Convert <code>Nothing</code> to JSON. <div><div class="doc-code-container" id="bugRt8av"><pre><code>Nothing.to_json</code><br /></pre></div><button id="4r7I1vhj" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Base.Boolean.to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Convert a boolean to JSON. </p></div><div><div class="example"><div class="summary">Example</div> Convert <code>True</code> to JSON. <div><div class="doc-code-container" id="8tYrckPx"><pre><code>True.to_json</code><br /></pre></div><button id="A3WaUD1k" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.to_json_key</span> <span class="argument"></span></p></div></div><div><div class=""><p>Method used by object builders to convert a value into a valid JSON key. </p></div><div><div class="example"><div class="summary">Example</div> Ensure that the text &quot;foo&quot; is a JSON key. <div><div class="doc-code-container" id="77es2WOW"><pre><code>&quot;foo&quot;.to_json_key</code><br /></pre></div><button id="wCDiCQPZ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Generically converts an atom into a JSON object. </p></div><div><p>The input atom is converted into a JSON object, with a <code>&quot;type&quot;</code> field set to the atom's type name and all other fields serialized with their name as object key and the value as the object value. </p><div class="example"><div class="summary">Example</div> Convert a vector to JSON. <div><div class="doc-code-container" id="ixiQY8fF"><pre><code>[1, 2, 3, 4].to_json</code><br /></pre></div><button id="34j2LmMn" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Marshalling_Error</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A failure indicating the inability to marshall a <code>Json</code> object into the specified format.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Type_Mismatch_Error</span> <span class="parameter">json format </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The <code>json</code> object could not be converted into <code>format</code>, due to a type mismatch. </p><p>Arguments: <ul><li> json: The JSON that could not be marshalled.</li><li> format: The type format that did not match.</li></ul> </p><p>This can occur e.g. when trying to reinterpret a number as a <code>Text</code>, etc.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Missing_Field_Error</span> <span class="parameter">json field format </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The <code>json</code> object could not be converted into <code>format</code>, due to a field missing in the <code>json</code> structure. </p><p>Arguments: <ul><li> json: The json that had a missing field.</li><li> field: The field name that was missing.</li><li> format: The type format that diud not match.</li></ul> </p><p>This can occure when trying to reinterpret a JSON object into an atom, when the JSON does not contain all the fields required by the atom.</p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">to_display_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Convert the marshalling error into a human-readable format.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_display_text</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Parses an RFC-8259 compliant JSON text into a <code>Json</code> structure. </p></div><div><p>Arguments: <ul><li> json_text: The RFC</li></ul> </p><div class="example"><div class="summary">Example</div> Convert some text representing a JSON object into JSON. <div><div class="doc-code-container" id="1wlCjIii"><pre><code>&quot;{ &quot;a&quot;: 1 }&quot;.parse</code><br /></pre></div><button id="kHJC5XLX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Object.get</span> <span class="argument"></span></p></div></div><div><div class=""><p>Gets the value associated with the given key in this object. </p></div><div><p>Arguments: <ul><li> field: The name of the field from which to get the value.</li></ul> </p><p>Throws <code>Nothing</code> if the associated key is not defined.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Parse_Error.to_display_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Converts the error to a display representation.</p></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">Parse_Error</span> <span class="parameter">message </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A failure indicating malformed text input into the JSON parser. </p><p>Check the <code>message</code> field for detailed information on the specific failure.</p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Json</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a JSON structure.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Object</span> <span class="parameter">fields </span></p></div></div><div><div class=""><p>A representation of a JSON object. </p></div><div><p>Arguments: <ul><li> fields: The fields of the JSON object.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Array</span> <span class="parameter">items </span></p></div></div><div><div class=""><p>A representation of a JSON array. </p></div><div><p>Arguments: <ul><li> items: The items in the JSON array.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">String</span> <span class="parameter">value </span></p></div></div><div><div class=""><p>A representation of a JSON string. </p></div><div><p>Arguments: <ul><li> value: The text contained in the JSON string.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Number</span> <span class="parameter">value </span></p></div></div><div><div class=""><p>A representation of a JSON number. </p></div><div><p>Arguments: <ul><li> value: The number contained in the JSON number.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Boolean</span> <span class="parameter">value </span></p></div></div><div><div class=""><p>A representation of a JSON boolean. </p></div><div><p>Arguments: <ul><li> value: The boolean contained in a JSON boolean.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Null</span> <span class="parameter"></span></p></div></div><div><div class=""><p>A representation of a JSON null.</p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">into</span> <span class="argument"></span></p></div></div><div><div class=""><p>Marshalls this JSON into an arbitrary value described by <div><div class="doc-code-container" id="HMDLyNHi"><pre><code>`type_descriptor`.</code><br /></pre></div><button id="YojeQeNG" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - `type_dscriptor`: The type descriptor is a fully <div><div class="doc-code-container" id="xKQmfGHc"><pre><code>describing all required sub-types. It can either be an Atom or one of</code><br /><code>the primitive types (`Number`, `Text`, `Boolean`, `Vector`).</code><br /></pre></div><button id="Sn41atfZ" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> The following shows an example of reading a nested JSON into a desired type. It will return a vector of <code>Book</code> objects containing data from <code>json_string</code>. <div><div class="doc-code-container" id="St6nl7lb"><pre><code>type Book title author</code><br /><code>type Author name year_of_birth</code><br /></pre></div><button id="8PjTGkn5" class="doc-copy-btn flex">Copy</button></div> </div><p>read<div class="Unclosed"><i>data = <div><div class="doc-code-container" id="CNn789EC"><pre><code>json_string = '''</code><br /><code>    [</code><br /><code>      {</code><br /><code>        &quot;title&quot;: &quot;Lord of the Rings&quot;,</code><br /><code>        &quot;author&quot;: {</code><br /><code>          &quot;name&quot;: &quot;J. R. R. Tolkien&quot;,</code><br /><code>          &quot;year_of_birth&quot;: 1892</code><br /><code>        }</code><br /><code>      },</code><br /><code>      {</code><br /><code>        &quot;title&quot;: &quot;The Little Prince&quot;,</code><br /><code>        &quot;author&quot;: {</code><br /><code>          &quot;name&quot;: &quot;Antoine de Saint-Exupéry&quot;,</code><br /><code>          &quot;year_of_birth&quot;: 1900</code><br /><code>        }</code><br /><code>      },</code><br /><code>      {</code><br /><code>        &quot;title&quot;: &quot;And Then There Were None&quot;,</code><br /><code>        &quot;author&quot;: {</code><br /><code>          &quot;name&quot;: &quot;Agatha Christie&quot;,</code><br /><code>          &quot;year_of_birth&quot;: 1890</code><br /><code>        }</code><br /><code>      }</code><br /><code>    ]</code><br /><code>parsed = Json.parse json_string</code><br /><code>parsed.into (Vector (Book title=Text (Author name=Text year_of_birth=Number)))</code><br /></pre></div><button id="Kika0BAH" class="doc-copy-btn flex">Copy</button></div></i></div></p></div></div></div></div><div><div class="method flex"><p><span class="name">into</span> <span class="argument">type_descriptor</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns this Json object. </p></div><div><p>Included to implement the <code>to_json</code> interface.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div class=""><p>Renders this JSON into an RFC-8259 compliant text. </p></div><div><div class="example"><div class="summary">Example</div> Convert a JSON number to text. <div><div class="doc-code-container" id="u9E57E6R"><pre><code>Json.Number 3 . to_text</code><br /></pre></div><button id="pUfTX66D" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">unwrap</span> <span class="argument"></span></p></div></div><div><div class=""><p>Recursively unwraps the JSON value into primitive values. </p></div><div><div class="example"><div class="summary">Example</div> Unwrap the JSON number 3 to the primitive number 3. <div><div class="doc-code-container" id="32ZmvHS9"><pre><code>Json.Number 3 . unwrap</code><br /></pre></div><button id="o3m6DYKg" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">unwrap</span> <span class="argument"></span></p></div></div></div></div></div></div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div><div><div></div><div></div></div></div></div></div>
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
