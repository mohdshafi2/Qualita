import React, {Component} from 'react'
import {Container, Table} from 'react-bootstrap';
import IcomoonReact from 'icomoon-react';

import Multiselected from '../../../../components/Multiselected'
import Sortpan from '../../../../components/Sortpan';
import iconSet from '../../../../fonts/selection';
import PreviewModel from "../../../../components/PreviewModel";
import HmsCalculator from "../../../../components/Tools/HmsCalculator";

class Table2Grid extends Component {
  constructor(props) {
    super(props);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTrSelection = this.handleClickTrSelection.bind(this);
    this.handleStepNav = this.handleStepNav.bind(this);
    this.handleTaskNav = this.handleTaskNav.bind(this);
    this.handleIterationNav = this.handleIterationNav.bind(this);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);
  }

  handleExpandClick(e, l1TaskId, l2TaskId, tiId, l1StepId) {
    e.stopPropagation();
    this.props.onRowClick(l1TaskId, l2TaskId, tiId, l1StepId);
  }

  handleClickTdFilterDropdown() {
    this.props.onClickTdFilterDropdown();
  }

  handleClickTreeExpand(expand) {
    this.props.onClickTreeExpand(expand);
  }

  handleClickTrSelection(sidePanData) {
    this.props.onClickTrSelection(sidePanData);
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

  renderItem(taskLvl1) {
    const {trlist} = this.props;
    const {l2TaskData, taskIterationData, l1StepData, l2StepData} = this.props.state;
    let taskLvl1key = `${taskLvl1.l1TaskId}`;
    let itemStep = taskLvl1.taskIteration[0].step[0];
    let taskLvl1Filtered = l2TaskData.filter(el => el.l1TaskId === taskLvl1.l1TaskId);
    let sidePanData = {rowName: 'taskLvl1', spTitle: itemStep.action, spImage: itemStep.screenshot, ...taskLvl1};

    // Task Level 1
    const itemRows = [
      <tr
          key={'row-data-' + taskLvl1key}
          onClick={() => this.handleClickTrSelection(sidePanData)}
          className={`
        ${this.trClass(itemStep.status)} 
        ${this.expandClass(taskLvl1.expand)} 
        ${taskLvl1.selected && 'selected'}
        active
        row-level-3
        `}
      >
        <td>{itemStep.lineNo && itemStep.lineNo}</td>
        <td>
          {!taskLvl1Filtered.length && <span className="icon-status"></span>}
        </td>
        <td>
          <div className="padding-left">
            {taskLvl1Filtered.length > 0 ? <span className="tree-icon"
                                                 onClick={e => this.handleExpandClick(e, taskLvl1.l1TaskId)}><i></i></span> : ''}
            {/*{this.ifTreeButton(taskLvl1Filtered.length)}*/}
            step({itemStep.fdStepNo}) - {itemStep.action} {taskLvl1Filtered.length ? itemStep.param[0].value : null}
          </div>
        </td>
        <td className={trlist.tdData ? '' : 'd-none'}>
          {this.randerTdParams(itemStep.param, taskLvl1key)}
        </td>
        <td className={trlist.tdObject ? '' : 'd-none'}></td>
        <td className={trlist.tdScreenshot ? '' : 'd-none'}>
          {itemStep.screenshot &&
          <div className="screenshot-attach">
            <PreviewModel imgUrl={itemStep.screenshot}/>
          </div>
          }
        </td>
        <td className={trlist.tdEtime ? '' : 'd-none'}>
          <HmsCalculator executionTime={itemStep.executionTime}/>
        </td>
      </tr>
    ];

    // Task Level 2
    if (taskLvl1.expand && taskLvl1Filtered.length) {
      taskLvl1Filtered.forEach(taskLvl2 => {
        let taskLvl2Filtered = taskIterationData.filter(el => el.l2TaskId === taskLvl2.l2TaskId);
        let taskLvl2key = `${taskLvl1.l1TaskId + '_' + taskLvl2.l2TaskId}`;
        if (taskLvl2Filtered && taskLvl2Filtered.length) {
          let sidePanData = {rowName: 'taskLvl2', spTitle: taskLvl2.name, spImage: taskLvl2.screenshot, ...taskLvl2};
          itemRows.push(
              <tr
                  key={"row-data-" + taskLvl2key}
                  onClick={() => this.handleClickTrSelection(sidePanData)}
                  className={`
              ${this.trClass(taskLvl2.status)} 
              ${this.expandClass(taskLvl2.expand)}
              ${taskLvl2.selected && 'selected'} 
              active
              row-level-4
              `}
              >
                <td>{taskLvl2.lineNo && taskLvl2.lineNo}</td>
                <td><span className="icon-status"></span></td>
                <td

                >
                  <div className="padding-left">
                    {taskLvl2Filtered.length > 0 ? <span className="tree-icon"
                                                         onClick={e => this.handleExpandClick(e, taskLvl1.l1TaskId, taskLvl2.l2TaskId)}><i></i></span> : ''}
                    {/*{this.ifTreeButton(taskLvl2Filtered.length)}*/}
                    task - {taskLvl2.name}
                  </div>
                </td>
                <td className={trlist.tdData ? '' : 'd-none'}></td>
                <td className={trlist.tdObject ? '' : 'd-none'}></td>
                <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                  {taskLvl2.screenshot &&
                  <div className="screenshot-attach">
                    <PreviewModel imgUrl={taskLvl2.screenshot}/>
                  </div>
                  }
                </td>
                <td className={trlist.tdEtime ? '' : 'd-none'}>
                  <HmsCalculator executionTime={taskLvl2.executionTime}/>
                </td>
              </tr>
          );
        } else {
          let taskLvl2Step = taskLvl2.taskIteration[0].step[0];
          let sidePanData = {
            rowName: 'taskLvl2Step',
            spTitle: taskLvl2Step.action,
            spImage: taskLvl2Step.screenshot, ...taskLvl2
          };
          itemRows.push(
              <tr
                  key={"row-data-" + taskLvl1.l1TaskId + '_' + taskLvl2.l2TaskId}
                  onClick={() => this.handleClickTrSelection(sidePanData)}
                  className={`
              ${this.trClass(taskLvl2.status)} 
              ${this.expandClass(taskLvl2.expand)} 
              ${taskLvl2.selected && 'selected'} 
              active
              row-level-4
              `}
              >
                <td>{taskLvl2Step.lineNo && taskLvl2Step.lineNo}</td>
                <td>
                  <span className="icon-status"></span>
                </td>
                <td>
                  <div className="padding-left">
                    step({taskLvl2Step.fdStepNo}) - {taskLvl2Step.action}
                    {taskLvl2Step.param[0] ? taskLvl2Step.param[0].value : null}
                  </div>
                </td>
                <td className={trlist.tdData ? '' : 'd-none'}>
                  {this.randerTdParams(taskLvl2Step.param, taskLvl2key)}
                </td>
                <td className={trlist.tdObject ? '' : 'd-none'}></td>
                <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                  {taskLvl2Step.screenshot &&
                  <div className="screenshot-attach">
                    <PreviewModel imgUrl={taskLvl2Step.screenshot}/>
                  </div>
                  }
                </td>
                <td className={trlist.tdEtime ? '' : 'd-none'}>
                  <HmsCalculator executionTime={taskLvl2Step.executionTime}/>
                </td>
              </tr>
          );
        }

        // Task Iteration Level
        if (taskLvl2.expand && taskLvl2Filtered.length) {
          taskLvl2Filtered.forEach(taskIteration => {
            let taskIterationKey = `${taskLvl1.l1TaskId + '_' + taskLvl2.l2TaskId + '_' + taskIteration.tiId}`;
            let sidePanData = {
              rowName: 'taskIteration',
              spTitle: taskIteration.iterationNo,
              spImage: taskIteration.screenshot, ...taskIteration
            };
            itemRows.push(
                <tr
                    key={"row-data-" + taskIterationKey}
                    onClick={() => this.handleClickTrSelection(sidePanData)}
                    className={`
                ${this.trClass(taskIteration.status)} 
                ${this.expandClass(taskIteration.expand)} 
                ${taskIteration.selected && 'selected'} 
                active
                row-level-5`}
                >
                  <td>{taskIteration.lineNo && taskIteration.lineNo}</td>
                  <td><span className="icon-status"></span></td>
                  <td>
                    <div className="padding-left">
                      {taskLvl2Filtered.length > 0 ? <span className="tree-icon"
                                                           onClick={e => this.handleExpandClick(e, taskLvl1.l1TaskId, taskLvl2.l2TaskId, taskIteration.tiId)}><i></i></span> : ''}
                      {/*{this.ifTreeButton(taskLvl2Filtered.length)}*/}
                      tIteration - {taskIteration.iterationNo}
                    </div>
                  </td>
                  <td className={trlist.tdData ? '' : 'd-none'}>
                    {this.randerTdParams(taskIteration.param, taskIterationKey)}
                  </td>
                  <td className={trlist.tdObject ? '' : 'd-none'}></td>
                  <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                    {taskIteration.screenshot &&
                    <div className="screenshot-attach">
                      <PreviewModel imgUrl={taskIteration.screenshot}/>
                    </div>
                    }
                  </td>
                  <td className={trlist.tdEtime ? '' : 'd-none'}>
                    <HmsCalculator executionTime={taskIteration.executionTime}/>
                  </td>
                </tr>
            );

            // Step 1 Level
            let stepLvl1Filtered = l1StepData.filter(el => el.tiId === taskIteration.tiId);
            if (taskIteration.expand && stepLvl1Filtered.length) {
              stepLvl1Filtered.forEach(stepLvl1 => {
                let stepLvl1key = `${taskLvl1.l1TaskId + '_' + taskLvl2.l2TaskId + '_' + taskIteration.tiId + '_' + stepLvl1.l1StepId}`;
                let stepLvl2Filtered = l2StepData.filter(el => (el.l1StepId === stepLvl1.l1StepId) && (el.tiId === taskIteration.tiId));
                let sidePanData = {
                  rowName: 'stepLvl1',
                  spTitle: stepLvl1.action,
                  spImage: stepLvl1.screenshot, ...stepLvl1
                };
                itemRows.push(
                    <tr
                        key={"row-data-" + stepLvl1key}
                        onClick={() => this.handleClickTrSelection(sidePanData)}
                        className={`
                    ${this.trClass(stepLvl1.status)} 
                    ${this.expandClass(stepLvl1.expand)} 
                    ${stepLvl1.selected && 'selected'} 
                    active
                    row-level-6
                    `}
                    >
                      <td>{stepLvl1.lineNo && stepLvl1.lineNo}</td>
                      <td>{!stepLvl2Filtered.length && <span className="icon-status"></span>}</td>
                      <td>
                        <div className="padding-left">
                          {stepLvl2Filtered.length > 0 ? <span className="tree-icon"
                                                               onClick={e => this.handleExpandClick(e, taskLvl1.l1TaskId, taskLvl2.l2TaskId, taskIteration.tiId, stepLvl1.l1StepId)}><i></i></span> : ''}
                          {/*{this.ifTreeButton(stepLvl2Filtered.length)}*/}
                          step({stepLvl1.fdStepNo}) - {stepLvl1.action}
                        </div>
                      </td>
                      <td className={trlist.tdData ? '' : 'd-none'}>
                        {this.randerTdParams(stepLvl1.param, stepLvl1key)}
                      </td>
                      <td className={trlist.tdObject ? '' : 'd-none'}></td>
                      <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                        {stepLvl1.screenshot &&
                        <div className="screenshot-attach">
                          <PreviewModel imgUrl={stepLvl1.screenshot}/>
                        </div>
                        }
                      </td>
                      <td className={trlist.tdEtime ? '' : 'd-none'}>
                        <HmsCalculator executionTime={stepLvl1.executionTime}/>
                      </td>
                    </tr>
                );

                // Step 2 Level
                if (stepLvl1.expand && stepLvl2Filtered.length) {
                  stepLvl2Filtered.forEach(stepLvl2 => {
                    let stepLvl2key = `${taskLvl1.l1TaskId + '_' + taskLvl2.l2TaskId + '_' + taskIteration.tiId + '_' + stepLvl1.l1StepId + '_' + stepLvl2.l2StepId}`;
                    let sidePanData = {
                      rowName: 'stepLvl2',
                      spTitle: stepLvl2.action,
                      spImage: stepLvl2.screenshot, ...stepLvl2
                    };
                    itemRows.push(
                        <tr
                            key={"row-data-" + stepLvl2key}
                            onClick={() => this.handleClickTrSelection(sidePanData)}
                            className={`
                        ${this.trClass(stepLvl2.status)} 
                        ${this.expandClass(stepLvl2.expand)} 
                        ${stepLvl2.selected && 'selected'} 
                        active
                        row-level-7`}
                        >
                          <td>{stepLvl2.lineNo && stepLvl2.lineNo}</td>
                          <td>{this.matchCondition(stepLvl2.action) && <span className="icon-status"></span>}</td>
                          <td>
                            <div className="padding-left">
                              step({stepLvl2.fdStepNo}) - {stepLvl2.action}
                            </div>
                          </td>
                          <td className={trlist.tdData ? '' : 'd-none'}>
                            {this.randerTdParams(stepLvl2.param, stepLvl2key)}
                          </td>
                          <td className={trlist.tdObject ? '' : 'd-none'}></td>
                          <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                            {stepLvl2.screenshot &&
                            <div className="screenshot-attach">
                              <PreviewModel imgUrl={stepLvl2.screenshot}/>
                            </div>
                            }
                          </td>
                          <td className={trlist.tdEtime ? '' : 'd-none'}>
                            <HmsCalculator executionTime={stepLvl2.executionTime}/>
                          </td>
                        </tr>
                    );
                  })
                }
              })
            }
          })
        }
      })
    }

    return itemRows;
  }

  randerTdParams(arr, key) {
    if (!arr) {
      return;
    }
    let returnArr = [];
    arr.forEach((item, i) => {
      const renderedText = <span key={'param' + key + '' + i}>{item.value}<span>({item.name})</span> </span>;
      returnArr = returnArr.concat(renderedText);
    });
    return returnArr;
  }

  // check if condition to show/hide status
  matchCondition = (str) => !(str === 'IF' || str === 'ELSE IF' || str === 'ELSE' || str === 'END IF');

  //calculate status class
  trClass = status => status === 0 ? 'status-passed' : status === 1 ? 'status-failed' : status === 2 ? 'status-defects' : 'status-not-executed';
  // calculate expand/collapse class
  expandClass = expand => expand ? 'tree-collapse' : 'tree-expand';
  // calculate expand button
  ifTreeButton = count => count > 0 ? <span className="tree-icon"><i></i></span> : '';

  handleTableScroll(e) {
    const el = e.target,
        sT = el.scrollTop;
    let trHead = el.querySelector('table thead');
    trHead.style.transform = `translateY(${sT}px)`;
  }

  render() {
    const {tciterationData, l1TaskData, options} = this.props.state;
    const {trlist} = this.props;
    let levelRows = [];
    let sidePanData = {
      rowName: 'tciterationData',
      spTitle: tciterationData.iterationNo,
      spImage: tciterationData.screenshot, ...tciterationData
    };
    l1TaskData.forEach(item => {
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
                  onClickStepNav={this.handleStepNav}
                  onClickTaskNav={this.handleTaskNav}
                  onClickIterationNav={this.handleIterationNav}
                  onClickTdChkBox={this.handleClickTdChkBox}
                  onClickResetTd={this.handleClickResetTd}
              />
              <div className="_tableMain" /*onScroll={e => this.handleTableScroll(e)}*/>
                <Table responsive size="sm" className="table2">
                  <thead>
                  <tr>
                    <th width={70}>No.</th>
                    <th width={110}>Status
                      {/* <span className="float-right">
                      <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-arrow-down"/>
                    </span> */}
                    </th>
                    <th>Hierarchy</th>
                    <th className={trlist.tdData ? '' : 'd-none'}>Data</th>
                    <th width={150} className={trlist.tdObject ? '' : 'd-none'}>Object</th>
                    <th width={130} className={trlist.tdScreenshot ? '' : 'd-none'}>Screenshot</th>
                    <th width={115} className={trlist.tdEtime ? '' : 'd-none'}>Execution Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  {options.trFilterDropdown ?
                      <Multiselected otherState={this.props.otherState} trlist={this.props.trlist}/> : null}
                  <tr
                      onClick={() => this.handleClickTrSelection(sidePanData)}
                      className={`
                  ${this.trClass(tciterationData.status)} 
                  ${this.expandClass((tciterationData.expand))} 
                  ${tciterationData.selected && 'selected'} 
                  active
                  row-level-1
                  `}
                  >
                    <td>{tciterationData.lineNo && tciterationData.lineNo}</td>
                    <td><span className="icon-status"></span></td>
                    <td>
                      <div className="padding-left">
                        {l1TaskData.length > 0 ? <span className="tree-icon"
                                                       onClick={e => this.handleExpandClick(e)}><i></i></span> : ''}
                        {/*{this.ifTreeButton(l1TaskData.length)}*/}
                        tcIteration - {tciterationData.iterationNo}
                      </div>
                    </td>
                    <td className={trlist.tdData ? '' : 'd-none'}></td>
                    <td className={trlist.tdObject ? '' : 'd-none'}></td>
                    <td className={trlist.tdScreenshot ? '' : 'd-none'}>
                      {tciterationData.screenshot &&
                      <div className="screenshot-attach">
                        <PreviewModel imgUrl={tciterationData.screenshot}/>
                      </div>
                      }
                    </td>
                    <td className={trlist.tdEtime ? '' : 'd-none'}>
                      <HmsCalculator executionTime={tciterationData.executionTime}/>
                    </td>
                  </tr>
                  {tciterationData.expand && levelRows}
                  <tr className="status-loading active row-level-1">
                    <td>11</td>
                    <td><span className="icon-status"></span></td>
                    <td>
                      <div className="padding-left">
                        dummy text
                      </div>
                    </td>
                    <td className={trlist.tdData ? '' : 'd-none'}></td>
                    <td className={trlist.tdObject ? '' : 'd-none'}></td>
                    <td className={trlist.tdScreenshot ? '' : 'd-none'}></td>
                    <td className={trlist.tdEtime ? '' : 'd-none'}></td>
                  </tr>
                  <tr className="status-loading row-level-1">
                    <td>11</td>
                    <td></td>
                    <td>
                      <div className="padding-left">
                        dummy text
                      </div>
                    </td>
                    <td className={trlist.tdData ? '' : 'd-none'}></td>
                    <td className={trlist.tdObject ? '' : 'd-none'}></td>
                    <td className={trlist.tdScreenshot ? '' : 'd-none'}></td>
                    <td className={trlist.tdEtime ? '' : 'd-none'}></td>
                  </tr>
                  <tr className="status-loading row-level-1">
                    <td>11</td>
                    <td></td>
                    <td>
                      <div className="padding-left">
                        dummy text
                      </div>
                    </td>
                    <td className={trlist.tdData ? '' : 'd-none'}></td>
                    <td className={trlist.tdObject ? '' : 'd-none'}></td>
                    <td className={trlist.tdScreenshot ? '' : 'd-none'}></td>
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

export default Table2Grid;
