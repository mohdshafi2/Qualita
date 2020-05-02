import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from "react-bootstrap";
import ProgressBar from "../ProgressBar";
import AlertToasts from "../AlertToasts";
import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';
import './SuiteGrid.scss'
import '../Gridpanel/Gridpanel.scss'
import '../Donutchat/Donutchat.scss'
import BrowserSupport from "./BrowserSupport/BrowserSupport";

class SuiteGrid extends Component {
  render() {
    return (
      //here is the classes to status-passed , status-failed, status-defects , status-notexecuted
      <div className="SuiteGrid ">
        <div className="Gridpanel status-failed">
          <Container>
            <NavLink className="gridPanel__group" to="/old-table">
              <div className="gridPanel">
                <ul className="_list _batch2">
                  <li className="_items">
                    <strong>SME_Merged</strong>
                    <small>LOCAL <span>73.0.3683.10</span> <span>Qualitia</span> <span>IOT</span></small>
                  </li>
                  <li className="_items">
                    <BrowserSupport></BrowserSupport>
                  </li>
                </ul>
              </div>
              <div className="gridPanel w-50">
                <div className="_pie_chat">
                  <div className="_pie_indicater">
                    <ul>
                      <li>
                        <div className="_pie_head">
                          <div>
                            <span>Total TC</span>
                            <small>120</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-check"/>
                          <div>
                            {/*<span>Passed111</span>*/}
                            <small>20</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-exclamation"/>
                          <div>
                            {/*<span>Failed</span>*/}
                            <small>26</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-error"/>
                          <div>
                            {/*<span>Defects</span>*/}
                            <small>14</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-minus"/>
                          <div>
                            {/*<span>Not Executed</span>*/}
                            <small>16</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gridPanel w-75">
                <ul className="_list">
                  <li className="_items">
                    <strong>Start Time</strong>
                    <small>11:53:23, Dec 27 2019</small>
                  </li>
                  <li className="_items">
                    <strong>Execution Time</strong>
                    <small>1h 13m 16s</small>
                  </li>
                  <li className="_items alertToasts">
                    <AlertToasts/>
                  </li>
                  <li className="_items">
                    <ProgressBar/>
                  </li>
                </ul>
              </div>
            </NavLink>
          </Container></div>
        <div className="Gridpanel status-failed">
          <Container>
            <NavLink className="gridPanel__group" to="/folder-tree">
              <div className="gridPanel">
                <ul className="_list _batch2">
                  <li className="_items">
                    <strong>SME_Merged</strong>
                    <small>LOCAL <span>73.0.3683.103</span> <span>Qualitia</span> <span>IOT</span></small>
                  </li>
                  <li className="_items">
                    <BrowserSupport></BrowserSupport>
                  </li>
                </ul>
              </div>
              <div className="gridPanel w-50">
                <div className="_pie_chat">
                  <div className="_pie_indicater">
                    <ul>
                      <li>
                        <div className="_pie_head">
                          <div>
                            <span>Total TC</span>
                            <small>120</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-check"/>
                          <div>
                            {/*<span>Passed</span>*/}
                            <small>20</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-exclamation"/>
                          <div>
                            {/*<span>Failed</span>*/}
                            <small>26</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-error"/>
                          <div>
                            {/*<span>Defects</span>*/}
                            <small>14</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-minus"/>
                          <div>
                            {/*<span>Not Executed</span>*/}
                            <small>16</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gridPanel w-75">
                <ul className="_list">
                  <li className="_items">
                    <strong>Start Time</strong>
                    <small>11:53:23, Dec 27 2019</small>
                  </li>
                  <li className="_items">
                    <strong>Execution Time</strong>
                    <small>1h 13m 16s</small>
                  </li>
                  <li className="_items alertToasts">
                    <AlertToasts/>
                  </li>
                  <li className="_items">
                    <ProgressBar/>
                  </li>
                </ul>
              </div>
            </NavLink>
          </Container></div>
        <div className="Gridpanel status-passed">
          <Container>
            <NavLink className="gridPanel__group" to="/folder-tree">
              <div className="gridPanel">
                <ul className="_list _batch2">
                  <li className="_items">
                    <strong>SME_Merged</strong>
                    <small>LOCAL <span>73.0.3683.103</span> <span>Qualitia</span> <span>IOT</span></small>
                  </li>
                  <li className="_items">
                    <BrowserSupport></BrowserSupport>
                  </li>
                </ul>
              </div>
              <div className="gridPanel w-50">
                <div className="_pie_chat">
                  <div className="_pie_indicater">
                    <ul>
                      <li>
                        <div className="_pie_head">
                          <div>
                            <span>Total TC</span>
                            <small>120</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-check"/>
                          <div>
                            {/*<span>Passed</span>*/}
                            <small>20</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-exclamation"/>
                          <div>
                            {/*<span>Failed</span>*/}
                            <small>26</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-error"/>
                          <div>
                            {/*<span>Defects</span>*/}
                            <small>14</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-minus"/>
                          <div>
                            {/*<span>Not Executed</span>*/}
                            <small>16</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gridPanel w-75 ">
                <ul className="_list">
                  <li className="_items">
                    <strong>Start Time</strong>
                    <small>11:53:23, Dec 27 2019</small>
                  </li>
                  <li className="_items">
                    <strong>Execution Time</strong>
                    <small>1h 13m 16s</small>
                  </li>
                  <li className="_items alertToasts">
                    <AlertToasts/>
                  </li>
                  <li className="_items">
                    <div className="checkright-icons">
                      <IcomoonReact iconSet={iconSet} color="" size={23} icon="e-checkright"/>
                    </div>
                  </li>
                </ul>
              </div>
            </NavLink>
          </Container></div>
        <div className="Gridpanel status-notexecuted ">
          <Container>
            <NavLink className="gridPanel__group" to="/folder-tree">
              <div className="gridPanel">
                <ul className="_list _batch2">
                  <li className="_items">
                    <strong>SME_Merged</strong>
                    <small>LOCAL <span>73.0.3683.103</span> <span>Qualitia</span> <span>IOT</span></small>
                  </li>
                  <li className="_items">
                    <BrowserSupport></BrowserSupport>
                  </li>
                </ul>
              </div>
              <div className="gridPanel w-50">
                <div className="_pie_chat">
                  <div className="_pie_indicater">
                    <ul>
                      <li>
                        <div className="_pie_head">
                          <div>
                            <span>Total TC</span>
                            <small>-</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-check"/>
                          <div>
                            {/*<span>Passed</span>*/}
                            <small>-</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-exclamation"/>
                          <div>
                            {/*<span>Failed</span>*/}
                            <small>-</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-error"/>
                          <div>
                            {/*<span>Defects</span>*/}
                            <small>-</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="_pie_head">
                          <IcomoonReact iconSet={iconSet} color="" size={15} icon="e-minus"/>
                          <div>
                            {/*<span>Not Executed</span>*/}
                            <small>-</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gridPanel w-75 ">
                <ul className="_list">
                  <li className="_items">
                    <strong>Start Time</strong>
                    <small>11:53:23, Dec 27 2019</small>
                  </li>
                  <li className="_items">
                    <strong>Execution Time</strong>
                    <small>-</small>
                  </li>
                  <li className="_items alertToasts">
                    <AlertToasts/>
                  </li>
                  <li className="_items">
                    <div className="clock-icons">
                      <IcomoonReact iconSet={iconSet} color="" size={23} icon="e-wall-clock1"/>
                    </div>
                  </li>
                </ul>
              </div>
            </NavLink>
          </Container></div>
      </div>
    );
  }
}

export default SuiteGrid
