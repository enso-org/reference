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
            <a href="Base-Data-List" className="font-bold">List</a>
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
          <div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">List</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>The basic cons-list type. </p></div><div><p>A cons-list allows storage of an arbitrary number of elements. </p><p>Prepending to the list can be achieved by using the <code>Cons</code> constructor, while an empty list is represented by <code>Nil</code>. </p><div class="example"><div class="summary">Example</div> A list containing the elements <code>1</code>, <code>2</code>, and <code>3</code>, in this order is: <div><div class="doc-code-container" id="GGQ6rYdw"><pre><code>Cons 1 (Cons 2 (Cons 3 Nil))</code><br /></pre></div><button id="U3qKuzXy" class="doc-copy-btn flex">Copy</button></div></div></div></div><div><div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the number of elements in the list. </p></div><div><div class="example"><div class="summary">Example</div> Get the length of a two item list. <div><div class="doc-code-container" id="tvpXxWTz"><pre><code>(Cons 1 (Cons 2 Nil)).length</code><br /></pre></div><button id="UVMjPKsh" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument"></span></p></div></div><div><div class=""><p>Combines all the elements of the list, by iteratively applying the <div><div class="doc-code-container" id="nzS42XMd"><pre><code>passed function with next elements of the list.</code><br /></pre></div><button id="zpfGutMf" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - init: The initial value for the fold.      - f: The binary function used to combine elements of the list. </p><p>In general, the result of <div><div class="doc-code-container" id="U2ME6lDr"><pre><code>(Cons l0 &lt;| Cons l1 &lt;| ... &lt;| Cons ln) . fold init f</code><br /></pre></div><button id="GuEe3WZX" class="doc-copy-btn flex">Copy</button></div> is the same as <div><div class="doc-code-container" id="xvVzRKDj"><pre><code>f (...(f (f init l0) l1)...) ln</code><br /></pre></div><button id="1Rc4sv0D" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> In the following example, we'll compute the sum of all elements of a list: <div><div class="doc-code-container" id="rl3q6VIK"><pre><code>(Cons 0 &lt;| Cons 1 &lt;| Cons 2 &lt;| Nil) . fold 0 (+)</code><br /></pre></div><button id="hAauAfdm" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument">init f</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">exists</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether any element of the list matches the given predicate. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> In the following example, we'll check if any element of the list is larger than <code>5</code>: <div><div class="doc-code-container" id="8jf0nF21"><pre><code>(Cons 0 &lt;| Cons 1 &lt;| Cons 2 &lt;| Nil) . exists (&gt; 5)</code><br /></pre></div><button id="XXDK1qcf" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">exists</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">any</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether any element of the list matches the given predicate. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><p>A predicate is a function that takes a list element and returns a Boolean value. </p><div class="example"><div class="summary">Example</div> In the following example, we'll check if any element of the list is larger than <code>5</code>: <div><div class="doc-code-container" id="n25eKPDi"><pre><code>(Cons 0 &lt;| Cons 1 &lt;| Cons 2 &lt;| Nil) . any (&gt; 5)</code><br /></pre></div><button id="Mw9Cwz1b" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">any</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">all</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether a predicate holds for all elements in this list. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Check if all elements in the list are less than zero. <div><div class="doc-code-container" id="bsf41Aac"><pre><code>(Cons 1 (Cons 2 Nil)).all (&lt; 0)</code><br /></pre></div><button id="1w0vMIcC" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">all</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">contains</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether this list contains a given value as an element. </p></div><div><p>Arguments: <ul><li> elem: The element to check if it is in the list.</li></ul> </p><div class="example"><div class="summary">Example</div> Checking if the list contains the number 72. <div><div class="doc-code-container" id="h5C3zXJy"><pre><code>(Cons 1 (Cons 72 Nil)).contains 72</code><br /></pre></div><button id="Jz3trNlj" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">contains</span> <span class="argument">elem</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if this list is empty. </p></div><div><div class="example"><div class="summary">Example</div> Checking for emptiness. <div><div class="doc-code-container" id="Q0qRgFA4"><pre><code>Nil.is_empty == true</code><br /><code>Cons 1 Nil . is_empty == false</code><br /></pre></div><button id="YtEmUlHv" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if the list is not empty. </p></div><div><div class="example"><div class="summary">Example</div> Checking for emptiness. <div><div class="doc-code-container" id="uRoe9Ehs"><pre><code>Nil.not_empty == false</code><br /><code>Cons 1 Nil . not_empty == true</code><br /></pre></div><button id="lLb4tXqJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">filter</span> <span class="argument"></span></p></div></div><div><div class=""><p>Selects all elements of this list which satisfy a predicate. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Selecting all elements that are greater than 3. <div><div class="doc-code-container" id="Pm3tF1H7"><pre><code>(Cons 1 Nil).filter (&gt; 3)</code><br /></pre></div><button id="0ksYF63I" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">filter</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the list, returning the list of <div><div class="doc-code-container" id="w374BF8A"><pre><code>results.</code><br /></pre></div><button id="SPPEro8p" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - f: The function to apply to each element of the list. </p><div class="example"><div class="summary">Example</div> Add <code>1</code> to each element of the list: <div><div class="doc-code-container" id="cMV4Euji"><pre><code>(Cons 0 &lt;| Cons 1 &lt;| Cons 2 &lt;| Nil) . map +1</code><br /></pre></div><button id="aqmi3DRL" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map</span> <span class="argument">f</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">each</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the list. </p></div><div><p>Arguments: <ul><li> f: The function to apply to each element of the list.</li></ul> </p><p>Unlike <code>map</code>, this method does not return the individual results, therefore it is only useful for side-effecting computations. </p><div class="example"><div class="summary">Example</div> Print each of the list elements to the standard output. <div><div class="doc-code-container" id="S8dEffjY"><pre><code>(Cons 0 &lt;| Cons 1 &lt;| Cons 2 &lt;| Nil) . each IO.println</code><br /></pre></div><button id="KukS2ZKx" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">each</span> <span class="argument">f</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Reverses the list, returning a list with the same elements, but in the <div><div class="doc-code-container" id="zYj14env"><pre><code>opposite order.</code><br /></pre></div><button id="J8DricEZ" class="doc-copy-btn flex">Copy</button></div> </p></div><div><div class="example"><div class="summary">Example</div> Reversing a small list. <div><div class="doc-code-container" id="NJiPlY4h"><pre><code>(Cons 1 (Cons 2 Nil)).reverse == (Cons 2 (Cons 1 Nil))</code><br /></pre></div><button id="G1r7pIWY" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_start</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new list with the first <code>count</code> elements at the start of <code>this</code> <div><div class="doc-code-container" id="350E7Fz6"><pre><code>removed.</code><br /></pre></div><button id="BOOa2ZwA" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - count: The number of elements to take drop the start of `this`. </p><div class="example"><div class="summary">Example</div> Removing the first element from a list. <div><div class="doc-code-container" id="K0dCzohb"><pre><code>(Cons 1 (Cons 2 (Nil))).drop_start 1</code><br /></pre></div><button id="9mOarLfY" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">drop_start</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new list consisting of the first <code>count</code> elements at the start <div><div class="doc-code-container" id="AP8wp6SZ"><pre><code>of `this`.</code><br /></pre></div><button id="px6z5ca1" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - count: The number of elements to take from the start of `this`. </p><div class="example"><div class="summary">Example</div> Obtaining the first 2 elements of a list. <div><div class="doc-code-container" id="gv7ponF0"><pre><code>(Cons 1 (Cons 2 (Cons 3 Nil))).take_start 2</code><br /></pre></div><button id="kQwXWYeD" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the first element from the list. </p></div><div><div class="example"><div class="summary">Example</div> This returns 1. <div><div class="doc-code-container" id="R9Fjp5lu"><pre><code>(Cons 1 (Cons 2 Nil)).head</code><br /></pre></div><button id="O5agY7Cb" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">tail</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get all elements from the list except the first. </p></div><div><div class="example"><div class="summary">Example</div> This returns (Cons 2 Nil). <div><div class="doc-code-container" id="zfrHHcus"><pre><code>(Cons 1 (Cons 2 Nil)).tail</code><br /></pre></div><button id="Wr0qz7RP" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">tail</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">init</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get all elements from the list except the last. </p></div><div><div class="example"><div class="summary">Example</div> Removing the last element of the list to give (Cons 1 Nil). <div><div class="doc-code-container" id="7WXZw8rL"><pre><code>(Cons 1 (Cons 2 Nil)).init</code><br /></pre></div><button id="xU21XGsJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">init</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the last element of the list. </p></div><div><div class="example"><div class="summary">Example</div> Getting the final element, in this case 2. <div><div class="doc-code-container" id="mBl3YX6u"><pre><code>(Cons 1 (Cons 2 Nil)).last</code><br /></pre></div><button id="LHp7nYpc" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the first element from the list. </p></div><div><div class="example"><div class="summary">Example</div> This returns 1. <div><div class="doc-code-container" id="ZviuTdTP"><pre><code>(Cons 1 (Cons 2 Nil)).first</code><br /></pre></div><button id="545SbMzr" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">rest</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get all elements from the list except the first. </p></div><div><div class="example"><div class="summary">Example</div> This returns (Cons 2 Nil). <div><div class="doc-code-container" id="bgAe2xFC"><pre><code>(Cons 1 (Cons 2 Nil)).rest</code><br /></pre></div><button id="k5k7IA5u" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">rest</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">map_helper</span> <span class="argument">list cons f</span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p>A helper for the <code>map</code> function. </p></div><div><p>Arguments: <ul><li> list: The list to map over.</li><li> cons: The current field to set.</li><li> f: The function to apply to the value.</li></ul> </p><p>Uses unsafe field mutation under the hood, to rewrite <code>map</code> in a tail-recursive manner. The mutation is purely internal and does not leak to the user-facing API.</p></div></div></div></div><div></div><div></div></div>
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
