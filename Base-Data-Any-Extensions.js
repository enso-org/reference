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
            <input type="checkbox" id="Base-Data-Any" checked="True" />
            <label for="Base-Data-Any">
              <a href="">Any</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Any-Extensions" className="font-bold">Extensions</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.to_default_visualization_data</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Returns a Text used to display this value in the IDE. </p><p>The particular representation is left unspecified and subject to change in the future. The current implementation uses JSON serialization as the default. </p><p>Types defining their own versions of this method should ensure that the result is reasonably small and that the operation is quick to compute. </p><div class="example"><div class="summary">Example</div> Converting the number <code>2</code> into visualization data. <div><div class="doc-code-container" id="MFvmD26o"><pre><code>2.to_default_visualization_data</code><br /></pre></div><button id="Hkvn4jsn" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&gt;&gt;</span> <span class="argument"></span></p></div></div><div><div class=""><p>Composes two functions together in the forward direction, for <code>f &gt;&gt; g</code> creating the function composition <code>g ∘ f</code> (equivalent to <code>x -&gt; g (f (x))</code>). </p></div><div><p>Arguments: <ul><li> that: The function to compose with `this`.</li></ul> </p><div class="example"><div class="summary">Example</div> Add one and then multiply by two as a function applied to 2. <div><div class="doc-code-container" id="Ng1AlAP4"><pre><code>(+1 &gt;&gt; *2) 2</code><br /></pre></div><button id="8LAo6dR2" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&lt;&lt;</span> <span class="argument"></span></p></div></div><div><div class=""><p>Composes two functions together, for <code>f &lt;&lt; g</code> creating the function composition <code>f ∘ g</code> (equivalent to <code>x -&gt; f (g x)</code>). </p></div><div><p>Arguments: <ul><li> that: The function to compose with `this`.</li></ul> </p><div class="example"><div class="summary">Example</div> Multiply by 2 and then add 1 as a function applied to 2. <div><div class="doc-code-container" id="kLAVxFbb"><pre><code>(+1 &lt;&lt; *2) 2</code><br /></pre></div><button id="YP2LgGCB" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.|&gt;</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies the function on the right hand side to the argument on the left. </p></div><div><p>Arguments <ul><li> function: The function to apply to `this`.</li></ul> </p><div class="info"><div class="summary"><code>|&gt;</code> or </div> The eagle-eyed reader will notice that the operator dot (<code>.</code>) is very similar to the operator <code>|&gt;</code>. In Enso, with the variable precedence of operators, this makes perfect sense. In general, we recommend using <code>.</code>. However, there are some contexts where variable precedence might be unclear or confusing, or where the function being applied is not a method. In these contexts we recommend using <code>|&gt;</code>. </div><div class="example"><div class="summary">Example</div> Applying multiple functions in a pipeline to compute a number and transform it to text. <div><div class="doc-code-container" id="3HtLjUTa"><pre><code>1 |&gt; (* 2) |&gt; (/ 100) |&gt; .to_text</code><br /></pre></div><button id="SXDMAWyz" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&lt;|</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies the function <code>this</code> to the provided argument. </p></div><div><p>Arguments: <ul><li> argument: The argument to apply `this` to.</li></ul> </p><div class="info"><div class="summary">Piping Blocks to Functions</div> This construction is particularly useful for passing a block as an argument to a function. This means that you can compute more sophisticated values in-line, as shown in the example below. </div><div class="example"><div class="summary">Example</div> Applying a function to a block. <div><div class="doc-code-container" id="OBKY5bTy"><pre><code>(x -&gt; x + 1) &lt;|</code><br /><code>   y = 1 ^ 3</code><br /><code>   3 + y</code><br /></pre></div><button id="gklVeXde" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.is_error</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is an error.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.map_error</span> <span class="argument"></span></p></div></div><div><div class=""><p>Transforms an error. </p></div><div><p>Arguments: <ul><li> f: The function used to transform the error.</li></ul> </p><p>If <code>this</code> is a non-error value it is returned unchanged. However, if <code>this</code> is an error, the error is transformed using the provided function. </p><div class="example"><div class="summary">Example</div> Wrapping an error value. <div><div class="doc-code-container" id="0e5QLpr6"><pre><code>map.get &quot;x&quot; . map_error (_ -&gt; ElementNotFound &quot;x&quot;)</code><br /></pre></div><button id="FiC0jtrp" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.catch</span> <span class="argument"></span></p></div></div><div><div class=""><p>Executes the provided handler on a dataflow error, or returns a non-error value unchanged. </p></div><div><p>Arguments: <ul><li> handler: The function to call on this if it is an error value. By default
   this is identity.</li></ul> </p><div class="example"><div class="summary">Example</div> Catching an erroneous value and getting the length of its message. <div><div class="doc-code-container" id="nbiG0o68"><pre><code>(Time.Time_Error &quot;Message&quot;).catch (err -&gt; err.error_message.length)</code><br /></pre></div><button id="c1Nc3KWQ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.is_nothing</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if the type is an instance of <code>Nothing</code>. </p></div><div><p>Nothing in Enso is used as a universal value to indicate the lack of presence of a value. This function is primarily useful in the IDE. </p><div class="example"><div class="summary">Example</div> Checking if the value 1 is nothing. <div><div class="doc-code-container" id="h26AJLe5"><pre><code>1.is_nothing</code><br /></pre></div><button id="nfWt1EY4" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&lt;=</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is less than or equal to <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The value to compare `this` against.</li></ul> </p><p>To have <code>&lt;=</code> defined, a type must define both <code>&lt;</code> and <code>==</code>. </p><div class="important"><div class="summary">Implementing Less Than or Equal</div> While it is often possible to implement a more efficient version of this operation for complex types, care must be taken to ensure that your implementation is semantically equivalent to the disjunction of the less than than and equal to operations. </div><div class="example"><div class="summary">Example</div> Checking if 1 is less than or equal to 10. <div><div class="doc-code-container" id="qmFEEfAP"><pre><code>1 &lt;= 10</code><br /></pre></div><button id="2U5KVrro" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&lt;</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is less than <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The value to compare `this` against.</li></ul> </p><p>To have <code>&lt;</code> defined, a type must define <code>compare_to</code>, returning an Ordering. </p><div class="important"><div class="summary">Implementing Less Than</div> Many types can admit a definition of less than that is more efficient than the generic one given here. When implementing this for your own types please ensure that it is semantically equivalent to using <code>.compare_to</code>. </div><div class="example"><div class="summary">Example</div> Checking if 1 is less than 10. <div><div class="doc-code-container" id="QmXyQ1yJ"><pre><code>1 &lt; 10</code><br /></pre></div><button id="axyZc2Fm" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&gt;=</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is greater than or equal to <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The value to compare `this` against.</li></ul> </p><p>To have <code>&gt;=</code> defined, a type must define both <code>&gt;</code> and <code>==</code>. </p><div class="important"><div class="summary">Implementing Greater Than or Equal</div> While it is often possible to implement a more efficient version of this operation for complex types, care must be taken to ensure that your implementation is semantically equivalent to the disjunction of the greater than and equal to operations. </div><div class="example"><div class="summary">Example</div> Checking if 1 is greater than or equal to 10. <div><div class="doc-code-container" id="XN1nC1YQ"><pre><code>1 &gt;= 10</code><br /></pre></div><button id="jy1wMAe4" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.&gt;</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is greater than <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The value to compare `this` against.</li></ul> </p><p>To have <code>&gt;</code> defined, a type must define <code>compare_to</code>, returning an Ordering. </p><div class="important"><div class="summary">Implementing Greater Than</div> Many types can admit a definition of greater than that is more efficient than the generic one given here. When implementing this for your own types please ensure that it is semantically equivalent to using <code>.compare_to</code>. </div><div class="example"><div class="summary">Example</div> Checking if 1 is greater than 10. <div><div class="doc-code-container" id="v6bhlOGv"><pre><code>1 &gt; 10</code><br /></pre></div><button id="hU3PNOTT" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.!=</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is not equal to <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The object to compare `this` against.</li></ul> </p><div class="important"><div class="summary">Implementing Your Own Inequality</div> We recommend that you do not implement your own inequality, instead relying on the default definition given here. If you do, please ensure that you satisfy universal equality, as described in the documentation for <code>Any.==</code>. </div><div class="example"><div class="summary">Example</div> Checking if 1 is not equal to 2. <div><div class="doc-code-container" id="rkesFUD9"><pre><code>1 != 2</code><br /></pre></div><button id="ueD7KVsc" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Any.==</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks if <code>this</code> is equal to <code>that.</code> </p></div><div><p>Arguments: <ul><li> that: The object to compare `this` with.</li></ul> </p><p>Two values are considered to be equal in Enso when they obey the following recursive properties:  - At each level, they have the same structure.  - The value of each field in `this` is equal (by this definition) to the <div><div class="doc-code-container" id="rdRlXzjv"><pre><code>corresponding field in `that`.</code><br /></pre></div><button id="51VjlAzU" class="doc-copy-btn flex">Copy</button></div> </p><div class="important"><div class="summary">Implementing Your Own Equality</div> Equality in Enso is defined to allow comparison of any two values (universal equality), no matter if they are not directly comparable. When implementing equality for your own types, keep in mind that it needs to work with any Enso value as the <code>that</code> argument. </div><div class="info"><div class="summary">Generic Equality and Performance</div> While the generic equality provided here will work for <i>all</i> values in Enso, its performance may often be suboptimal. Many types can implement their own equality operations that will be more efficient than these. </div><div class="example"><div class="summary">Example</div> Checking if 1 is equal to 2. <div><div class="doc-code-container" id="mDDN4PIM"><pre><code>1 == 2</code><br /></pre></div><button id="TQCp6fHr" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div><div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div>
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
