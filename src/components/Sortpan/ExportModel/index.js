import React, {useState} from 'react'
import IcomoonReact from "icomoon-react";
import {Modal} from "react-bootstrap";
import Dropdown from "react-bootstrap/esm/Dropdown";
import iconSet from "../../../fonts/selection";
import './ExportModel.scss';

function ExportModel() {
  const [show, setShow] = useState(false);
  const [screenshot, setScreenshot] = useState(false);

  const exportClose = () => setShow(false);
  const exportShow = () => setShow(true);

  const showScreenshot = () => setScreenshot(!screenshot);

  return (
    <>
      <Dropdown.Item onClick={exportShow}>
        <span>
          <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-export-report"/>
        </span>
        Export Report
      </Dropdown.Item>

      <Modal className="dropdown-modalBox export-report" show={show} onHide={exportClose}>
        <Modal.Body>
          <h4>Select Assets</h4>
          <div className="assets-content">
            <label className="checkbox-container">Logs
              <input type="checkbox"/>
              <span className="checkmark"/>
            </label>
            <label className="checkbox-container">Screenshots
              <input type="checkbox" defaultChecked={screenshot} onChange={showScreenshot}/>
              <span className="checkmark"/>
            </label>
            {screenshot && (
              <div className="child-content">
                <label className="radio-container">All
                  <input type="radio" name="screenshot"/>
                  <span className="checkmark"/>
                </label>
                <label className="radio-container">Failed Steps
                  <input type="radio" name="screenshot"/>
                  <span className="checkmark"/>
                </label>
              </div>
            )}
          </div>
          <h4>Format</h4>
          <div className="assets-content">
            <label className="radio-container">.pdf
              <input type="radio" name="formatdata"/>
              <span className="checkmark"/>
            </label>
            <label className="radio-container">.xlsx
              <input type="radio" name="formatdata"/>
              <span className="checkmark"/>
            </label>
          </div>
          <h4>Share Link <span className="copy-link">Copy</span></h4>
          <div className="link-box">
            Qualitia/RTR/SEM_Merged
          </div>
        </Modal.Body>
        <Modal.Footer className="text-center justify-content-center" onClick={exportClose}>
          <span>Export</span>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExportModel;
