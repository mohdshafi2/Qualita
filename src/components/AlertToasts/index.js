import React, {useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';
import './AlertToasts.scss';

function AlertToasts() {
  return (
    <div className="AlertToasts">
      <div className="alertToats-icon">
        <IcomoonReact iconSet={iconSet} color="" size={20} icon="e-warning"/>
        <span className="tag">2</span>
      </div>
      <Toast>
        <Toast.Header>
          Alert
        </Toast.Header>
        <Toast.Body>
          <ul className="list-style-none">
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
            <li>
              <p><b>Action:</b> ComparePattern Status : Passed Message : The data
                'pattern' matches the Pattern 'pattern' With CaseSensitive
                comparison as : true</p>
              <span>2 hour ago</span>
            </li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default AlertToasts

