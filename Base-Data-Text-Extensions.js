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
            <input type="checkbox" id="Base-Data-Text" checked="True" />
            <label for="Base-Data-Text">
              <a href="">Text</a>
            </label>
            <ul>
              <li>
                <a href="Base-Data-Text-Extensions" className="font-bold">Extensions</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.to_upper_case</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts each character in <code>this</code> to upper case. </p></div><div><p>Arguments: <ul><li> locale: specifies the locale for charater case mapping. Defaults to
   `Locale.default`.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Converting a text to upper case in the default locale: <div><div class="doc-code-container" id="6hYllWrt"><pre><code>&quot;My TeXt!&quot;.to_lower_case == &quot;my text!&quot;</code><br /></pre></div><button id="QNKvqUer" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Converting a text to upper case in a specified locale: <div><div class="doc-code-container" id="CT8D5USz"><pre><code>&quot;i&quot;.to_upper_case (Locale.new &quot;tr&quot;) . should_equal &quot;İ&quot;</code><br /></pre></div><button id="6LnwNwkm" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.to_lower_case</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts each character in <code>this</code> to lower case. </p></div><div><p>Arguments: <ul><li> locale: specifies the locale for charater case mapping. Defaults to the
   `Locale.default` locale.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Converting a text to lower case in the default locale: <div><div class="doc-code-container" id="x6pFR9eQ"><pre><code>&quot;My TeXt!&quot;.to_lower_case == &quot;my text!&quot;</code><br /></pre></div><button id="kC6Tr49B" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Converting a text to lower case in a specified locale: <div><div class="doc-code-container" id="OgsG4z3G"><pre><code>&quot;I&quot;.to_lower_case (Locale.new &quot;tr&quot;) == &quot;ı&quot;</code><br /></pre></div><button id="gnJgxOK9" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.take_last</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new text by selecting the last <code>count</code> characters of <code>this</code>, returning <code>this</code> if <code>count</code> is greater than or equal to the length of <code>this</code>. </p></div><div><p>Arguments: <ul><li> count: The number of characters to take from the end of `this`.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Make a new text from the last two characters of &quot;boo&quot;. <div><div class="doc-code-container" id="IPSTT0YR"><pre><code>&quot;boo&quot;.take_last 2</code><br /></pre></div><button id="a0pArVLJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.take_first</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new text by selecting the first <code>count</code> characters of <code>this</code>, returning <code>this</code> if <code>count</code> is greater than or equal to the length of <code>this</code>. </p></div><div><p>Arguments: <ul><li> count: The number of characters to take from the start of `this`.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Make a new text from the first two characters of &quot;boo&quot;. <div><div class="doc-code-container" id="u2RbYPb8"><pre><code>&quot;boo&quot;.take_first 2</code><br /></pre></div><button id="CCIY9sbr" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.drop_last</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new text by removing the last <code>count</code> characters of <code>this</code>, returning an empty text if <code>count</code> is greater than or equal to the length of <code>this</code>. </p></div><div><p>Arguments: <ul><li> count: The number of characters to remove from the end of `this`.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Removing the last three characters from the text &quot;ABBA&quot;. <div><div class="doc-code-container" id="vwovbgOI"><pre><code>&quot;ABBA&quot;.drop_last 3</code><br /></pre></div><button id="dQ1YeCrx" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.drop_first</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new text by removing the first <code>count</code> characters of <code>this</code>, returning an empty text if <code>count</code> is greater than or equal to the length of <code>this</code>. </p></div><div><p>Arguments: <ul><li> count: The number of characters to remove from the start of `this`.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Removing the first three characters from the text &quot;ABBA&quot;. <div><div class="doc-code-container" id="lHaLohZt"><pre><code>&quot;ABBA&quot;.drop_first 3</code><br /></pre></div><button id="oezCs219" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.repeat</span> <span class="argument"></span></p></div></div><div><div class=""><p>Takes a non-negative integer and returns a new text, consisting of <code>count</code> concatenated copies of <code>this</code>. </p></div><div><p>Arguments: <ul><li> count: The number of times that the text `this` should be repeated to make
   the new text.</li></ul> </p><div class="example"><div class="summary">Example</div> Repeat the string &quot;ABBA&quot; five times. <div><div class="doc-code-container" id="mBM7bAMi"><pre><code>&quot;ABBA&quot;.repeat 5</code><br /></pre></div><button id="hXVsLNfY" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.to_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Text to JSON conversion. </p></div><div><div class="example"><div class="summary">Example</div> Convert the text &quot;cześć&quot; to JSON. <div><div class="doc-code-container" id="NkMMMBHQ"><pre><code>&quot;cześć&quot;.to_json</code><br /></pre></div><button id="pQFcUa9v" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.replace</span> <span class="argument"></span></p></div></div><div><div class=""><p>Replaces each occurrences of <code>old_sequence</code> within <code>this</code> with <code>new_sequence</code>. </p></div><div><p>Arguments: <ul><li> old_sequence: The text to search for in `this`.</li><li> new_sequence: The text to replace any occurrence of `old_sequence` with.</li></ul> </p><p>The replacement from the beginning of the text, as shown in the example below. </p><div class="example"><div class="summary">Example</div> Replace letters in the text &quot;aaa&quot;. <div><div class="doc-code-container" id="L5Y3GVob"><pre><code>'aaa'.replace 'aa' 'b' == 'ba'</code><br /></pre></div><button id="U5ZOUYo5" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.contains</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether <code>this</code> contains <code>sequence</code> as its substring. </p></div><div><p>Arguments: <ul><li> sequence: The text to see if it is contained in `this`.</li></ul> </p><div class="important"><div class="summary">Unicode Equality</div> The definition of equality includes Unicode canonicalization. I.e. two texts are equal if they are identical after canonical decomposition. This ensures that different ways of expressing the same character in the underlying binary representation are considered equal. </div><div class="example"><div class="summary">Example</div> See if the text &quot;Hello&quot; contains the text &quot;ell&quot;. <div><div class="doc-code-container" id="NCUpYFOj"><pre><code>&quot;Hello&quot;.contains &quot;ell&quot;</code><br /></pre></div><button id="x2HxCmUD" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.ends_with</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether <code>this</code> ends with <code>suffix</code>. </p></div><div><p>Arguments: <ul><li> suffix: The suffix to see if `this` ends with.</li></ul> </p><div class="important"><div class="summary">Unicode Equality</div> The definition of equality includes Unicode canonicalization. I.e. two texts are equal if they are identical after canonical decomposition. This ensures that different ways of expressing the same character in the underlying binary representation are considered equal. </div><div class="example"><div class="summary">Example</div> See if the text &quot;Hello&quot; ends with the suffix &quot;low&quot;. <div><div class="doc-code-container" id="t0rC2vlz"><pre><code>&quot;Hello&quot;.ends_with &quot;low&quot;</code><br /></pre></div><button id="xi6niz0o" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.starts_with</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether <code>this</code> starts with <code>prefix</code>. </p></div><div><p>Arguments: <ul><li> prefix: The prefix to see if `this` starts with.</li></ul> </p><div class="important"><div class="summary">Unicode Equality</div> The definition of equality includes Unicode canonicalization. I.e. two texts are equal if they are identical after canonical decomposition. This ensures that different ways of expressing the same character in the underlying binary representation are considered equal. </div><div class="example"><div class="summary">Example</div> See if the text &quot;Hello&quot; starts with the prefix &quot;hi&quot;. <div><div class="doc-code-container" id="dw8k6Nmo"><pre><code>&quot;Hello&quot;.starts_with &quot;hi&quot;</code><br /></pre></div><button id="WjpecqQ5" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.from_codepoints</span> <span class="argument"></span></p></div></div><div><div class=""><p>Takes an array of numbers and returns the text resulting from interpreting it as a sequence of Unicode codepoints. </p></div><div><p>This is useful for low-level operations, such as binary data encoding and decoding. </p><div class="example"><div class="summary">Example</div> Converting a vector of codepoints back into a text. <div><div class="doc-code-container" id="scLxgO2D"><pre><code>Text.from_codepoints [129318, 127996, 8205, 9794, 65039]</code><br /></pre></div><button id="lEHVO7Xj" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.codepoints</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a vector containing integers representing the Unicode codepoints of the input text. </p></div><div><p>This is useful for low-level operations, such as binary data encoding and decoding. </p><div class="example"><div class="summary">Example</div> Get the codepoints of the text &quot;Hello&quot;. <div><div class="doc-code-container" id="XZbaIej3"><pre><code>&quot;Hello&quot;.codepoints</code><br /></pre></div><button id="TcVvZ8B3" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.from_utf_8</span> <span class="argument"></span></p></div></div><div><div class=""><p>Takes a vector of bytes and returns Text resulting from decoding it as UTF-8. </p></div><div><p>Arguments: <ul><li> bytes: The vector of UTF</li></ul> </p><p>This is useful for low-level operations, such as binary data encoding and decoding. </p><div class="example"><div class="summary">Example</div> Decoding the bytes to get a text. <div><div class="doc-code-container" id="36mfaJJ7"><pre><code>Text.from_utf_8 [-32, -92, -107, -32, -91, -115, -32, -92, -73, -32, -92, -65]</code><br /></pre></div><button id="iTkC416o" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.utf_8</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a vector containing bytes representing the UTF-8 encoding of the input text. </p></div><div><p>This is useful for low-level operations, such as binary data encoding and decoding. </p><div class="example"><div class="summary">Example</div> Get the UTF-8 bytes of the text &quot;Hello&quot;. <div><div class="doc-code-container" id="BEp00dSR"><pre><code>&quot;Hello&quot;.utf_8</code><br /></pre></div><button id="De2fPJZL" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.not_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Check if <code>this</code> is not empty. </p></div><div><div class="info"><div class="summary">Text is considered to be not empty when its length is greater than zero.</div> </div><div class="example"><div class="summary">Example</div> Check if the text &quot;aaa&quot; is not empty. <div><div class="doc-code-container" id="DrUQ7NcA"><pre><code>&quot;aaa&quot;.not_empty</code><br /></pre></div><button id="lU26n2Kc" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.is_empty</span> <span class="argument"></span></p></div></div><div><div class=""><p>Check if <code>this</code> is empty. </p></div><div><div class="info"><div class="summary">Text is considered to be empty when its length is zero.</div> </div><div class="example"><div class="summary">Example</div> Check if the text &quot;aaa&quot; is empty. <div><div class="doc-code-container" id="PYIayA7d"><pre><code>&quot;aaa&quot;.is_empty</code><br /></pre></div><button id="UPwFMYaa" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.compare_to</span> <span class="argument"></span></p></div></div><div><div class=""><p>Compare two texts to discover their ordering. </p></div><div><p>Arguments: <ul><li> that: The text to order `this` with respect to.</li></ul> </p><div class="example"><div class="summary">Example</div> Checking how &quot;a&quot; orders in relation to &quot;b&quot;. <div><div class="doc-code-container" id="r2HOClb8"><pre><code>&quot;a&quot;.compare_to &quot;b&quot;</code><br /></pre></div><button id="yaW7EWF4" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.equals_ignore_case</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether <code>this</code> is equal to <code>that</code>, ignoring the case of the texts. </p></div><div><p>Arguments: <ul><li> that: The text to compare `this` for case</li></ul> </p><p>Two texts are considered equal ignoring case if they are of the same length and corresponding characters are equal ignoring case. </p><div class="important"><div class="summary">Unicode Equality</div> The definition of equality includes Unicode canonicalization. I.e. two texts are equal if they are identical after canonical decomposition. This ensures that different ways of expressing the same character in the underlying binary representation are considered equal. </div><div class="example"><div class="summary">Example</div> The string 'É' (i.e. the character U+00C9, LATIN CAPITAL LETTER E WITH ACUTE) is equal ignore case to the string 'é' (i.e. the character U+00E9, LATIN SMALL LETTER E WITH ACUTE), which is canonically the same as the string 'e\u0301' (i.e. the letter <code>e</code> followed by U+0301, COMBINING ACUTE ACCENT). Therefore: <div><div class="doc-code-container" id="ULw1kI7v"><pre><code>(('É' . equals_ignore_case 'é') &amp;&amp; ('é' == 'e\u0301')) == True</code><br /></pre></div><button id="Uopuis1G" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.==</span> <span class="argument"></span></p></div></div><div><div class=""><p>Checks whether <code>this</code> is equal to <code>that</code>. </p></div><div><p>Arguments: <ul><li> that: The text to compare `this` for equality with.</li></ul> </p><div class="important"><div class="summary">Unicode Equality</div> The definition of equality includes Unicode canonicalization. I.e. two texts are equal if they are identical after canonical decomposition. This ensures that different ways of expressing the same character in the underlying binary representation are considered equal. </div><div class="example"><div class="summary">Example</div> The string 'é' (i.e. the character U+00E9, LATIN SMALL LETTER E WITH ACUTE) is canonically the same as the string 'e\u0301' (i.e. the letter <code>e</code> followed by U+0301, COMBINING ACUTE ACCENT). Therefore: <div><div class="doc-code-container" id="R7jh37ej"><pre><code>('é' == 'e\u0301') == True</code><br /></pre></div><button id="pkhUKq4x" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.words</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a vector containing all words in the given text. </p></div><div><p>Arguments: <ul><li> keep_whitespace: Whether or not the whitespace around the words should be
   preserved. If set to `True`, the whitespace will be included as a &quot;word&quot; in
   the output.</li></ul> </p><div class="info"><div class="summary">A word is defined based on the definition of Word Boundaries in the Unicode</div> Standard Annex 29, supplemented by language-specific dictionaries for Chinese, Japanese, Thai, and Khmer. </div><div class="example"><div class="summary">Example</div> Getting the words in the sentence &quot;I have not one, but two cats.&quot; <div><div class="doc-code-container" id="b7pfNoKc"><pre><code>&quot;I have not one, but two cats.&quot;.words</code><br /></pre></div><button id="NCY3jpMy" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.split</span> <span class="argument"></span></p></div></div><div><div class=""><p>Takes a separator string and returns a vector resulting from splitting <code>this</code> on each occurence of <code>separator</code>. </p></div><div><p>Arguments: <ul><li> separator: The separator to use to split the text.</li></ul> </p><div class="example"><div class="summary">Example</div> Split the comma-separated text into a vector of items. <div><div class="doc-code-container" id="DRrkKD9D"><pre><code>&quot;ham,eggs,cheese,tomatoes&quot;.split &quot;,&quot;</code><br /></pre></div><button id="ezE8fa50" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Split the string on whitespace into a vector of items. <div><div class="doc-code-container" id="tbl5xxz7"><pre><code>&quot;ham eggs cheese tomatoes&quot;.split Split_Kind.Whitespace</code><br /></pre></div><button id="LxzMOHXb" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.characters</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns a vector containing all characters in the given text. </p></div><div><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Get the individual characters in the text &quot;건반(Korean)&quot;. <div><div class="doc-code-container" id="QTvnOU9o"><pre><code>&quot;건반(Korean)&quot;.characters</code><br /></pre></div><button id="VT3mtlk1" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.each</span> <span class="argument"></span></p></div></div><div><div class=""><p>Applies the provided <code>function</code> to each character in <code>this</code>. </p></div><div><p>Arguments: <ul><li> function: The operation to apply to each character in the text.</li></ul> </p><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Print each character in the text &quot;aaa&quot;. <div><div class="doc-code-container" id="LXan6YbK"><pre><code>&quot;aaa&quot;.each IO.println</code><br /></pre></div><button id="Xbxgo0Ff" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Text.length</span> <span class="argument"></span></p></div></div><div><div class=""><p>Computes the number of characters in the text. </p></div><div><div class="info"><div class="summary">A character is defined as an Extended Grapheme Cluster, see Unicode</div> Standard Annex 29. This is the smallest unit that still has semantic meaning in most text-processing applications. </div><div class="example"><div class="summary">Example</div> Getting the length of the string &quot;건반(Korean)&quot;. <div><div class="doc-code-container" id="81zTn1X7"><pre><code>&quot;건반(Korean)&quot;.length</code><br /></pre></div><button id="kj0srWYj" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div></div><div></div><div></div></div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div></div></div></div><div><div><div></div><div></div><div><div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div></div></div></div>
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
