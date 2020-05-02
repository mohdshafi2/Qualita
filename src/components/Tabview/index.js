import React, {Component} from 'react';
import {Container, Tab, Nav} from 'react-bootstrap';
import SuiteGrid from '../SuiteGrid';
import SuiteFilter from '../SuiteFilter';
import './Tabview.scss'

class Tabview extends Component {
  render() {
    return (
      <div className="Tabview">
        <Tab.Container defaultActiveKey="all">
          <div className="_tab_header">
            <Container>
              <div className="_tab_list">
                <div className="_tab_items">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="all">All <span>(8)</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="executing">Executing <span>(4)</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="completed">Completed <span>(3)</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="upcoming">Upcoming <span>(1)</span></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="_tab_items">
                  <SuiteFilter/>
                </div>
              </div>
            </Container>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <SuiteGrid/>
            </Tab.Pane>
            <Tab.Pane eventKey="executing">
              <SuiteGrid/>
            </Tab.Pane>
            <Tab.Pane eventKey="completed">
              <SuiteGrid/>
            </Tab.Pane>
            <Tab.Pane eventKey="upcoming">
              <SuiteGrid/>
            </Tab.Pane>
          </Tab.Content>

        </Tab.Container>
      </div>
    );
  }
}

export default Tabview
