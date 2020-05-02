import React, {Component} from 'react'
import {Container, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import IcomoonReact from 'icomoon-react';

import HmsCalculator from "../../../components/Tools/HmsCalculator";
import Multiselected from '../../../components/Multiselected'
import Sortpan from '../../../components/Sortpan';
import iconSet from '../../../fonts/selection';
import '../Table.scss'

class TableGrid extends Component {
  constructor(props) {
    super(props);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTdTextExpand = this.handleClickTdTextExpand.bind(this);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);

    this.state = {
      'truncateActive': true
    }
  }

  handleClickTdFilterDropdown() {
    this.props.onClickTdFilterDropdown();
  }

  handleClickTreeExpand(expand) {
    this.props.onClickTreeExpand(expand);
  }

  handleClickTdTextExpand() {
    this.setState({
      ...this.state,
      truncateActive: !this.state.truncateActive
    });
  }

  handleClickTdChkBox(tdname) {
    this.props.onClickTdChkBox(tdname);
  }

  handleClickResetTd() {
    this.props.onClickResetTd();
  }

  renderTooltip(text, props) {
    return <Tooltip id={props}>{text}</Tooltip>;
  }

  handleTableScroll(e) {
    const el = e.target,
        sT = el.scrollTop;
    let trHead = el.querySelector('table thead');
    trHead.style.transform = `translateY(${sT}px)`;
  }

  renderItem(item) {
    const {trlist} = this.props;
    let trClass = (status) => status === 0 ? 'status-passed' : status === 1 ? 'status-failed' : status === 2 ? 'status-defects' : 'status-not-executed';
    // filter level 2 wrt this id
    let childlvl2 = this.props.lvl2data.filter(el => el.l1id === item.cid);
    let ifTreeButton = childlvl2.length > 0 ? <span className="tree-icon"><i></i></span> : '';
    // calculate expand/collapse class
    let expandClass = item.expand ? 'tree-collapse' : 'tree-expand';
    // level 1 row
    const itemRows = [
      <tr
          key={"row-data-" + item.cid}
          className={`${trClass(+item.status)} ${expandClass} active row-level-1`}
      >
        <td>
          <div className="status-iteration">
            <span className="icon-status"></span>
            <p className="iteration-text">{item.fdByaCount}</p>
          </div>
        </td>
        <td className="td-trunncate">
          <NavLink className="padding-left" to={`/folder-tree/${item.cid}`}>
            {ifTreeButton}
            {this.state.truncateActive ?
                <OverlayTrigger key={"ot1-" + item.cid} placement="bottom-start" delay={{show: 500, hide: 400}}
                                overlay={this.renderTooltip(item.tcname, "ot1-" + item.cid)}>
                  <span>{item.tcname}</span>
                </OverlayTrigger>
                : <span>{item.tcname}</span>
            }
          </NavLink>
        </td>
        <td className={trlist.tdModule ? '' : 'd-none'}>{item.desc}</td>
        <td className={trlist.tdEpic ? '' : 'd-none'}>{item.epic}</td>
        <td className={trlist.tdStory ? 'td-trunncate' : 'td-trunncate d-none'}>
          {this.state.truncateActive ?
              <OverlayTrigger key={"ot2-" + item.cid} placement="bottom-start" delay={{show: 250, hide: 400}}
                              overlay={this.renderTooltip(item.story, "ot2-" + item.cid)}>
                <span>{item.story}</span>
              </OverlayTrigger>
              :
              <span>{item.story}</span>
          }
        </td>
        <td className={trlist.tdScenario ? '' : 'd-none'}>{item.scenarioName}</td>
        <td className={trlist.tdMtcid ? '' : 'd-none'}>{item.manualTCId}</td>
        <td className={trlist.tdEtime ? '' : 'd-none'}><HmsCalculator executionTime={item.executionTime}/></td>
      </tr>
    ];

    // level 2 row
    if (item.expand && childlvl2.length) {
      // if (childlvl2.length) {
      childlvl2.forEach(iteml2 => {
        itemRows.push(
            <tr
                key={"re" + item.cid + '_' + iteml2.cid}
                className={`${trClass(+iteml2.status)} active row-level-2`}
            >
              <td><span className="icon-status float-left pl-1"></span></td>
              <td>
                <NavLink className="padding-left" to={`/folder-tree/${item.cid}/${iteml2.cid}`}>
                  {iteml2.iterationNo}
                  <span className="float-right">
                    <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-arrow-export"/>
                  </span>
                </NavLink>
              </td>
              <td className={trlist.tdModule ? '' : 'd-none'}></td>
              <td className={trlist.tdEpic ? '' : 'd-none'}></td>
              <td className={trlist.tdStory ? '' : 'd-none'}></td>
              <td className={trlist.tdScenario ? '' : 'd-none'}></td>
              <td className={trlist.tdMtcid ? '' : 'd-none'}></td>
              <td className={trlist.tdEtime ? '' : 'd-none'}></td>
            </tr>
        );
      })
    }

    return itemRows;
  }

  render() {
    let levelRows = [];
    const {lvl1data, trlist} = this.props;

    lvl1data.forEach(item => {
      const perItemRows = this.renderItem(item);
      levelRows = levelRows.concat(perItemRows);
    });

    return (
        <div className="Table">
          <section>
            <Container>
              <Sortpan
                  trlist={this.props.trlist}
                  onClickTdFilterDropdown={this.handleClickTdFilterDropdown}
                  onClickTreeExpand={this.handleClickTreeExpand}
                  onClickTdTextExpand={this.handleClickTdTextExpand}
                  onClickTdChkBox={this.handleClickTdChkBox}
                  onClickResetTd={this.handleClickResetTd}
              />
              <div className="_tableMain" /*onScroll={e => this.handleTableScroll(e)}*/>
                <Table responsive size="sm" className={this.state.truncateActive ? 'truncate' : ''}>
                  <thead>
                  <tr>
                    <th width={110}>Status
                      {/* <span className="float-right">
                      <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-arrow-down"/>
                    </span> */}
                    </th>
                    <th>Hierarchy</th>
                    <th width={110} className={trlist.tdModule ? '' : 'd-none'}>Module</th>
                    <th width={110} className={trlist.tdEpic ? '' : 'd-none'}>Epic</th>
                    <th className={trlist.tdStory ? '' : 'd-none'}>Story</th>
                    <th width={110} className={trlist.tdScenario ? '' : 'd-none'}>Scenario Name</th>
                    <th width={130} className={trlist.tdMtcid ? '' : 'd-none'}>Manual TC ID</th>
                    <th width={110} className={trlist.tdEtime ? '' : 'd-none'}>Execution Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.otherState.trFilterDropdown ?
                      <Multiselected otherState={this.props.otherState} trlist={trlist}/> : null}
                  {levelRows}
                  {/*Dummy Row for presentation*/}
                  <tr className="status-loading selected row-level-1">
                    <td><span className="icon-status"></span></td>
                    <td>
                      <NavLink className="padding-left" to="">
                        dummy text
                      </NavLink>
                    </td>
                    <td className={trlist.tdModule ? '' : 'd-none'}></td>
                    <td className={trlist.tdEpic ? '' : 'd-none'}></td>
                    <td className={trlist.tdStory ? '' : 'd-none'}></td>
                    <td className={trlist.tdScenario ? '' : 'd-none'}></td>
                    <td className={trlist.tdMtcid ? '' : 'd-none'}></td>
                    <td className={trlist.tdEtime ? '' : 'd-none'}></td>
                  </tr>
                  </tbody>
                </Table>
              </div>
            </Container>
          </section>
        </div>
    );
  }
}

export default TableGrid;
