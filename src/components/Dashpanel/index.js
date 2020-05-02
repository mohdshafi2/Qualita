import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import iconSet from "../../fonts/selection";
import IcomoonReact from "icomoon-react";
import './Dashpanel.scss'

class Dashpanel extends Component {
  render() {
    return (
      <div className="Dashpanel">
        <Container>
          <Row>
            <Col>
              <ul className="dash_box list-style-none ">
                <li className="dash_box_iteams">
                  <NavLink to="/suites">
                    <span className="_cricle-icons">
                      <IcomoonReact iconSet={iconSet} color="#0A376E" size={40} icon="e-dashboard"/>
                    </span>
                    <h2>Dashboard</h2>
                    <span className="_bg-panel">
                      <IcomoonReact iconSet={iconSet} color="#1D4A7F" size={118} icon="e-dashboard"/>
                    </span>
                  </NavLink>
                </li>
                <li className="dash_box_iteams">
                  <NavLink to="/suites">
                    <span className="_cricle-icons">
                      <IcomoonReact iconSet={iconSet} color="#0A376E" size={40} icon="e-realtime-report"/>
                    </span>
                    <h2>Real Time Reporting</h2>
                    <span className="_bg-panel">
                      <IcomoonReact iconSet={iconSet} color="#1D4A7F" size={118} icon="e-realtime-report"/>
                    </span>
                  </NavLink>
                </li>
                <li className="dash_box_iteams">
                  <NavLink to="/suites">
                    <span className="_cricle-icons">
                      <IcomoonReact iconSet={iconSet} color="#0A376E" size={50} icon="e-testdata-center"/>
                    </span>
                    <h2>Test Data Centre</h2>
                    <span className="_bg-panel">
                      <IcomoonReact iconSet={iconSet} color="#1D4A7F" size={140} icon="e-testdata-center"/>
                    </span>
                  </NavLink>
                </li>
                <li className="dash_box_iteams">
                  <NavLink to="/suites">
                    <span className="_cricle-icons">
                      <IcomoonReact iconSet={iconSet} color="#0A376E" size={40} icon="e-serve-admin"/>
                    </span>
                    <h2>Server Administration</h2>
                    <span className="_bg-panel">
                      <IcomoonReact iconSet={iconSet} color="#1D4A7F" size={118} icon="e-serve-admin"/>
                    </span>
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashpanel
