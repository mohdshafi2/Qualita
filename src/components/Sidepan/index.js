import React from 'react'
import {Modal, Card} from 'react-bootstrap';
import Draggable from 'react-draggable';
import Sideaccordion from './Sideaccordion';
import PreviewModel from '../PreviewModel';

import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';
import './Sidepan.scss';

class Sidepan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const {data} = this.props;

    return (
      <div className="Sidepan">
        <Draggable handle="div">
          <section className="sidepan-button">
            <div className="draggable-data">
              <IcomoonReact iconSet={iconSet} color="" size={20} icon="e-drag_capsule" />
            </div>
            <span onClick={() => this.setState({ show: true })}>
                <IcomoonReact iconSet={iconSet} color="" size={20} icon="e-log1" />
              </span>
          </section>
        </Draggable>

        <Modal className="sidepan-view" show={this.state.show} onHide={() => this.setState({show: false})}>
          <Modal.Header closeButton>Log Details
          </Modal.Header>
          <Modal.Body>
            <ul className="_pagination">
              <li>
                <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one"/>
              </li>
              <li>
                <p>{data.spTitle}</p>
              </li>
              <li>
                <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one"/>
              </li>
            </ul>

            {data.screenshot
              ? <PreviewModel imgUrl={data.screenshot}/>
              : <PreviewModel imgUrl='/CI_NotAvailable.png'/>
            }

            <Sideaccordion/>

            <Card>
              <Card.Body>
                <Card.Title>Info Log</Card.Title>
                <Card.Text>
                  <strong>Step Itinerary => </strong>
                  <small>TotalCount_TC >> Report_testing >> Case007</small>
                </Card.Text>
                <Card.Text>
                  <strong>Report Itinerary: </strong>
                  <small>Suite1 >> Report_testing >> Case007</small>
                </Card.Text>
                <Card.Text>
                  <strong>Action: </strong>
                  <small>ComparePattern</small>
                </Card.Text>
                <Card.Text>
                  <strong>Action: </strong>
                  <small>ComparePattern Status : Passed Message : The data 'pattern' matches the Pattern 'pattern' With
                    CaseSensitive comparison as : true</small>
                </Card.Text>
                <Card.Text>
                  <small className="mr-1">
                    <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-check"/>
                  </small>
                  <strong>Passed</strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Error Log</Card.Title>
                <Card.Text>
                  <strong>Action : </strong>
                  <small>Mobile.PressBackButton</small>
                </Card.Text>
                <Card.Text>
                  <strong>Status : </strong>
                  <small>Failed</small>
                </Card.Text>
                <Card.Text>
                  <strong>Cause : </strong>
                  <small>webdriverfw.exceptions.com</small>
                </Card.Text>
                <Card.Text>
                  <strong>AppNotLaunchedException : </strong>
                  <small>No. mobile application is found to be
                    running on the device. Please use
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Sidepan
