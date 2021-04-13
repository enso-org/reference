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
        <input type="checkbox" id="Base-System" checked="True" />
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
              <a href="Base-System-File" className="font-bold">File</a>
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
          <div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">close_stream</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Utility method for closing primitive Java streams. Provided to avoid accidental scope capture with <code>Managed_Resource</code> finalizers.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">handle_java_exceptions</span> <span class="argument">file ~action</span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Utility method for running an action with Java exceptions mapping.</p></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">rethrow_java</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Utility method for rewrapping Java exceptions into Enso panics. </p><p>Arguments: <ul><li> file: The file object.</li><li> exception: The java exception that was encountered.</li></ul></p></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Input_Stream</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>An input stream, allowing for interactive reading of contents from an open file.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Input_Stream</span> <span class="parameter">file stream_resource </span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An input stream, allowing for interactive reading of contents from an open file. </p><p>Arguments: <ul><li> file: The file from which the stream will read.</li><li> stream_resource: The internal resource that represents the underlying
       stream.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">read_all_bytes</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Reads all the bytes in this file into a vector of bytes.</p></div></div></div></div><div><div class="method flex"><p><span class="name">read_all_bytes</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">read_n_bytes</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Reads <i>up to</i> the provided number of bytes from the stream. </p><p>Arguments: <ul><li> n: The number of bytes to read from the file.</li></ul> </p><p>Makes a best-effort to read as many bytes as provided, however fewer bytes may be read, if end of stream is encountered. </p><p>The length of the returned vector is the same as the number of bytes read.</p></div></div></div></div><div><div class="method flex"><p><span class="name">read_n_bytes</span> <span class="argument">n</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">read_byte</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Reads the next byte from the stream. </p><p>The returned value is an integer in the range 0-255 representing the next byte of input, or -1 if end of stream is reached.</p></div></div></div></div><div><div class="method flex"><p><span class="name">read_byte</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">close</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Closes this stream. </p><p>Even though Streams are closed automatically upon garbage collection, it is still advised to close streams manually if they are not used within a bracket pattern.</p></div></div></div></div><div><div class="method flex"><p><span class="name">close</span> <span class="argument"></span></p></div></div><div><div><div><div class="method flex"><p><span class="name">with_java_stream</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="private">PRIVATE</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Exposes operations on the underlying Java input stream. </p><p>Arguments: <ul><li> f: Applies a function over the internal java stream.</li></ul> </p><p>Useful when integrating with polyglot functions requiring an <code>InputStream</code> as an argument.</p></div></div></div></div><div><div class="method flex"><p><span class="name">with_java_stream</span> <span class="argument">f</span></p></div></div></div></div></div></div><div class="mb-20"><div class="main ml-20"><div><h1><p><span class="name">Output_Stream</span> <span class="parameter"></span></p></h1></div><div><div class="summary"><p>An output stream, allowing for interactive writing of contents into an open file.</p></div></div><div><div class="atoms"><h2><div class="flex"><AtomsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Atoms</p></div></h2><div><div><div><div class="atom flex"><p><span class="name">Output_Stream</span> <span class="parameter">file stream_resource </span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>An output stream, allowing for interactive writing of contents into an open file. </p><p>Arguments: <ul><li> file: The file which the output stream will write into.</li><li> stream_resource: The internal resource that represents the underlying
       stream.</li></ul></p></div></div></div></div></div><div class="methods"><h2><div class="flex"><MethodsIcon className="-ml-16 -mb-3 mr-4 self-center h-12 p-2 text-content-title-on-dark bg-accent-important fill-current rounded-xl" /><p>Methods</p></div></h2><div><div><div><div class="method flex"><p><span class="name">write_bytes</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p>Writes a vector of bytes into the file at the current stream position. </p></div><div><p>Arguments: <ul><li> contents: A vector of bytes to write into the file.</li></ul></p></div></div></div></div><div><div class="method flex"><p><span class="name">write_bytes</span> <span class="argument">contents</span></p></div></div><div><div><div><div class="method flex"><p><span class="name">close</span> <span class="argument"></span></p><div class="tags"><p class="tag"><span class="advanced">ADVANCED</span></p></div></div></div><div><div class=""><p> </p></div><div><p>Closes this stream. </p><p>Even though Streams are closed automatically upon garbage collection, it is still advised to close streams manually if they are not used within a bracket pattern.</p></div></div></div></div><div><div class="method flex"><p><span class="name">close</span> <span class="argument"></span></p></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">home</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the home directory of the current user. </p></div><div><div class="example"><div class="summary">Example</div> Get the current user's home directory. <div><div class="doc-code-container" id="n87hO6f5"><pre><code>File.home</code><br /></pre></div><button id="1tsAPrc1" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">current_directory</span> <span class="argument"></span></p></div></div><div><div class=""><p>Returns the current working directory (CWD) of the current program. </p></div><div><div class="example"><div class="summary">Example</div> Get the program's current working directory. <div><div class="doc-code-container" id="BzZKlZFd"><pre><code>File.current_directory</code><br /></pre></div><button id="DyIkg2cp" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">read</span> <span class="argument"></span></p></div></div><div><div class=""><p>Open and read the file at the provided <code>path</code>. </p></div><div><p>Arguments: <ul><li> path: The path of the file to open and read the contents of. It will
   accept a textual path or a file.</li></ul> </p><div class="info"><div class="summary">If you have a variable <code>file</code> of type <code>File</code>, we recommend calling the</div> <code>.read</code> method on it directly, rather than using <code>File.read file</code>. The latter, however, will still work. </div><div class="example"><div class="summary">Example</div> Read the <code>data.csv</code> file in the project directory's <code>data</code> directory. You will need to create the file <code>data.csv</code> manually in that directory. <div><div class="doc-code-container" id="NkSZheui"><pre><code>File.read (Enso_Project.data / &quot;data.csv&quot;).path</code><br /></pre></div><button id="OKhVtTvU" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div class="mb-20"><div><div><div class="method flex"><p><span class="name">new</span> <span class="argument"></span></p></div></div><div><div class=""><p>Creates a new file object, pointing to the given path. </p></div><div><p>Arguments: <ul><li> path: The path to the file that you want to create.</li></ul> </p><div class="example"><div class="summary">Example</div> Create a new file pointing to the <code>data.csv</code> file in the project directory. <div><div class="doc-code-container" id="VqMzngKA"><pre><code>File.new (Enso_Project.data / &quot;data.csv&quot;).path</code><br /></pre></div><button id="2h0c9y8t" class="doc-copy-btn flex">Copy</button></div></div></div></div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><div></div><div></div><div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div></div><div></div><div><div></div><div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div></div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div></div><div></div><div></div></div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div><div><div></div><div></div><div></div></div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div><div><div></div><div></div><div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div></div></div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div><div></div><div><div></div><div></div><div></div></div><div><div></div><div></div><div><div></div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div><div><div><div><div></div><div></div><div></div></div><div></div><div></div></div></div></div><div></div></div></div><div></div><div><div></div><div></div><div><div></div><div></div><div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div></div></div><div></div><div><div><div></div><div><div><div><div></div><div></div></div><div></div><div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div></div><div></div><div></div></div><div></div></div><div></div></div><div><div><div><div></div><div></div><div></div></div><div><div><div></div><div><div></div><div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div><div><div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div></div></div></div><div><div><div></div><div></div></div><div></div><div><div><div></div><div></div><div></div></div><div></div></div></div></div>
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
