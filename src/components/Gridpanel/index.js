import React, {useState} from 'react'
import {Container} from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import Donutchat from "../Donutchat/";
import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';
import './Gridpanel.scss'
import BrowserSupport from "../SuiteGrid/BrowserSupport/BrowserSupport";


function Gridpanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Gridpanel Gridpanel2">
      <Container>
        <div className="gridPan-Bg">
          <div className="gridArrow-collapse"
               onClick={() => setOpen(!open)}
               aria-controls="example-collapse-text"
               aria-expanded={open}
          >
            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-arrow-down"/>
          </div>
          <Collapse in={open}>
            <div>
              <div className="gridPanel__group">
                <div className="gridPanel">
                  <ul className="_list _batch2">
                    <li className="_items">
                      <strong>SME_Merged</strong>
                      <small>LOCAL <span>73.0.3683.103</span> <span>Qualitia</span></small>
                    </li>
                    <li className="_items">
                      <BrowserSupport></BrowserSupport>
                    </li>
                  </ul>
                </div>
                <div className="gridPanel">
                  <ul className="_list">
                    <li className="_items">
                      <strong>Execution Time</strong>
                      <small>1h 13m 16s</small>
                    </li>
                    <li className="_items">
                      <strong>Start Time</strong>
                      <small>16-04-2019 <span>11:53:23</span></small>
                    </li>
                    <li className="_items">
                      <strong>End Time</strong>
                      <small>16-04-2019 <span>11:53:40</span></small>
                    </li>
                  </ul>
                </div>
                <div className="gridPanel">
                  <div className="_pie_chat">
                    <div className="_pie_indicater">
                      <ul>
                        <li>
                          <div className="_pie_head">
                            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-check"/>
                            <div>
                              <span>Passed</span>
                              <small>20</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="_pie_head">
                            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-exclamation"/>
                            <div>
                              <span>Failed</span>
                              <small>26</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="_pie_head">
                            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-error"/>
                            <div>
                              <span>Defects</span>
                              <small>14</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="_pie_head">
                            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-minus"/>
                            <div>
                              <span>Not Executed</span>
                              <small>16</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Donutchat toggleState={open}/>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          <div className="gridPanel__group _batch2">
            <div className="gridPanel">
              <ul className="_list _batch2">
                <li className="aborted-status-show d-none">
                  <IcomoonReact iconSet={iconSet} color="#E65F58" size={20} icon="e-warning"/>
                </li>
                <li className="_items">
                  <strong>1.E2E_Sales Stage Preprod</strong>
                  <small>Merged E2E flow <span>#1</span> <span>DL_Sales Login-till offer conversion</span></small>
                </li>
              </ul>
            </div>
            <div className="gridPanel">
              <ul className="_list">
                <li className="_items">
                  <strong>Execution Time</strong>
                  <small>1h 13m 16s</small>
                </li>
                <li className="_items">
                  <strong>Start Time</strong>
                  <small>16-04-2019 <span>11:53:23</span></small>
                </li>
                <li className="_items">
                  <strong>End Time</strong>
                  <small>16-04-2019 <span>11:53:40</span></small>
                </li>
              </ul>
            </div>
            <div className="gridPanel">
              <ul className="_list w-25">
                <li className="_items">
                  <strong>Tasks</strong>
                  <small style={{color: '#F7680F'}}><b>7/8</b></small>
                </li>
                <li className="_items">
                  <strong>Steps</strong>
                  <small style={{color: '#F7680F'}}><b>15/20</b></small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Gridpanel
