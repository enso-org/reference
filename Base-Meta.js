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
          <a href="Base-Meta" className="font-bold">Meta</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">get_qualified_type_name</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the fully qualified type name of the given value. </p><p>Arguments: <ul><li> value: the value to get the type of.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">get_simple_type_name</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Displays the type of the provided value as text. </p><p>Arguments: <ul><li> value: The value for which to display the type.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">get_source_location</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a Text representing the source location of a stack frame above the call. </p><p>Arguments: <ul><li> skip_frames: how many frames on the stack to skip.</li></ul> </p><p>If the function is called with 0 it will return the location of that call. Note that not only function calls, but also things like pattern matching add frames to the stack and there is no guarantee that the amount of frames that need to be skipped will not change between versions, so this method should be used carefully.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Polyglot.get_language</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the language with which a polyglot value is associated.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Constructor.new</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Creates a new atom of the given constructor. </p><p>Arguments: <ul><li> fields: A vector of arguments to pass to the constructor when creating the
   new atom.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Constructor.name</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the name of a constructor.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Constructor.fields</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a vector of field names defined by a constructor.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Unresolved_Symbol.scope</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the definition scope of an unresolved symbol.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Unresolved_Symbol.name</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns the name of an unresolved symbol.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Unresolved_Symbol.rename</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a new unresolved symbol with its name changed to the provided argument. </p><p>Arguments: <ul><li> new_name: The new name for the unresolved symbol.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Atom.constructor</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a constructor value of the given atom.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Atom.fields</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a vector of field values of the given atom.</p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Meta</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></h1></div><div><div class="summary"><p> </p></div><div><p>A meta-representation of a runtime value. </p><div class="important"><div class="summary">Warning</div> The functionality contained in this module exposes certain implementation details of the language. As such, the API has no stability guarantees and is subject to change as the Enso interpreter evolves.</div></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Atom</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An Atom meta-representation. </p><p>Arguments: <ul><li> value: The value of the atom in the meta representation.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Constructor</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A constructor meta-representation. </p><p>Arguments: <ul><li> value: The value of the constructor in the meta representation.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Primitive</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A primitive value meta-prepresentation. </p><p>Arguments: <ul><li> value: The value of the primitive object in the meta representation.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Unresolved_Symbol</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An unresolved symbol meta-representation. </p><p>Arguments: <ul><li> value: The value of the unresolved symbol in the meta representation.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Error</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An error meta-representation, containing the payload of a dataflow error. </p><p>Arguments: <ul><li> value: The payload of the error.</li></ul></p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Polyglot</span> <span class="parameter">value </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>A polyglot value meta-representation. </p><p>Arguments: <ul><li> value: The polyglot value contained in the meta representation.</li></ul></p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Language</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>Represents a polyglot language.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Java</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The Java laguage.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Unknown</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An unknown language.</p></div></div></div></div></div><div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">is_an</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>value</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> value: The value to check for being an instance of `typ`.</li><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">is_a</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>value</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> value: The value to check for being an instance of `typ`.</li><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Base.Error.is_an</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>this</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Base.Error.is_a</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>this</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.is_an</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>this</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.is_a</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks if <code>this</code> is an instance of <code>typ</code>. </p><p>Arguments: <ul><li> typ: The type to check `this` against.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">is_same_object</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Checks whether two objects are represented by the same underlying reference. </p><p>Arguments: <ul><li> value_1: The first value.</li><li> value_2: The second value.</li></ul></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">meta</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a meta-representation of a given runtime entity. </p><p>Arguments: <ul><li> value: The runtime entity to get the meta representation of.</li></ul></p></div></div></div></div><div></div><div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div>
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
