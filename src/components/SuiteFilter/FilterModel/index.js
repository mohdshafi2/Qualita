import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import FilterAccordion from './FilterAccordion';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../fonts/selection';
import './FilterModel.scss'

function FilterModel() {
  const [show, setShow] = useState(false);

  const filterClose = () => setShow(false);
  const filterShow = () => setShow(true);

  return (
    <div className="FilterModel">

            <span onClick={filterShow}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} size={13} icon="e-filter"/>
              <div className="tag">2</div>
            </span>
      <Modal className="_filtermodel" show={show} onHide={filterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FilterAccordion/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Reset
          </Button>
          <Button variant="primary">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FilterModel
