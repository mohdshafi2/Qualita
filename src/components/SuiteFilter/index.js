import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap';
import FilterModel from './FilterModel';
import DatePicker from '../DatePicker';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';
import './SuiteFilter.scss';

class SuiteFilter extends Component {
  render() {
    return (
      <div className="SuiteFilter">
        <ul className="list-style-none">
          <li className="p-0">
            <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-search"/>
          </li>
          <li className="_mydatepick">
            <DatePicker/>
          </li>
          <li>
            <FilterModel/>
          </li>
          <li>
            <div className="_moreDropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                  <IcomoonReact iconSet={iconSet} color={'#fff'} size={13} icon="e-more"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    option 1
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    option 2
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    option 3
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    option 4
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SuiteFilter
