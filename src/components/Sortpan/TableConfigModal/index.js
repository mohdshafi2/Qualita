import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import IcomoonReact from 'icomoon-react';
import {Button, Modal} from 'react-bootstrap';
import iconSet from '../../../fonts/selection';
import './TableConfigModal.scss';

class TableConfigModal extends Component {
  state = {
    modelShow: false,
  };

  handleClickTableConfig(state) {
    this.setState({
      ...this.state,
      modelShow: state
    })
  }

  handleClickTdChkBox(tdname) {
    this.props.onClickTdChkBox(tdname);
  }

  handleClickResetTd() {
    this.props.onClickResetTd();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.trlist !== prevProps.trlist) {
      this.fetchData(this.props.userID);
    }
  }

  handleClickApply() {
    this.setState({
      ...this.state,
      trlist: ['tdData', 'tdObject', 'tdScreenshot', 'tdModule', 'tdEpic', 'tdStory', 'tdScenario', 'tdMtcid', 'tdEtime']
    })
  }

  render() {
    const {match, trlist} = this.props;
    const {modelShow} = this.state;

    return (
      <Fragment>
        <Dropdown.Item onClick={() => this.handleClickTableConfig(true)}>
          <span>
            <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-table-config"/>
          </span>
          Table Config
        </Dropdown.Item>

        <Modal className="dropdown-modalBox table-config" show={modelShow}
               onHide={() => this.handleClickTableConfig(false)}>
          <Modal.Body>
            <h4>Table Configuration</h4>
            {modelShow && (
              <div className="assets-content">
                {match.params.tciId &&
                <React.Fragment>
                  <label className="checkbox-container">Data
                    <input type="checkbox" name="tdData" value="tdData" checked={trlist.tdData}
                           onChange={() => this.handleClickTdChkBox('tdData')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Object
                    <input type="checkbox" name="tdObject" value="tdObject" checked={trlist.tdObject}
                           onChange={() => this.handleClickTdChkBox('tdObject')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Screenshot
                    <input type="checkbox" name="tdScreenshot" value="tdScreenshot"
                           checked={trlist.tdScreenshot}
                           onChange={() => this.handleClickTdChkBox('tdScreenshot')}
                    />
                    <span className="checkmark"/>
                  </label>
                </React.Fragment>
                }
                {!match.params.tciId &&
                <React.Fragment>
                  <label className="checkbox-container">Module
                    <input type="checkbox" name="tdModule" value="tdModule" checked={trlist.tdModule}
                           onChange={() => this.handleClickTdChkBox('tdModule')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Epic
                    <input type="checkbox" name="tdEpic" value="tdEpic" checked={trlist.tdEpic}
                           onChange={() => this.handleClickTdChkBox('tdEpic')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Story
                    <input type="checkbox" name="tdStory" value="tdStory" checked={trlist.tdStory}
                           onChange={() => this.handleClickTdChkBox('tdStory')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Scenario Name
                    <input type="checkbox" name="tdScenario" value="tdScenario" checked={trlist.tdScenario}
                           onChange={() => this.handleClickTdChkBox('tdScenario')}/>
                    <span className="checkmark"/>
                  </label>
                  <label className="checkbox-container">Manual TC ID
                    <input type="checkbox" name="tdMtcid" value="tdMtcid" checked={trlist.tdMtcid}
                           onChange={() => this.handleClickTdChkBox('tdMtcid')}/>
                    <span className="checkmark"/>
                  </label>
                </React.Fragment>
                }
                <label className="checkbox-container">Execution Time
                  <input type="checkbox" name="tdEtime" value="tdEtime" checked={trlist.tdEtime}
                         onChange={() => this.handleClickTdChkBox('tdEtime')}/>
                  <span className="checkmark"/>
                </label>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="col-md-6">
              <Button variant="link" onClick={() => this.handleClickResetTd()}>
                Reset
              </Button>
            </div>
            <div className="col-md-6">
              <Button variant="link apply" onClick={() => this.handleClickTableConfig(false)}>
                Done
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }

}

export default withRouter(TableConfigModal);
