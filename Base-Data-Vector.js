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
            <a href="Base-Data-Vector" className="font-bold">Vector</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Index_Out_Of_Bounds_Error.to_display_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Pretty prints an index out of bounds error.</p></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">Index_Out_Of_Bounds_Error</span> <span class="parameter">index length </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An error for when an index is out of bounds in a vector. </p><p>Arguments: <ul><li> index: The requested index in the vector.</li><li> length: The length of the vector.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Vector</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>The basic, immutable, vector type.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Vector</span> <span class="parameter">to_array </span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>The basic, immutable, vector type. </p><p>Arguments: <ul><li> to_array: The underlying array.</li></ul> </p><p>A vector allows to store an arbitrary number of elements, in linear memory. It is the recommended data structure for most applications. </p><div class="example"><div class="summary">Example</div> A vector containing the elements <code>1</code>, <code>2</code>, and <code>3</code>, in this order is: <div><div class="doc-code-container" id="SR2sijom"><pre><code>[1, 2, 3]</code><br /></pre></div><button id="d0ZbZzW4" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> A vector containing 50 elements, each being the number <code>42</code>, can be created by: <div><div class="doc-code-container" id="PSnGOvjQ"><pre><code>Vector.fill length=50 item=42</code><br /></pre></div><button id="jBi00rfY" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the number of elements stored in this vector. </p></div><div><div class="example"><div class="summary">Example</div> Checking the length of a vector. <div><div class="doc-code-container" id="zErxhVS7"><pre><code>[1, 2, 3, 4].length == 4</code><br /></pre></div><button id="MVKrpNTe" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">length</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">at</span> <span class="argument"></span></p></div></div><div><div class=""><p>Gets an element from the vector at a specified index (0-based). </p></div><div><p>Arguments: <ul><li> index: The location in the vector to get the element from.</li></ul> </p><div class="example"><div class="summary">Example</div> To get the second element of the vector <code>[1, 2, 3]</code>, use: <div><div class="doc-code-container" id="wFD8cpBc"><pre><code>[1, 2, 3].at 1</code><br /></pre></div><button id="2GA5z4SG" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">at</span> <span class="argument">index</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument"></span></p></div></div><div><div class=""><p>Combines all the elements of the vector, by iteratively applying the <div><div class="doc-code-container" id="kkuZY0mu"><pre><code>passed function with next elements of the vector.</code><br /></pre></div><button id="DufSz9a6" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - init: The initial value for the fold.      - function: A function taking two elements and combining them. </p><p>In general, the result of <div><div class="doc-code-container" id="Qr02KzuG"><pre><code>[l0, l1, ..., ln] . fold init f</code><br /></pre></div><button id="kvCZ1kkJ" class="doc-copy-btn flex">Copy</button></div> is the same as <div><div class="doc-code-container" id="a4KbyPlw"><pre><code>f (...(f (f init l0) l1)...) ln</code><br /></pre></div><button id="zPjUOKmJ" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> In the following example, we'll compute the sum of all elements of a vector: <div><div class="doc-code-container" id="ulg8mN9n"><pre><code>[0, 1, 2] . fold 0 (+)</code><br /></pre></div><button id="0Qvi41D6" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">fold</span> <span class="argument">init function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reduce</span> <span class="argument"></span></p></div></div><div><div class=""><p>Combines all the elements of a non-empty vector using a binary operation. </p></div><div><p>Arguments: <ul><li> function: A binary operation that takes two items and combines them.</li></ul> </p><p>If the vector is empty, it throws Nothing. </p><div class="example"><div class="summary">Example</div> In the following example, we'll compute the sum of all elements of a vector: <div><div class="doc-code-container" id="F8u3xuyq"><pre><code>[0, 1, 2] . reduce (+)</code><br /></pre></div><button id="zY99suav" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">reduce</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">exists</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether a predicate holds for at least one element of this vector. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Checking if any element of the list is larger than 3. <div><div class="doc-code-container" id="UFLWH7UD"><pre><code>[1,2,3,4,5].exists (&gt; 3)</code><br /></pre></div><button id="QX63RjWK" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">exists</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">find</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the first element of the vector that satisfies the predicate or <div><div class="doc-code-container" id="uynWq3gO"><pre><code>if no elements of the vector satisfy the predicate, it throws nothing.</code><br /></pre></div><button id="Obc6riNT" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - predicate: A function that takes a list element and returns a boolean <div><div class="doc-code-container" id="Bc0uyziD"><pre><code>value that says whether that value satisfies the conditions of the</code><br /><code>function.</code><br /></pre></div><button id="c4i8t2u0" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> Finding a first element of the list that is larger than 3. <div><div class="doc-code-container" id="hcMdiVi3"><pre><code>[1,2,3,4,5].find (&gt; 3)</code><br /></pre></div><button id="NBBgz6tX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">find</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">any</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether a predicate holds for at least one element of this vector. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Checking if any element of the list is larger than 3. <div><div class="doc-code-container" id="ILcXJn7b"><pre><code>[1,2,3,4,5].any (&gt; 3)</code><br /></pre></div><button id="ap4XfgFJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">any</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">all</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether a predicate holds for all elements in this vector. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Check if all elements in the vector are less than zero. <div><div class="doc-code-container" id="NjeK8UJN"><pre><code>[-1, 1, 5, 8].all (&lt; 0)</code><br /></pre></div><button id="Zd6VaH5r" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">all</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">contains</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether this vector contains a given value as an element. </p></div><div><p>Arguments: <ul><li> elem: The item to see if it exists in the vector.</li></ul> </p><div class="example"><div class="summary">Example</div> Checking if the vector contains the number 72. <div><div class="doc-code-container" id="RPL8Y4EI"><pre><code>[1, 383, 72, 301].contains 72</code><br /></pre></div><button id="J5gfBMsU" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">contains</span> <span class="argument">elem</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if this vector is empty. </p></div><div><div class="example"><div class="summary">Example</div> Checking for emptiness. <div><div class="doc-code-container" id="hdwnU9b2"><pre><code>[].is_empty == True</code><br /><code>[1].is_empty == False</code><br /></pre></div><button id="Tg5FEOkQ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">is_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if this vector is not empty. </p></div><div><div class="example"><div class="summary">Example</div> Checking for non-emptiness. <div><div class="doc-code-container" id="y7LkkpzS"><pre><code>[].not_empty == False</code><br /><code>[1].not_empty == True</code><br /></pre></div><button id="2TLOdBxY" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">not_empty</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">filter</span> <span class="argument"></span></p></div></div><div><div class=""><p>Selects all elements of this vector which satisfy a predicate. </p></div><div><p>Arguments: <ul><li> predicate: A function that takes a list element and returns a boolean
       value that says whether that value satisfies the conditions of the
       function.</li></ul> </p><div class="example"><div class="summary">Example</div> Selecting all elements that are greater than 3. <div><div class="doc-code-container" id="zv0bXOZP"><pre><code>[1, 2, 3, 4, 5].filter (&gt; 3)</code><br /></pre></div><button id="ONW4Cd4J" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">filter</span> <span class="argument">predicate</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the vector, returning the vector of <div><div class="doc-code-container" id="tbZ7sT3c"><pre><code>results.</code><br /></pre></div><button id="9gf0XwIX" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - function: A function that takes an element in the vector and returns <div><div class="doc-code-container" id="sIRXItD0"><pre><code>some transformation of that element.</code><br /></pre></div><button id="uxCb9FE2" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> In the following example, we add <code>1</code> to each element of the vector: <div><div class="doc-code-container" id="HMn513y6"><pre><code>[1, 2, 3] . map +1</code><br /></pre></div><button id="JLknE31N" class="doc-copy-btn flex">Copy</button></div> The result of running the code above is: <div><div class="doc-code-container" id="WyeZT8Ix"><pre><code>[2, 3, 4]</code><br /></pre></div><button id="f0GaFum5" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">flat_map</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the vector, returning the vector <div><div class="doc-code-container" id="PYHPfTSy"><pre><code>that contains all results concatenated.</code><br /></pre></div><button id="wy1chz7s" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - function: A function that takes an element in the vector, transforms <div><div class="doc-code-container" id="91Pq5xFi"><pre><code>it, and returns a vector.</code><br /></pre></div><button id="Et8tpwHM" class="doc-copy-btn flex">Copy</button></div> </p><div class="example"><div class="summary">Example</div> In the following example, we replace each number <code>n</code> with itself repeated <code>n</code> times: <div><div class="doc-code-container" id="WXfiZTse"><pre><code>[0, 1, 2] . flat_map (n -&gt; Vector.fill n n)</code><br /></pre></div><button id="a5UZ2oOZ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">flat_map</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">map_with_index</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the vector, returning the vector <div><div class="doc-code-container" id="idWkgSUs"><pre><code>of results.</code><br /></pre></div><button id="cUXpQOKo" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - function: A function that takes an index and an item and calculates a <div><div class="doc-code-container" id="7yS35YVt"><pre><code>new value for at that index.</code><br /></pre></div><button id="MuCTgRkK" class="doc-copy-btn flex">Copy</button></div> </p><p>The function is called with both the element index as well as the element itself. </p><div class="example"><div class="summary">Example</div> Summing numbers with their indices in a vector. <div><div class="doc-code-container" id="8Sy586m7"><pre><code>[1, 2, 3].map_with_index (+)</code><br /></pre></div><button id="zRi6OKaX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">map_with_index</span> <span class="argument">function</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">each</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies a function to each element of the vector. </p></div><div><p>Arguments: <ul><li> function: A function to apply to each element of the vector.</li></ul> </p><p>Unlike <code>map</code>, this method does not return the individual results, therefore it is only useful for side-effecting computations. </p><div class="example"><div class="summary">Example</div> In the following example, we're printing each element of the vector to the standard output: <div><div class="doc-code-container" id="hzVDY8Ji"><pre><code>[1, 2, 3, 4, 5] . each IO.println</code><br /></pre></div><button id="Ztqlbund" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">each</span> <span class="argument">f</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Reverses the vector, returning a vector with the same elements, but in <div><div class="doc-code-container" id="qhLFu105"><pre><code>the opposite order.</code><br /></pre></div><button id="sGd0iGkE" class="doc-copy-btn flex">Copy</button></div> </p></div><div><div class="example"><div class="summary">Example</div> Reversing a two-element vector. <div><div class="doc-code-container" id="wWH5HNca"><pre><code>[1, 2].reverse</code><br /></pre></div><button id="Jglmn3Uz" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">reverse</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div class=""><p>Generates a human-readable text representation of the vector. </p></div><div><div class="example"><div class="summary">Example</div> Converting a vector of numbers to text. <div><div class="doc-code-container" id="JcVvIxDu"><pre><code>[1, 2, 3].to_text == &quot;[1, 2, 3]&quot;</code><br /></pre></div><button id="W8XY4o4b" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">to_text</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">==</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether this vector is equal to <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The vector to compare this vector against.</li></ul> </p><p>Two vectors are considered equal, when they have the same length and their items are pairwise equal. </p><div class="example"><div class="summary">Example</div> Comparing two vectors for equality (this case is false). <div><div class="doc-code-container" id="0x1XHhYs"><pre><code>[1, 2, 3] == [2, 3, 4]</code><br /></pre></div><button id="XQACxMIe" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">==</span> <span class="argument">that</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">+</span> <span class="argument"></span></p></div></div><div><div class=""><p>Concatenates two vectors, resulting in a new vector, containing all the <div><div class="doc-code-container" id="FWSjUpqh"><pre><code>elements of `this`, followed by all the elements of `that`.</code><br /></pre></div><button id="QJtEAivW" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - that: The vector to concatenate to the end of `this`. </p><div class="example"><div class="summary">Example</div> Concatenating two single-element vectors. <div><div class="doc-code-container" id="46H8yuva"><pre><code>[1] + [2] == [1, 2]</code><br /></pre></div><button id="MvTlPsHg" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">+</span> <span class="argument">that</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">prepend</span> <span class="argument"></span></p></div></div><div><div class=""><p>Add <code>element</code> to the beginning of <code>this</code> vector. </p></div><div><p>Arguments: <ul><li> `element`: An element to add to this vector.</li></ul> </p><div class="example"><div class="summary">Example</div> Add one element in front: <div><div class="doc-code-container" id="ZVWXwBBI"><pre><code>[2, 3].prepend 1 == [1, 2, 3]</code><br /></pre></div><button id="MnJlGxqn" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">prepend</span> <span class="argument">element</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">append</span> <span class="argument"></span></p></div></div><div><div class=""><p>Add <code>element</code> to the end of <code>this</code> vector. </p></div><div><p>Arguments: <ul><li> `element`: An element to add to this vector.</li></ul> </p><div class="example"><div class="summary">Example</div> Add one element to the end: <div><div class="doc-code-container" id="GInTDbPJ"><pre><code>[1, 2].append 3 == [1, 2, 3]</code><br /></pre></div><button id="Rd3DNbq7" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">append</span> <span class="argument">element</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">join</span> <span class="argument"></span></p></div></div><div><div class=""><p>When <code>this</code> is a vector of text values, concatenates all the values by <div><div class="doc-code-container" id="6woU4T7X"><pre><code>interspersing them with `separator`.</code><br /></pre></div><button id="NquI4FTo" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - separator: The text to use to join the textual elements of the vector. </p><div class="example"><div class="summary">Example</div> The following code returns &quot;foo, bar, baz&quot; <div><div class="doc-code-container" id="ijQWnYtQ"><pre><code>[&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;].join &quot;, &quot;</code><br /></pre></div><button id="rNDeL7Ga" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">join</span> <span class="argument">separator</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_start</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector with the first <code>count</code> elements in <code>this</code> removed. </p></div><div><p>Arguments: <ul><li> count: The number of elements to drop from the start of `this`.</li></ul> </p><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[2, 3, 4, 5]
           [1, 2, 3, 4, 5].drop_start 1</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">drop_start</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">drop_end</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector with the last <code>count</code> elements in <code>this</code> removed. </p></div><div><p>Arguments: <ul><li> count: The number of elements to drop from the end of `this`.</li></ul> </p><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[1, 2, 3]
           [1, 2, 3, 4, 5].drop_end 2</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">drop_end</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector, consisting of the first <code>count</code> elements on the <div><div class="doc-code-container" id="8uooBn9Q"><pre><code>left of `this`.</code><br /></pre></div><button id="GOvesm32" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - count: The number of elements to take from the start of `this`. </p><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[1, 2]
           [1, 2, 3, 4, 5].take_start 2</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">take_start</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">take_end</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector, consisting of the last <code>count</code> elements on the <div><div class="doc-code-container" id="rLUKdazR"><pre><code>right of `this`.</code><br /></pre></div><button id="yZJkrQwl" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - count: The number of elements to take from the end of `this`. </p><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[3, 4, 5]
           [1, 2, 3, 4, 5].take_end 3</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">take_end</span> <span class="argument">count</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">zip</span> <span class="argument"></span></p></div></div><div><div class=""><p>Performs a pair-wise operation passed in <code>function</code> on consecutive <div><div class="doc-code-container" id="OyKThfXn"><pre><code>elements of `this` and `that`.</code><br /></pre></div><button id="52Tvg16n" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - that: The vector to zip with `this`.      - function: The function used to combine pairwise elements of `this` and <div><div class="doc-code-container" id="6PK8sZ2t"><pre><code>`that`.</code><br /></pre></div><button id="klEmNoWi" class="doc-copy-btn flex">Copy</button></div> </p><p>The result of this function is a vector of length being the shorter of <code>this</code> and <code>that</code>, containing results of calling <code>function</code>. </p><div class="example"><div class="summary">Example</div> To pairwise-sum two vectors: <div><div class="doc-code-container" id="PEdJTOw5"><pre><code>[1, 2, 3].zip [4, 5, 6] (+) == [5, 7, 9]</code><br /></pre></div><button id="4ohNw2KX" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> When the <code>function</code> is not provided, it defaults to creating a pair of both elements: <div><div class="doc-code-container" id="dp2DojBD"><pre><code>[1, 2, 3].zip [4, 5, 6] == [[1, 4], [2, 5], [3, 6]]</code><br /></pre></div><button id="H9BKUUPr" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">zip</span> <span class="argument">that function=[_, _]</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">pad</span> <span class="argument"></span></p></div></div><div><div class=""><p>Extend <code>this</code> vector to the length of <code>n</code> appending elements <code>elem</code> to <div><div class="doc-code-container" id="oarKXI1U"><pre><code>the end.</code><br /></pre></div><button id="pvzYHtb2" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Arguments:      - n: The length to pad `this` out to.      - elem: The element to fill the new padded slots with. </p><p>If the new length <code>n</code> is less than existing length, <code>this</code> vector is returned. </p><div class="example"><div class="summary">Example</div> Extending vector to the length of 5 returns <code>[1, 2, 3, 0, 0]</code> <div><div class="doc-code-container" id="RdUc9Ceu"><pre><code>[1, 2, 3].pad 5 0</code><br /></pre></div><button id="UbPeTqgY" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Extending vector to the length of 5 returns <code>[1, 2, 3, 4, 5]</code> <div><div class="doc-code-container" id="4EmIsXV9"><pre><code>[1, 2, 3, 4, 5].pad 5 0</code><br /></pre></div><button id="YhaYjQYF" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">pad</span> <span class="argument">n elem</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Vector to JSON conversion. </p></div><div><div class="example"><div class="summary">Example</div> Convert a vector of numbers to JSON. <div><div class="doc-code-container" id="nRhlaoSy"><pre><code>[1, 2, 3].to_json</code><br /></pre></div><button id="3sb5qXws" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">to_json</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the first element from the vector, or an error <code>Nothing</code> if the <div><div class="doc-code-container" id="bUWStqRw"><pre><code>vector is empty.</code><br /></pre></div><button id="r3Rcr1Am" class="doc-copy-btn flex">Copy</button></div> </p></div><div><div class="example"><div class="summary">Example</div> The following code returns 1. <div><div class="doc-code-container" id="gTGLd6Gi"><pre><code>[1, 2, 3, 4].head</code><br /></pre></div><button id="tuDnONgV" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">tail</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get all elements in the vector except the first. </p></div><div><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[2, 3, 4].
           [1, 2, 3, 4].tail</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">tail</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">init</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the all elements in the vector except the last. </p></div><div><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[1, 2, 3].
           [1, 2, 3, 4].init</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">init</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the last element of the vector, or an error <code>Nothing</code> if the vector <div><div class="doc-code-container" id="lmriTsb5"><pre><code>is empty.</code><br /></pre></div><button id="R2D6SzYR" class="doc-copy-btn flex">Copy</button></div> </p></div><div><div class="example"><div class="summary">Example</div> The following code returns 4. <div><div class="doc-code-container" id="qhGZdeQh"><pre><code>[1, 2, 3, 4].last</code><br /></pre></div><button id="MhCkMgmz" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">last</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the first element from the vector, or an error <code>Nothing</code> if the <div><div class="doc-code-container" id="WxcwxWIM"><pre><code>vector is empty.</code><br /></pre></div><button id="IRdOMuHF" class="doc-copy-btn flex">Copy</button></div> </p></div><div><div class="example"><div class="summary">Example</div> The following code returns 1. <div><div class="doc-code-container" id="cCCT4aRm"><pre><code>[1, 2, 3, 4].first</code><br /></pre></div><button id="B2zwxwFJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">first</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">second</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get the second element from the vector, or an error <code>Nothing</code> if the <div><div class="doc-code-container" id="5hJPrZLR"><pre><code>vector doesn't have a second element.</code><br /></pre></div><button id="9A5OQMhG" class="doc-copy-btn flex">Copy</button></div> </p></div><div><p>Useful when tuples are implemented as vectors. </p><div class="example"><div class="summary">Example</div> The following code returns 2. <div><div class="doc-code-container" id="TpIo4MUi"><pre><code>[1, 2, 3, 4].second</code><br /></pre></div><button id="OncpsZMX" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">second</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">rest</span> <span class="argument"></span></p></div></div><div><div class=""><p>Get all elements in the vector except the first. </p></div><div><div class="example"><div class="summary">Example</div> The following code returns <div class="InvalidLink">[2, 3, 4].
           [1, 2, 3, 4].rest

     &gt; Example
       Empty vectors return `Nothing`.
           [].rest == Nothing</div></div></div></div></div></div><div><div class="method flex"><p><span class="name">rest</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument"></span></p></div></div><div><div class=""><p>Sort the Vector. </p></div><div><p>Arguments: <ul><li> on: A projection from the element type to the value of that element
       being sorted on.</li><li> by: A function that compares the result of applying `on` to two
       elements, returning an Ordering to compare them.</li><li> order: The order in which the vector elements are sorted.</li></ul> </p><p>By default, elements are sorted in ascending order, using the comparator <code>compare_to</code>. A custom comparator may be passed to the sort function. </p><p>This is a stable sort, meaning that items that compare the same will not have their order changed by the sorting process. </p><div class="important"><div class="summary">Computational Complexity</div> The complexities for this sort are: <ul><li> *Worst</li><li> *Best</li><li> *Average Time:* `O(n * log n)`</li><li> *Worst</li></ul> </div><div class="info"><div class="summary">Implementation Note</div> The sort implementation is based upon an adaptive, iterative mergesort that requires far fewer than <code>n * log(n)</code> comparisons when the vector is partially sorted. When the vector is randomly ordered, the performance is equivalent to a standard mergesort. </div><p>It takes equal advantage of ascending and descending runs in the array, making it much simpler to merge two or more sorted arrays: simply concatenate them and sort. </p><div class="example"><div class="summary">Example</div> Sorting a vector of numbers. <div><div class="doc-code-container" id="UZiqTVya"><pre><code>[5, 2, 3, 45, 15].sort == [2, 3, 5, 15, 45]</code><br /></pre></div><button id="yOnLfyUB" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Sorting a vector of <code>Pair</code>s on the first element, descending. <div><div class="doc-code-container" id="TO6dbZa6"><pre><code>[Pair 1 2, Pair -1 8].sort (_.first) (order = Sort_Order.Descending)</code><br /></pre></div><button id="iFQTrv3i" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div><div class="method flex"><p><span class="name">sort</span> <span class="argument">(on = x -&gt; x) (by = (_.compare_to _)) (order = Sort_Order.Ascending)</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">to_default_visualization_data</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Transform the vector into text for displaying as part of its default visualization.</p></div></div></div></div><div><div class="method flex"><p><span class="name">to_default_visualization_data</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">from_array</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts a polyglot value representing an array into a vector. </p></div><div><p>Arguments: <ul><li> arr: The polyglot array value to wrap into a vector.</li></ul> </p><p>This is useful when wrapping polyglot APIs for further use in Enso. </p><p>A vector allows to store an arbitrary number of elements in linear memory. It is the recommended data structure for most applications. </p><div class="important"><div class="summary">Value Copying</div> As Enso vectors implement immutable semantics, this constructor function makes a copy of each value in the argument array. </div><p>If this didn't happen then it would be possible for the underlyinf array to be mutated under the hood, and sneak mutability into our immutable data.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new_builder</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector builder instance. </p></div><div><p>A vector builder is a mutable data structure, that allows for gathering a number of elements and then converting them into a vector. This is particularly useful when the number of elements is not known upfront. </p><p>A vector allows to store an arbitrary number of elements in linear memory. It is the recommended data structure for most applications. </p><div class="example"><div class="summary">Example</div> In the following example we'll read items from the standard input, until the string &quot;end&quot; is entered by the user and then return a vector containing all items. <div><div class="doc-code-container" id="Ab67Jxvu"><pre><code>from Standard.Base import all</code><br /></pre></div><button id="xedTdVe8" class="doc-copy-btn flex">Copy</button></div> </div><p>main = <div><div class="doc-code-container" id="BgMF4vXs"><pre><code>builder = Vector.new_builder</code><br /><code>do_read =</code><br /><code>    item = IO.readln</code><br /><code>    if item == &quot;end&quot; then Nothing else</code><br /><code>        builder.append item</code><br /><code>        do_read</code><br /><code>do_read</code><br /><code>vec = builder.to_vector</code><br /><code>IO.println vec</code><br /></pre></div><button id="tEi5qC4v" class="doc-copy-btn flex">Copy</button></div></p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">fill</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector of the given length, filling the elements with the provided constant. </p></div><div><p>Arguments: <ul><li> length: The length of the vector (&gt;= 0).</li><li> constructor: A value fo be placed into each element of the vector.</li></ul> </p><p>A vector allows to store an arbitrary number of elements in linear memory. It is the recommended data structure for most applications. </p><div class="example"><div class="summary">Example</div> A vector containing 50 elements, each being the number <code>42</code>, can be created by: <div><div class="doc-code-container" id="PiV4BBDH"><pre><code>Vector.fill length=50 item=42</code><br /></pre></div><button id="G69JYR4o" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new vector of the given length, initializing elements using the provided constructor function. </p></div><div><p>Arguments: <ul><li> length: The length of the vector (&gt;= 0).</li><li> constructor: A function taking the index in the vector and returning an
   item for that index in the vector.</li></ul> </p><p>A vector allows to store an arbitrary number of elements in linear memory. It is the recommended data structure for most applications. </p><div class="example"><div class="summary">Example</div> To create a vector containing the numbers 1 through 50: <div><div class="doc-code-container" id="Jx5U4QL8"><pre><code>Vector.new 50 (ix -&gt; ix + 1)</code><br /></pre></div><button id="gsFEvWJZ" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> To create a copy of the given vector (<code>my_vec</code>): <div><div class="doc-code-container" id="Ahp9ZnjV"><pre><code>Vector.new my_vec.length (ix -&gt; my_vec.at ix)</code><br /></pre></div><button id="nU8y7nuG" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div></div></div></div><div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div></div></div></div></div></div>
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
