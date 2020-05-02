import React, {Component, useState} from 'react'
import IcomoonReact from "icomoon-react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Draggable from "react-draggable";
import iconSet from "../../fonts/selection";
import './Loadalert.scss'
import Loadcollapse from "./Loadcollapse/Loadcollapse";

class Loadalert extends Component {
  render() {
    const percentage = 42;
    return (
        <Draggable>
          <div className="Loadalert">
            <Loadcollapse/>
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
        </Draggable>
    );
  }
}

export default Loadalert
