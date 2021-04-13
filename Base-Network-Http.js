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
        <input type="checkbox" id="Base-Network" checked="True" />
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
              <a href="Base-Network-Http" className="font-bold">Http</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">post_json</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send a Post request with body with content-type &quot;application/json&quot;. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> body_json: The json for the body.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Post request with json data. <div><div class="doc-code-container" id="rSzu0eK8"><pre><code>json = Json.parse &lt;| '''</code><br /><code>    {&quot;key&quot;:&quot;val&quot;}</code><br /><code>Http.post_json &quot;http://httpbin.org/post&quot; json</code><br /></pre></div><button id="CbQzVHkF" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">post_form</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send a Post request with the form. By default it will be encoded as &quot;application/x-www-form-urlencoded&quot;. To encode the form as &quot;multipart/form-data&quot; add the appropriate header. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> parts: A form, or a vector of parts for creating a form.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Post request with form. <div><div class="doc-code-container" id="nXlJBWJT"><pre><code>form = [Form.text_field &quot;name&quot; &quot;John Doe&quot;, Form.file_field &quot;license.txt&quot; (Enso_Project.root / &quot;LICENSE&quot;)]</code><br /><code>Http.post_form &quot;http://httpbin.org/post&quot; form</code><br /></pre></div><button id="E7usx2Qv" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Send a Post request with form encoded as &quot;multipart/form-data&quot;. <div><div class="doc-code-container" id="dk8dbXfx"><pre><code>form = [Form.text_field &quot;name&quot; &quot;John Doe&quot;, Form.file_field &quot;license.txt&quot; (Enso_Project.root / &quot;LICENSE&quot;)]</code><br /><code>Http.post_form &quot;http://httpbin.org/post&quot; form [Header.multipart_form_data]</code><br /></pre></div><button id="bZlqM16j" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">post</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send a Post request. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> body: The contents of the post request.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Post request with binary data. <div><div class="doc-code-container" id="qWt4pQVV"><pre><code>body = Body.Bytes &quot;Hello&quot;.utf_8</code><br /><code>header_binary = Header.content_type &quot;application/octet-stream&quot;</code><br /><code>Http.post &quot;http://httpbin.org/post&quot; body [header_binary]</code><br /></pre></div><button id="I2WubLW5" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">head</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send a Head request. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Head request. <div><div class="doc-code-container" id="cjavx3YC"><pre><code>res = Http.head &quot;http://httpbin.org&quot;</code><br /><code>IO.println res.headers</code><br /></pre></div><button id="eiAvkuHJ" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">fetch</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send the Get request and return the body. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Get request. <div><div class="doc-code-container" id="o5nh6ZhU"><pre><code>Http.fetch &quot;http://httpbin.org/get&quot;</code><br /></pre></div><button id="cD5SWWG1" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Send authenticated Get request (note the use of TLS). <div><div class="doc-code-container" id="1aje0l9H"><pre><code>Http.fetch &quot;https://httpbin.org/basic-auth/user/pass&quot; [Header.authorization_basic &quot;user&quot; &quot;pass&quot;]</code><br /></pre></div><button id="4z0IClZT" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Download a file. <div><div class="doc-code-container" id="4vCmfYcR"><pre><code>out_file = File.new &quot;/tmp/out.bin&quot;</code><br /><code>res = Http.fetch &quot;http://httpbin.org/bytes/1024&quot; . to_file out_file</code><br /></pre></div><button id="oUoKTIMx" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">get</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send a Get request. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send a Get request. <div><div class="doc-code-container" id="2cpfeGvS"><pre><code>Http.get &quot;http://httpbin.org/get&quot;</code><br /></pre></div><button id="1x22BEKC" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Send authenticated Get request (note the use of TLS). <div><div class="doc-code-container" id="oYm4swzk"><pre><code>Http.get &quot;https://httpbin.org/basic-auth/user/pass&quot; [Header.authorization_basic &quot;user&quot; &quot;pass&quot;]</code><br /></pre></div><button id="UxYwWbDO" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Download a file. <div><div class="doc-code-container" id="af5O7x2g"><pre><code>out_file = File.new &quot;/tmp/out.bin&quot;</code><br /><code>res = Http.get &quot;http://httpbin.org/bytes/1024&quot;</code><br /><code>res.body.to_file out_file</code><br /></pre></div><button id="26BlRWli" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">options</span> <span class="argument"></span></p></div></div><div><div class=""><p>Send an Options request. </p></div><div><p>Arguments: <ul><li> uri: The address to which the request will be sent.</li><li> headers: Any headers for the options request.</li></ul> </p><div class="example"><div class="summary">Example</div> Send an Options request. <div><div class="doc-code-container" id="ntooCgUX"><pre><code>Http.options &quot;http://httpbin.org&quot;</code><br /></pre></div><button id="7qa9ukxM" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Create a new instance of the HTTP client. </p></div><div><p>Arguments: <ul><li> timeout: The length of time the client will wait for responses.</li><li> follow_redirects: Whether or not the client should follow redirects.</li><li> proxy: The proxy that the client should use, if any.</li><li> version: The HTTP version supported by the client.</li></ul> </p><div class="example"><div class="summary">Example</div> Create an HTTP client with default settings. <div><div class="doc-code-container" id="RXZdfer9"><pre><code>Http.new</code><br /></pre></div><button id="i8gSwNQp" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Create an HTTP client with extended timeout. <div><div class="doc-code-container" id="G8Z0LAwm"><pre><code>Http.new timeout=30.seconds</code><br /></pre></div><button id="XxSQ6UKY" class="doc-copy-btn flex">Copy</button></div> </div><div class="example"><div class="summary">Example</div> Create an HTTP client with extended timeout and proxy settings. <div><div class="doc-code-container" id="KtXxRGgG"><pre><code>Http.new (timeout = 30.seconds) (proxy = Proxy.new &quot;example.com&quot; 8080)</code><br /></pre></div><button id="Tl6mp2qG" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">Request_Error.to_display_text</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Convert a request error to a human-readable form.</p></div></div></div></div><div class="mb-20"><div><div><div class="atom flex"><p><span class="name">Request_Error</span> <span class="parameter">message </span></p><div class="tags"><p class="tag"><span class="unstable">UNSTABLE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An error when sending an Http request. </p><p>Arguments: <ul><li> message: The message for the error.</li></ul></p></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div><div><div><div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div></div><div><div><div><div><div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div></div></div><div></div><div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div><div></div><div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div></div></div><div><div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div><div></div><div><div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div></div><div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div></div></div></div><div><div></div><div></div><div></div></div></div></div></div></div>
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
