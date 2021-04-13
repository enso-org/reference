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
                <a href="Base-Data-Time-Time" className="font-bold">Time</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Obtains an instance of <code>Time</code> from a year, month, day, hour, minute, second, nanosecond and timezone. </p></div><div><p>Arguments: <ul><li> month: the month</li><li> day: the day
   year and month</li><li> hour: the hour</li><li> minute: the minute</li><li> second: the second</li><li> nanosecond: the nano</li><li> zone: the timezone</li></ul> </p><p>Returns a <code>Time_Error</code> if the provided time cannot be represented. </p><div class="example"><div class="summary">Example</div> Create a new zoned date time at Unix epoch. <div><div class="doc-code-container" id="1iCCcDT0"><pre><code>Time.new 1970 (zone = Zone.utc)</code><br /></pre></div><button id="wRNuTjEk" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Get the 5 August 1986 at midnight. <div><div class="doc-code-container" id="4t3g07zQ"><pre><code>Time.new 1986 8 5</code><br /></pre></div><button id="mXtlDAm8" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">now</span> <span class="argument"></span></p></div></div><div><div class=""><p>Obtains the current date-time from the system clock in the system timezone. </p></div><div><div class="example"><div class="summary">Example</div> Get the current time <div><div class="doc-code-container" id="dKr7LpNA"><pre><code>Time.now</code><br /></pre></div><button id="AUBX2sJQ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse_format</span> <span class="argument"></span></p></div></div><div><div class=""><p>Converts text to a time using a provided format specifier. </p></div><div><p>Arguments: <ul><li> text: The text to parse as a time of day, using the specified pattern.</li><li> pattern: The pattern to use for parsing the input text.</li><li> locale: The locale in which the pattern should be interpreted.</li></ul> </p><p>Returns a <code>Time_Error</code> if the provided text cannot be parsed using the provided pattern and locale. </p><div class="info"><div class="summary">Pattern Syntax</div> For the list of accepted symbols in pattern refer to <code>Time.format</code> doc. </div><div class="example"><div class="summary">Example</div> Parse &quot;2020-05-06 04:30:20&quot; as Time <div><div class="doc-code-container" id="hG3qxjXK"><pre><code>Date.parse_format &quot;2020-05-06 04:30:20&quot; &quot;yyyy-MM-dd HH:mm:ss&quot;</code><br /></pre></div><button id="qJ0ULJMj" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Parse &quot;06 of May 2020 at 04:30AM&quot; as Time <div><div class="doc-code-container" id="vn2UNDz5"><pre><code>Date.parse_format &quot;06 of May 2020 at 04:30AM&quot; &quot;dd 'of' MMMM yyyy 'at' hh:mma&quot;</code><br /></pre></div><button id="aSFCpqZu" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">parse</span> <span class="argument"></span></p></div></div><div><div class=""><p>Obtains an instance of <code>Time</code> from a text such as &quot;2007-12-03T10:15:30+01:00 Europe/Paris&quot;. </p></div><div><p>Arguments: <ul><li> text: The text representing the time to be parsed.</li></ul> </p><div class="info"><div class="summary">Valid Formatting</div> The text must represent a valid date-time and is parsed using the ISO-8601 extended offset date-time format to add the timezone. The section in square brackets is not part of the ISO-8601 standard. The format consists of: </div><p> <ul><li> The ISO offset date time.</li><li> If the zone ID is not available or is a zone offset then the format is
     complete.</li><li> An open square bracket '['.</li><li> The zone ID. This is not part of the ISO
     sensitive.</li><li> A close square bracket ']'.</li></ul> </p><p>This method will return a <code>Time_Error</code> if the provided time cannot be parsed using the above format. </p><div class="example"><div class="summary">Example</div> Parse UTC time. <div><div class="doc-code-container" id="nLyiWFwz"><pre><code>Time.parse &quot;2020-10-01T04:11:12Z&quot;</code><br /></pre></div><button id="l9j8vlsJ" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Parse UTC-04:00 time. <div><div class="doc-code-container" id="xgMpyKpF"><pre><code>Time.parse &quot;2020-10-01T04:11:12-04:00&quot;</code><br /></pre></div><button id="pgRvhEEP" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Parse UTC-04:00 time specifying New York timezone. <div><div class="doc-code-container" id="e7f5yg0e"><pre><code>Time.parse &quot;2020-10-01T04:11:12-04:00[America/New_York]&quot;</code><br /></pre></div><button id="aR9hO1xx" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Parse UTC-04:00 time with nanoseconds. <div><div class="doc-code-container" id="DS51tYcb"><pre><code>Time.parse &quot;2020-10-01T04:11:12.177528-04:00&quot;</code><br /></pre></div><button id="fd346SHn" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Recover from the parse error. <div><div class="doc-code-container" id="9YWLGbB2"><pre><code>Time.parse &quot;2020-10-01&quot; . catch e-&gt; case e of</code><br /><code>    Time.Error _ -&gt; Time.now</code><br /></pre></div><button id="xHPNKhh2" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div><div><div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div><div><div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div></div><div><div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div></div>
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
