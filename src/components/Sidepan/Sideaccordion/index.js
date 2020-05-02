import React, { Component } from 'react'
import {Accordion, Card} from 'react-bootstrap';
import IcomoonReact from 'icomoon-react';

import iconSet from '../../../fonts/selection';
import './Sideaccordion.scss'

class Sideaccordion extends Component {
  render() {
    return (
      <div className="Sideaccordion">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <span className="mr-1">
                <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-check" />
              </span>
              Configuration
              <span className="accordion-arrow">
                <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one" />
              </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>Hello! I'm the body</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Sideaccordion
