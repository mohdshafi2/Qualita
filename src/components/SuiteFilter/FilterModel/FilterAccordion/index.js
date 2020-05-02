import React, {Component} from 'react'
import {Accordion, Card, Form} from 'react-bootstrap'
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../../fonts/selection';
import './FilterAccordion.scss'

class FilterAccordion extends Component {
  render() {
    return (
      <div className="FilterAccordion">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Project
              <span className="accordion-arrow">
                                <span className="tag">2</span>
                                <IcomoonReact iconSet={iconSet} size={8} icon="e-arrow-one"/>
                            </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="option1" id="option1"/>
                    <Form.Check type="checkbox" label="option2" id="option2"/>
                    <Form.Check type="checkbox" label="option3" id="option3"/>
                    <Form.Check type="checkbox" label="option4" id="option4"/>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Test Suite
              <span className="accordion-arrow">
                                <span className="tag">1</span>
                                <IcomoonReact iconSet={iconSet} size={8} icon="e-arrow-one"/>
                            </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Check label="option5" type="checkbox" id="option5"
                    />
                    <Form.Check label="option6" type="checkbox" id="option6"
                    />
                    <Form.Check label="option7" type="checkbox" id="option7"
                    />
                    <Form.Check label="option8" type="checkbox" id="option8"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Browser
              <span className="accordion-arrow">
                                <span className="tag">4</span>
                                <IcomoonReact iconSet={iconSet} size={8} icon="e-arrow-one"/>
                            </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicCheckbox2" >
                    <Form.Check type="checkbox"  label="option9" id="option9"/>
                    <Form.Check type="checkbox" label="option10" id="option10"/>
                    <Form.Check type="checkbox" label="option11" id="option11"/>
                    <Form.Check type="checkbox" label="option12" id="option12"/>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default FilterAccordion
