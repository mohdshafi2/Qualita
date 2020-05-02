import React, { Component, useState } from 'react'
import {Collapse, Button } from 'react-bootstrap'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import IcomoonReact from "icomoon-react";
import iconSet from "../../../fonts/selection";
import './Loadcollapse.scss';



function Loadcollapse() {
    const [openloadmore, setOpen] = useState(false);
  const percentage = 42;

    return (
        <div className="Loadcollapse">
          <Collapse in={openloadmore}>
            <div id="loadAlertMore">
              <div className="_loadAlertPan">
                <div className="left">
                  <div>
                    <IcomoonReact className="spin-me" iconSet={iconSet} color="#fff" size={12} icon="e-refresh"/>
                    <p>UCF_Sales Login-till offer conversion</p>
                  </div>
                </div>
                <div className="right">
                  <div>
            <span className="pie-progess">
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={50}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      trailColor: 'rgb(71, 121, 179)',
                      pathColor: '#AED0FE',
                      strokeWidth: '10',
                      backgroundColor: "#3e98c7",
                    })}
                />
            </span>
                    <p>25/100 </p>
                  </div>
                  <div>
                    <IcomoonReact iconSet={iconSet} color="#fff" size={12} icon="e-wall-clock"/>
                    <p>1hr 15m</p>
                  </div>
                </div>
              </div>
              <div className="_loadAlertPan">
                <div className="left">
                  <div>
                    <IcomoonReact className="spin-me" iconSet={iconSet} color="#fff" size={12} icon="e-refresh"/>
                    <p>UCF_Sales Login-till offer conversion</p>
                  </div>
                </div>
                <div className="right">
                  <div>
            <span className="pie-progess">
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={50}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      trailColor: 'rgb(71, 121, 179)',
                      pathColor: '#AED0FE',
                      strokeWidth: '10',
                      backgroundColor: "#3e98c7",
                    })}
                />
            </span>
                    <p>25/100 </p>
                  </div>
                  <div>
                    <IcomoonReact iconSet={iconSet} color="#fff" size={12} icon="e-wall-clock"/>
                    <p>1hr 15m</p>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
            <div className="loadArrow" onClick={() => setOpen(!openloadmore)}
                 aria-controls="loadAlertMore"
                 aria-expanded={openloadmore}>
              <IcomoonReact iconSet={iconSet} color='' size={12} icon="e-arrow-down2"/>
            </div>
        </div>
    );
}

Loadcollapse.propTypes = {}

Loadcollapse.defaultProps = {}

export default Loadcollapse
