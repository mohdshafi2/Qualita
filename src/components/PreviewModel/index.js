import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import IcomoonReact from 'icomoon-react';

import iconSet from '../../fonts/selection';
import './PreviewModel.scss'

function PreviewModel (props) {
  const [show, setShow] = useState(false);

  const previewhandleClose = () => setShow(false);
  const previewhandleShow = () => setShow(true);

  return (
    <div className="PreviewModel">
      <div className="preview__pic" onClick={previewhandleShow}>
        <img src={props.imgUrl} alt="screenshots"/>
      </div>

      <Modal className="preview_panel" size="lg" show={show} onHide={previewhandleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <img src={props.imgUrl} alt="screenshots"/>
          </div>
          <ul className="_pagination">
            <li>
              <IcomoonReact iconSet={iconSet} color={'#fff'} size={14} icon="e-arrow-one" />
            </li>
            <li>
              <p>ComputeExpression</p>
            </li>
            <li>
              <IcomoonReact iconSet={iconSet} color={'#fff'} size={14} icon="e-arrow-one" />
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PreviewModel
