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
              <a href="Base-Data-Map" className="font-bold">Map</a>
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
          <div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Map</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>A key-value store. This type assumes all keys are pairwise comparable, using the <code>&lt;</code>, <code>&gt;</code> and <code>==</code> operators.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Tip</span> <span class="parameter"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p>A key-value store. This type assumes all keys are pairwise comparable, using the <code>&lt;</code>, <code>&gt;</code> and <code>==</code> operators.</p></div></div></div></div><div><div><div><div class="atom flex"><p><span class="name">Bin</span> <span class="parameter">s key value left right </span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p>A key-value store. This type assumes all keys are pairwise comparable, using the <code>&lt;</code>, <code>&gt;</code> and <code>==</code> operators. </p></div><div><p>Arguments: <ul><li> s: The size of the tree at this node.</li><li> key: The key stored at this node.</li><li> value: The value stored at this node.</li><li> left: The left subtree.</li><li> right: The right subtree.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if the map is empty. </p></div><div><div class="example"><div class="summary">Example</div> Check if a singleton map is empty. <div><div class="doc-code-container" id="IQPUEyx2"><pre><code>Map.singleton 1 2 . is_empty</code><br /></pre></div><button id="NXOXYtKq" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if the map is not empty. </p></div><div><div class="example"><div class="summary">Example</div> Check if a singleton map is not empty. <div><div class="doc-code-container" id="9PKuDU5q"><pre><code>Map.singleton 1 2 . not_empty</code><br /></pre></div><button id="Mf4kPemJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">size</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the number of entries in this map. </p></div><div><div class="example"><div class="summary">Example</div> Get the size of a singleton map. <div><div class="doc-code-container" id="EJ5CfGXE"><pre><code>Map.singleton 1 2 . size</code><br /></pre></div><button id="FazKQDIe" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">size</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_vector</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts the map into a vector of <code>[key, value]</code> pairs. </p></div><div><p>The returned vector is sorted in the increasing order of keys. </p><div class="example"><div class="summary">Example</div> Convert a singleton map to a vector. <div><div class="doc-code-container" id="A4rULAdj"><pre><code>Map.singleton 1 2 . to_vector</code><br /></pre></div><button id="vFZfBeW4" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">to_vector</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a text representation of this map. </p></div><div><div class="example"><div class="summary">Example</div> Convert an empty map to text. <div><div class="doc-code-container" id="U2U9zbPF"><pre><code>Map.empty.to_text</code><br /></pre></div><button id="pkuwrAs5" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">==</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if this map is equal to another map. </p></div><div><p>Arguments: <ul><li> that: The map to compare `this` to.</li></ul> </p><p>Maps are equal when they contained the same keys and the values associated with each key are pairwise equal. </p><div class="example"><div class="summary">Example</div> Checking two singleton maps for equality. <div><div class="doc-code-container" id="plGsCthl"><pre><code>(Map.singleton 1 2) == (Map.singleton 2 3)</code><br /></pre></div><button id="yJO9Hi9a" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">==</span> <span class="argument">that</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">insert</span> <span class="argument"></span></p></div></div><div><div class=""><p>Inserts a key-value mapping into this map, overriding any existing <div><div class="doc-code-container" id="E8IJY69W"><pre><code>instance of `key` with the new `value`.</code><br /></pre></div><button id="bEPq9Gye" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - key: The key to insert the value for.      - value: The value to associate with `key`. </p><div class="example"><div class="summary">Example</div> Insert the value 3 into a map for the key 1. <div><div class="doc-code-container" id="Gb75AtHx"><pre><code>Map.empty.insert 1 3</code><br /></pre></div><button id="FJF6TPjF" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">insert</span> <span class="argument">key value</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">get</span> <span class="argument"></span></p></div></div><div><div class=""><p>Gets the value associated with <code>key</code> in this map, or throws a <code>Nothing</code>, <div><div class="doc-code-container" id="6YX5gaGM"><pre><code>if `key` is not present.</code><br /></pre></div><button id="aEUM5nHo" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - key: The key to look up in the map. </p><div class="example"><div class="summary">Example</div> Get the value for the key 2 in a map. <div><div class="doc-code-container" id="iUwEKgfC"><pre><code>Map.empty.get 2</code><br /></pre></div><button id="dStTLlXW" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">get</span> <span class="argument">key</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">get_or_else</span> <span class="argument"></span></p></div></div><div><div class=""><p>Gets the value associated with <code>key</code> in this map, or returns <code>other</code> if <div><div class="doc-code-container" id="Vv2cQhEC"><pre><code>it isn't present.</code><br /></pre></div><button id="aFkThvPf" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - key: The key to look up in the map.      - other: The value to use if the key isn't present. </p><div class="example"><div class="summary">Example</div> Get the value for the key 2 in a map or instead return 10 if it isn't present. <div><div class="doc-code-container" id="fgg5kpTC"><pre><code>Map.empty.get_or_else 2 10</code><br /></pre></div><button id="MtlnvrhQ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">get_or_else</span> <span class="argument">key ~other</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">transform</span> <span class="argument"></span></p></div></div><div><div class=""><p>Transforms the map's keys and values to create a new map. </p></div><div><p>Arguments: <ul><li> function: The function used to transform the map, taking a key and a
       value and returning a pair of `[key, value]`.</li></ul> </p><div class="example"><div class="summary">Example</div> Turn all keys into <code>Text</code> and double the values for a map <code>m</code>. <div><div class="doc-code-container" id="bbfHoFDy"><pre><code>m.transform (k -&gt; v -&gt; [k.to_text, v*2])</code><br /></pre></div><button id="ewMwpmtc" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">transform</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map</span> <span class="argument"></span></p></div></div><div><div class=""><p>Maps a function over each value in this map. </p></div><div><p>Arguments: <ul><li> function: The function to apply to each value in the map, taking a
       value and returning a value.</li></ul> </p><div class="example"><div class="summary">Example</div> Turn all values into <code>Text</code> for a map <code>m</code>. <div><div class="doc-code-container" id="PLrbs8u9"><pre><code>m.map (v -&gt; v.to_text)</code><br /></pre></div><button id="Tue3CsOT" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map_with_key</span> <span class="argument"></span></p></div></div><div><div class=""><p>Maps a function over each key-value pair in the map, transforming the <div><div class="doc-code-container" id="jgEMgOjn"><pre><code>value.</code><br /></pre></div><button id="YEhe8raS" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - function: The function to apply to each key and value in the map, <div><div class="doc-code-container" id="gt7kCp2v"><pre><code>taking a key and a value and returning a value.</code><br /></pre></div><button id="ZkixIA6n" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> Adding the key to the value in a map <code>m</code>. <div><div class="doc-code-container" id="Oqm2gxUW"><pre><code>m.map_with_key (k -&gt; v -&gt; k + v)</code><br /></pre></div><button id="V2EwdVmJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map_with_key</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map_keys</span> <span class="argument"></span></p></div></div><div><div class=""><p>Maps a function over each key in this map. </p></div><div><p>Arguments: <ul><li> function: The function to apply to each key in the map, taking a key
       and returning a key.</li></ul> </p><div class="example"><div class="summary">Example</div> Doubling all keys in the map <code>m</code>. <div><div class="doc-code-container" id="LNSBH6w2"><pre><code>m.map_keys (k -&gt; k*2)</code><br /></pre></div><button id="SpVnwj6d" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map_keys</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">each</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each value in the map. </p></div><div><p>Arguments: <ul><li> function: The function to apply to each value in the map, taking a
       value and returning anything.</li></ul> </p><p>This method does not return the results, so is only useful for performing computations with side-effects. </p><div class="example"><div class="summary">Example</div> Printing each value in the map <code>m</code>. <div><div class="doc-code-container" id="iDocvrDu"><pre><code>m.each IO.println</code><br /></pre></div><button id="z4qaZ1jT" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">each</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">each_with_key</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each key-value pair in the map. </p></div><div><p>Arguments: <ul><li> function: The function to apply to each key
       taking a key and a value and returning anything.</li></ul> </p><p>This method does not return the results, so is only useful for performing computations with side-effects. </p><div class="example"><div class="summary">Example</div> Printing each key and value in the map <code>m</code>. <div><div class="doc-code-container" id="DQwB4Ejp"><pre><code>m.each (k -&gt; v -&gt; IO.println (k.to_text + v.to_text))</code><br /></pre></div><button id="f3qQCGhU" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">each_with_key</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument"></span></p></div></div><div><div class=""><p>Combines the values in the map. </p></div><div><p>Arguments: <ul><li> init: The initial value for the fold.</li><li> function: A binary function to apply to pairs of values in the map.</li></ul> </p><div class="example"><div class="summary">Example</div> Summing all of the values in the map <code>m</code>. <div><div class="doc-code-container" id="JuhXVA6w"><pre><code>m.fold 0 (+)</code><br /></pre></div><button id="2cJMYf3m" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument">init function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">fold_with_key</span> <span class="argument"></span></p></div></div><div><div class=""><p>Combines the key-value pairs in the map. </p></div><div><p>Arguments: <ul><li> init: The initial value for the fold.</li><li> function: A function taking the left value, the current key, and the
       current value, and combining them to yield a single value.</li></ul> </p><div class="example"><div class="summary">Example</div> Sum the keys and values in the map <code>m</code>. <div><div class="doc-code-container" id="YrunaLb8"><pre><code>m.fold_with_key 0 (l -&gt; k -&gt; v -&gt; l + k + v)</code><br /></pre></div><button id="YEIj3GRR" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">fold_with_key</span> <span class="argument">init function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">keys</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get a vector containing the keys in the map. </p></div><div><div class="example"><div class="summary">Example</div> Get the keys from the map <code>m</code>. <div><div class="doc-code-container" id="a6WwKng8"><pre><code>m.keys</code><br /></pre></div><button id="olToY0Sh" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">keys</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">values</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get a vector containing the values in the map. </p></div><div><div class="example"><div class="summary">Example</div> Get the values from the map <code>m</code>. <div><div class="doc-code-container" id="GTiRTDQ4"><pre><code>m.values</code><br /></pre></div><button id="dySXoADM" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">values</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_vector</span> <span class="argument"></span></p></div></div><div><div class=""><p>Builds a map from a vector of key-value pairs. </p></div><div><p>Arguments: <ul><li> vec: A vector of key</li></ul> </p><div class="example"><div class="summary">Example</div> Building a map containing two key-value pairs. <div><div class="doc-code-container" id="ckFIIXG5"><pre><code>Map.from_vector [[1, 2], [3, 4]]</code><br /></pre></div><button id="Z0CNi1JC" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">singleton</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a single-element map with the given key and value present. </p></div><div><p>Arguments: <ul><li> key: The key to update in the map.</li><li> value: The value to store against 'key' in the map.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a single element map storing the key 1 and the value 2. <div><div class="doc-code-container" id="CXkaCJGl"><pre><code>Map.singleton 1 2</code><br /></pre></div><button id="P4vBMde3" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns an empty map. </p></div><div><div class="example"><div class="summary">Example</div> Create an empty map. <div><div class="doc-code-container" id="o0eqNT03"><pre><code>Map.empty</code><br /></pre></div><button id="C22JyuLC" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">No_Value_For_Key</span> <span class="parameter">key </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An error for getting a missing value from a map. </p><p>Arguments: <ul><li> key: The key that was asked for.</li></ul></p></div></div></div></div><div></div><div></div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div>
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
