import React, {Fragment, Component} from 'react';
import Dropdown from "react-bootstrap/esm/Dropdown";
import IcomoonReact from "icomoon-react";
import {Pagination, Modal, Table} from "react-bootstrap";
import './FailureSummeryModal.scss';
import iconSet from "../../../fonts/selection";

class FailureSummeryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      key0: true,
      key1: false,
      key2: false
    }
  }

  failClose = () => {
    this.setState({show: false});
  }

  failShow = () => {
    this.setState({show: true});
  }

  setKey0 = () => {
    this.setState({key0: !this.state.key0});
  }

  setKey1 = () => {
    this.setState({key1: !this.state.key1});
  }

  setKey2 = () => {
    this.setState({key2: !this.state.key2});
  }

  render() {
    let data = this.state;
    return (
      <Fragment>
        <Dropdown.Item onClick={this.failShow}>
          <span>
            <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-failed-summery"/>
          </span>
          Failure Summary
        </Dropdown.Item>

        <Modal size="lg" className="failureSummery" show={data.show} onHide={this.failClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Failure Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-header" onClick={this.setKey0}>
                Object Identification Failure
                <span className={"accordion-arrow " + (data.key0 === true && ('arrow-up'))}>
                  <span className="tag">2</span>
                  <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one"/>
                </span>
              </div>
              <div className={"card-body p-0 " + (data.key0 === true ? ('show') : ('d-none'))}>
                <React.Fragment>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Line No.</th>
                      <th>TC_Name</th>
                      <th>TC_Iteration</th>
                      <th>Task Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Generate Random Number</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Application Login</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Unsecured_Screen To Be Validated</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Navigate to Loan Application Page</td>
                    </tr>
                    </tbody>
                  </Table>
                  <div className="col-md-5 ml-auto">
                    <Pagination>
                      <Pagination.Prev disabled/>
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item>{5}</Pagination.Item>
                      <Pagination.Next/>
                    </Pagination>
                  </div>
                </React.Fragment>
              </div>
            </div>

            <div className="card">
              <div className="card-header" onClick={this.setKey1}>
                Driver Not Found
                <span className={"accordion-arrow " + (data.key1 === true && ('arrow-up'))}>
                  <span className="tag">2</span>
                  <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one"/>
                </span>
              </div>
              <div className={"card-body p-0 " + (data.key1 === true ? ('show') : ('d-none'))}>
                <React.Fragment>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Line No.</th>
                      <th>TC_Name</th>
                      <th>TC_Iteration</th>
                      <th>Task Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Generate Random Number</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Application Login</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Unsecured_Screen To Be Validated</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Navigate to Loan Application Page</td>
                    </tr>
                    </tbody>
                  </Table>
                  <div className="col-md-5 ml-auto">
                    <Pagination>
                      <Pagination.Prev disabled/>
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item>{5}</Pagination.Item>
                      <Pagination.Next/>
                    </Pagination>
                  </div>
                </React.Fragment>
              </div>
            </div>

            <div className="card">
              <div className="card-header" onClick={this.setKey2}>
                Verification Point Mismatch
                <span className={"accordion-arrow " + (data.key2 === true && ('arrow-up'))}>
                  <span className="tag">2</span>
                  <IcomoonReact iconSet={iconSet} color="" size={8} icon="e-arrow-one"/>
                </span>
              </div>
              <div className={"card-body p-0 " + (data.key2 === true ? ('show') : ('d-none'))}>
                <React.Fragment>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Line No.</th>
                      <th>TC_Name</th>
                      <th>TC_Iteration</th>
                      <th>Task Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Generate Random Number</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Application Login</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Unsecured_Screen To Be Validated</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1.E2E_Sales Stage Preprod</td>
                      <td>1</td>
                      <td>Navigate to Loan Application Page</td>
                    </tr>
                    </tbody>
                  </Table>
                  <div className="col-md-5 ml-auto">
                    <Pagination>
                      <Pagination.Prev disabled/>
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item>{5}</Pagination.Item>
                      <Pagination.Next/>
                    </Pagination>
                  </div>
                </React.Fragment>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}


FailureSummeryModal.propTypes = {}

FailureSummeryModal.defaultProps = {}

export default FailureSummeryModal
