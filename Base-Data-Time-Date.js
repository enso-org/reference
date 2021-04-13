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
            <input type="checkbox" id="Base-Data-Time" checked="True" />
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
                <a href="Base-Data-Time-Date" className="font-bold">Date</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Constructs a new Date from a year, month, and day. </p></div><div><p>Arguments <ul><li> month: The month</li><li> day: The day
   year and month.</li></ul> </p><p>Returns a <code>Time_Error</code> if the provided time is not valid. </p><div class="example"><div class="summary">Example</div> Create a new local date at Unix epoch. <div><div class="doc-code-container" id="AX7jp2xY"><pre><code>Date.new 1970</code><br /></pre></div><button id="nR5VABIQ" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Get the local date of 5th August 1986. <div><div class="doc-code-container" id="O4Wt5Li7"><pre><code>Date.new 1986 8 5</code><br /></pre></div><button id="SGwTFtUa" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">today</span> <span class="argument"></span></p></div></div><div><div class=""><p>Alias for <code>now</code>. </p></div><div><div class="example"><div class="summary">Example</div> Get the current date. <div><div class="doc-code-container" id="KOZ4950p"><pre><code>Date.today</code><br /></pre></div><button id="gLYkv6uM" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">now</span> <span class="argument"></span></p></div></div><div><div class=""><p>Obtains the current date from the system clock in the system timezone. </p></div><div><div class="example"><div class="summary">Example</div> Get the current date. <div><div class="doc-code-container" id="ltoMVBzH"><pre><code>Date.now</code><br /></pre></div><button id="aCsA0fgZ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse_format</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts text containing a date into a Date object using a custom format. </p></div><div><p>Arguments: <ul><li> text: The textual content to parse as a time.</li><li> pattern: The pattern describing how to parse the text.</li></ul> </p><p>Returns a <code>Time_Error</code> if the provided <code>text</code> cannot be parsed using the provided <code>pattern</code>. </p><div class="info"><div class="summary">Pattern Syntax</div> For the list of accepted symbols in pattern refer to the <code>Base.Data.Time.Time.format</code> doc. </div><div class="example"><div class="summary">Example</div> Parse &quot;1999-1-1&quot; as Date. <div><div class="doc-code-container" id="Bjl2uUpa"><pre><code>Date.parse_format &quot;1999-1-1&quot; &quot;yyyy-M-d&quot;</code><br /></pre></div><button id="lF0FxNs2" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Recover from the parse error. <div><div class="doc-code-container" id="RzuTX9c0"><pre><code>date = Date.parse &quot;1999-1-1&quot; &quot;yyyy-MM-dd&quot;</code><br /><code>date.catch e-&gt; case e of</code><br /><code>    Time.Error msg -&gt; Date.new 2000 1 1</code><br /></pre></div><button id="PGqaAU8l" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts text containing a date into a Date object. </p></div><div><p>Arguments: <ul><li> text: The text to try and parse as a date.</li></ul> </p><p>Returns a <code>Time_Error</code> if the provided <code>text</code> cannot be parsed using the provided <code>pattern</code>. </p><div class="info"><div class="summary">Date Formatting</div> The text must represent a valid date and is parsed using the ISO-8601 extended local date format. The format consists of: </div><p> <ul><li> Four digits or more for the year. Years in the range 0000 to 9999
     will be pre-padded by zero to ensure four digits. Years outside
     that range will have a prefixed positive or negative symbol.</li><li><div class="InvalidList"> A dash</div></li><li>   - Two digits for the month
     two digits.</li><li><div class="InvalidList"> A dash</div></li><li>   - Two digits for the day
     digits.</li></ul> </p><div class="example"><div class="summary">Example</div> Parse the date of 23rd December 2020. <div><div class="doc-code-container" id="Bp7pMJg1"><pre><code>Date.parse &quot;2020-12-23&quot;</code><br /></pre></div><button id="e386eM0U" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Recover from an error due to a wrong format. <div><div class="doc-code-container" id="phAGe2mG"><pre><code>Date.parse &quot;my birthday&quot; . catch e-&gt; case e of</code><br /><code>    Time.Error _ -&gt; Date.new 2000 1 1</code><br /></pre></div><button id="1Tvarjir" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div></div>
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
