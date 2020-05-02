import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Dropdown, Breadcrumb, InputGroup, FormControl, Pagination} from "react-bootstrap";

import ExportModel from "./ExportModel";
import TableConfigModal from "./TableConfigModal";
import FailureSummeryModal from "./FailureSummeryModal";
import IcomoonReact from 'icomoon-react';
import iconSet from '../../fonts/selection';

import './Sortpan.scss';

class Sortpan extends Component {
  constructor(props) {
    super(props);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
    this.handleClickTdTextExpand = this.handleClickTdTextExpand.bind(this);
    this.handleStepNav = this.handleStepNav.bind(this);
    this.handleTaskNav = this.handleTaskNav.bind(this);
    this.handleIterationNav = this.handleIterationNav.bind(this);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);

    this.state = {
      searchPan: false
    }
  }

  handleClickTdFilterDropdown() {
    this.props.onClickTdFilterDropdown();
  }

  handleClickTreeExpand(expand) {
    this.props.onClickTreeExpand(expand);
  }

  handleClickTdTextExpand() {
    this.props.onClickTdTextExpand();
  }

  handleStepNav(direction) {
    this.props.onClickStepNav(direction);
  }

  handleTaskNav(direction) {
    this.props.onClickTaskNav(direction);
  }

  handleIterationNav(direction) {
    this.props.onClickIterationNav(direction);
  }

  handleClickTdChkBox(tdname) {
    this.props.onClickTdChkBox(tdname);
  }

  handleClickResetTd() {
    this.props.onClickResetTd();
  }

  createBreadcrumb() {
    let {match} = this.props;
    let tcId = match.params.tcId, tciId = match.params.tciId;
    let tcLevel = JSON.parse(localStorage.getItem('tcLevel'));

    if (!tciId) {
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/suites">Suiteofsuites</Breadcrumb.Item>
          <Breadcrumb.Item active>SME_Merged</Breadcrumb.Item>
        </Breadcrumb>
      );
    } else {
      let expandedTopLvlTitle = tcLevel[tcId - 1].manualTCId;
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/suites">Suiteofsuites</Breadcrumb.Item>
          <Breadcrumb.Item href="/folder-tree">SME_Merged</Breadcrumb.Item>
          <Breadcrumb.Item active>{expandedTopLvlTitle}</Breadcrumb.Item>
        </Breadcrumb>
      );
    }
  }

  render() {
    const {searchPan} = this.state;
    let {match} = this.props;
    let tciId = match.params.tciId;

    return (
      <div className="Sortpan">
        <div className="_sort">
          {this.createBreadcrumb()}
          <div className="_sortfilter">
            <ul className="_list list-style">
              <li className="_items">
                <span onClick={() => this.handleClickTdFilterDropdown()}>
                  <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-filter"/>
                </span>
              </li>
              <li className="_items">
                <span onClick={() => this.setState({searchPan: !searchPan})}>
                  <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-search"/>
                </span>
              </li>
              {!tciId && <li className="_items">
                <span onClick={() => this.handleClickTdTextExpand()}>
                  <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-expand-show"/>
                </span>
              </li>}
              <li className="_items">
                <span onClick={() => this.handleClickTreeExpand(true)}>
                  <IcomoonReact iconSet={iconSet} color="" size={18} icon="e-expand"/>
                </span>
              </li>
              <li className="_items">
                <span onClick={() => this.handleClickTreeExpand(false)}>
                 <IcomoonReact iconSet={iconSet} color="" size={18} icon="e-collapose"/>
                </span>
              </li>

              {tciId &&
              <React.Fragment>
                <li className="_items">
                  <Pagination>
                    <Pagination.Prev onClick={() => this.handleStepNav('prev')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-one"/>
                    </Pagination.Prev>

                    <Pagination.Item>Steps</Pagination.Item>
                    <Pagination.Item active>1/<span>2</span></Pagination.Item>

                    <Pagination.Next onClick={() => this.handleStepNav('next')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-one"/>
                    </Pagination.Next>
                  </Pagination>
                </li>
                <li className="_items">
                  <Pagination>
                    <Pagination.Prev onClick={() => this.handleTaskNav('prev')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-two"/>
                    </Pagination.Prev>

                    <Pagination.Item>Tasks</Pagination.Item>
                    <Pagination.Item active>7/<span>8</span></Pagination.Item>

                    <Pagination.Next onClick={() => this.handleTaskNav('next')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-two"/>
                    </Pagination.Next>
                  </Pagination>
                </li>
                <li className="_items">
                  <Pagination>
                    <Pagination.Prev onClick={() => this.handleIterationNav('prev')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-three"/>
                    </Pagination.Prev>

                    <Pagination.Item>Iteration</Pagination.Item>
                    <Pagination.Item active>1/<span>1</span></Pagination.Item>

                    <Pagination.Next onClick={() => this.handleIterationNav('next')}>
                      <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-arrow-three"/>
                    </Pagination.Next>
                  </Pagination>
                </li>
              </React.Fragment>
              }

              <li className="_items">
                <div className="_moreDropdown">
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                      <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-more"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <ExportModel/>
                      <Dropdown.Item href="#/action-2">
                        <span>
                          <IcomoonReact iconSet={iconSet} color="" size={11} icon="e-login-jira"/>
                        </span>
                        Log JIRA Defect
                      </Dropdown.Item>
                      <TableConfigModal
                        trlist={this.props.trlist}
                        onClickTdChkBox={this.handleClickTdChkBox}
                        onClickResetTd={this.handleClickResetTd}
                      />
                      <FailureSummeryModal/>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {searchPan
          ? <div className="_searchPan">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span>
                    <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-search"/>
                  </span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" type="text" placeholder="Search"/>
              <InputGroup.Append>
                <InputGroup.Text>
                  <span>
                    <IcomoonReact iconSet={iconSet} color="" size={13} icon="e-close"/>
                  </span>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          : null
        }
      </div>
    );
  }
}

export default withRouter(Sortpan)
