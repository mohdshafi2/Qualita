import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Gridpanel from '../../../components/Gridpanel';
import Sidepan from '../../../components/Sidepan';
import Loadalert from '../../../components/Loadalert';
import TableViewDetailGrid from './TableViewDetailGrid'

export class TableLevelTwo extends Component {
  constructor(props) {
    super(props);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
    this.handleClickTrSelection = this.handleClickTrSelection.bind(this);
    this.handleStepNav = this.handleStepNav.bind(this);
    this.handleTaskNav = this.handleTaskNav.bind(this);
    this.handleIterationNav = this.handleIterationNav.bind(this);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);

    this.state = {
      tciterationData: {},
      l1TaskData: [],
      l2TaskData: [],
      taskIterationData: [],
      l1StepData: [],
      l2StepData: [],
      selectedRow: {},
      options: {
        'trFilterDropdown': false,
        'expandAllStatus': -1,
        'allStepLength': 0
      }
    }
  }

  mountAllState() {
    let {match} = this.props;
    let tcId = match.params.tcId, tciId = match.params.tciId;
    let tciterationData = {}, l1TaskData = [], l2TaskData = [], taskIterationData = [], l1StepData = [],
      l2StepData = [];
    fetch(`/data/${tcId}/ITR_${tciId}/${tciId}.json`)
      .then(res => res.json())
      .then(data => data.tciteration)
      .then(data => {
        let hierarchyData = data;
        let counter = 0;
        let taskArr = hierarchyData.task;
        for (let a = 0; a < taskArr.length; a++) {
          let taskIterationArr = taskArr[a].taskIteration;
          if (taskIterationArr.length) {
            for (let b = 0; b < taskIterationArr.length; b++) {
              let stepArr = taskIterationArr[b].step;
              if (stepArr.length) {
                for (let c = 0; c < stepArr.length; c++) {
                  counter = counter + 1;
                  stepArr[c].fdStepNo = counter;
                }
              }
            }
          }
        }
        this.setState({
          ...this.state,
          options: {
            allStepLength: counter
          }
        });
        return hierarchyData;
      })
      .then(hierarchy => {
        const {task, ...others} = hierarchy;
        const obj = {expand: true, selected: true};
        tciterationData = {...others, ...obj};

        if (task.length) {
          // create l1TaskData, l2TaskData, taskIterationData, l1StepData, l2StepData
          for (let i = 0; i < task.length; i++) {
            let iplus = i + 1;
            if (task[i].parentID === '') {
              const extraField1 = {l1TaskId: iplus, expand: false, selected: false};
              let obj2 = {...extraField1, ...task[i]};
              l1TaskData.push(obj2);

              for (let j = 0; j < task.length; j++) {
                let jplus = j + 1;
                if (task[j].parentID === task[i].id) {
                  let fdTaskNo = null;
                  if (task[j].taskIteration.length > 1) {
                    fdTaskNo = jplus;
                  }
                  const extraField2 = {l1TaskId: iplus, l2TaskId: jplus, expand: false, selected: false, fdTaskNo};
                  let obj3 = {...extraField2, ...task[j]};
                  let {taskIteration} = task[j];
                  l2TaskData.push(obj3);

                  if (taskIteration && taskIteration.length > 1) {
                    for (let k = 0; k < taskIteration.length; k++) {
                      let kplus = k + 1;
                      const extraField3 = {l2TaskId: jplus, tiId: kplus, expand: false, selected: false};
                      const {step, ...others1} = taskIteration[k];
                      let obj4 = {...extraField3, ...others1};
                      taskIterationData.push(obj4);

                      if (step && step.length > 0) {
                        for (let l = 0; l < step.length; l++) {
                          let lplus = l + 1;
                          if (step[l].parentID === '') {
                            const extraField4 = {tiId: kplus, l1StepId: lplus, expand: false, selected: false};
                            let obj5 = {...extraField4, ...step[l]};
                            l1StepData.push(obj5);

                            for (let m = 0; m < step.length; m++) {
                              let mplus = m + 1;
                              if (step[m].parentID === step[l].id) {
                                const extraField5 = {
                                  tiId: kplus,
                                  l1StepId: lplus,
                                  l2StepId: mplus,
                                  expand: false,
                                  selected: false
                                };
                                let obj6 = {...extraField5, ...step[m]};
                                l2StepData.push(obj6);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          tciterationData,
          l1TaskData,
          l2TaskData,
          taskIterationData,
          l1StepData,
          l2StepData,
          selectedRow: tciterationData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.mountAllState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.tciId !== prevProps.match.params.tciId) {
      this.mountAllState();
    }
  }

  handleRowClick = (l1TaskId, l2TaskId, tiId, l1StepId) => {
    let newState = Object.assign({}, this.state);

    if (l1TaskId && l2TaskId && tiId && l1StepId) {
      let index = newState.l1StepData.findIndex(item => (item.l1StepId === l1StepId && item.tiId === tiId));
      newState.l1StepData[index].expand = !newState.l1StepData[index].expand;
    } else if (l1TaskId && l2TaskId && tiId) {
      let index = newState.taskIterationData.findIndex(item => item.tiId === tiId);
      newState.taskIterationData[index].expand = !newState.taskIterationData[index].expand;
    } else if (l1TaskId && l2TaskId) {
      let index = newState.l2TaskData.findIndex(item => item.l2TaskId === l2TaskId);
      newState.l2TaskData[index].expand = !newState.l2TaskData[index].expand;
    } else if (l1TaskId) {
      let index = newState.l1TaskData.findIndex(item => item.l1TaskId === l1TaskId);
      newState.l1TaskData[index].expand = !newState.l1TaskData[index].expand;
    } else {
      newState.tciterationData.expand = !newState.tciterationData.expand;
    }

    newState.options.expandAllStatus = -1;
    this.setState(newState);
  }

  handleClickTdFilterDropdown() {
    let newState = Object.assign({}, this.state);
    newState.options.trFilterDropdown = !newState.options.trFilterDropdown;
    this.setState(newState);
  }

  handleClickTreeExpand(expand) {
    let newState = Object.assign({}, this.state);
    newState.l1TaskData = newState.l1TaskData.map(obj => ({...obj, expand}));
    newState.l2TaskData = newState.l2TaskData.map(obj => ({...obj, expand}));
    newState.taskIterationData = newState.taskIterationData.map(obj => ({...obj, expand}));
    newState.l1StepData = newState.l1StepData.map(obj => ({...obj, expand}));
    expand ? newState.options.expandAllStatus = 1 : newState.options.expandAllStatus = 0;
    this.setState(newState);
  }

  handleRemoveTrSelection() {
    let newState = Object.assign({}, this.state);
    newState.tciterationData.selected = false;
    newState.l1TaskData.forEach(elm => {
      elm.selected = false
    });
    newState.l2TaskData.forEach(elm => {
      elm.selected = false
    });
    newState.taskIterationData.forEach(elm => {
      elm.selected = false
    });
    newState.l1StepData.forEach(elm => {
      elm.selected = false
    });
    newState.l2StepData.forEach(elm => {
      elm.selected = false
    });
    return newState;
  }

  handleClickTrSelection(sidePanData) {
    let newState = this.handleRemoveTrSelection();
    newState.selectedRow = {...sidePanData};

    if (sidePanData.rowName === 'taskLvl1') {
      let index = newState.l1TaskData.findIndex(item => item.l1TaskId === sidePanData.l1TaskId);
      newState.l1TaskData[index].selected = true;
    } else if (sidePanData.rowName === 'taskLvl2' || sidePanData.rowName === 'taskLvl2Step') {
      let index = newState.l2TaskData.findIndex(item => item.l2TaskId === sidePanData.l2TaskId);
      newState.l2TaskData[index].selected = true;
    } else if (sidePanData.rowName === 'taskIteration') {
      let index = newState.taskIterationData.findIndex(item => item.tiId === sidePanData.tiId);
      newState.taskIterationData[index].selected = true;
    } else if (sidePanData.rowName === 'stepLvl1') {
      let index = newState.l1StepData.findIndex(item => (item.l1StepId === sidePanData.l1StepId && item.tiId === sidePanData.tiId));
      newState.l1StepData[index].selected = true;
    } else if (sidePanData.rowName === 'stepLvl2') {
      let index = newState.l2StepData.findIndex(item => (item.l2StepId === sidePanData.l2StepId && item.tiId === sidePanData.tiId));
      newState.l2StepData[index].selected = true;
    } else {
      newState.tciterationData.selected = true;
    }

    this.setState(newState);
  }

  matchCondition = (str) => !(str === 'IF' || str === 'ELSE IF' || str === 'ELSE' || str === 'END IF');

  handleStepNav(direction, num) {
    let initCounter;
    const {l1TaskData, l2TaskData, l1StepData, l2StepData, selectedRow, options} = this.state;
    if (num) {
      // auto trigger
      if (direction === 'prev') {
        initCounter = num - 1;
      } else {
        initCounter = num + 1;
      }

      let filterL1TaskData = l1TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
      let filterL2TaskData = l2TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
      let filterL1StepData = l1StepData.filter(el => el.fdStepNo === initCounter);
      let filterL2StepData = l2StepData.filter(el => el.fdStepNo === initCounter);

      // if found in {l1TaskData} or {l2TaskData} or {l1StepData} or {l2StepData}
      if (filterL2StepData.length) {
        if (
          !this.matchCondition(filterL2StepData[0].action) ||
          !(+filterL2StepData[0].status === 1 || +filterL2StepData[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'stepLvl2',
          spTitle: filterL2StepData[0].action,
          spImage: filterL2StepData[0].screenshot,
          ...filterL2StepData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL1StepData.length) {
        if (
          !this.matchCondition(filterL1StepData[0].action) ||
          !(+filterL1StepData[0].status === 1 || +filterL1StepData[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'stepLvl1',
          spTitle: filterL1StepData[0].action,
          spImage: filterL1StepData[0].screenshot,
          ...filterL1StepData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL2TaskData.length) {
        if (
          !this.matchCondition(filterL2TaskData[0].taskIteration[0].step[0].action) ||
          !(+filterL2TaskData[0].taskIteration[0].step[0].status === 1 || +filterL2TaskData[0].taskIteration[0].step[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'taskLvl2',
          spTitle: filterL2TaskData[0].taskIteration[0].step[0].action,
          spImage: filterL2TaskData[0].taskIteration[0].step[0].screenshot,
          ...filterL2TaskData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL1TaskData.length) {
        if (
          !this.matchCondition(filterL1TaskData[0].taskIteration[0].step[0].action) ||
          !(+filterL1TaskData[0].taskIteration[0].step[0].status === 1 || +filterL1TaskData[0].taskIteration[0].step[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'taskLvl1',
          spTitle: filterL1TaskData[0].taskIteration[0].step[0].action,
          spImage: filterL1TaskData[0].taskIteration[0].step[0].screenshot,
          ...filterL1TaskData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (direction === 'next' && num < options.allStepLength) {
        return this.handleStepNav(direction, initCounter);
      } else if (direction === 'prev' && num > 1) {
        return this.handleStepNav(direction, initCounter);
      } else {
        console.log('reached till end');
      }

    } else if (selectedRow.stepCounter) {
      // next trigger
      if (direction === 'prev') {
        initCounter = selectedRow.stepCounter - 1;
      } else {
        initCounter = selectedRow.stepCounter + 1;
      }
      let filterL1TaskData = l1TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
      let filterL2TaskData = l2TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
      let filterL1StepData = l1StepData.filter(el => el.fdStepNo === initCounter);
      let filterL2StepData = l2StepData.filter(el => el.fdStepNo === initCounter);

      // if found in {l1TaskData} or {l2TaskData} or {l1StepData} or {l2StepData}
      if (filterL2StepData.length) {
        if (
          !this.matchCondition(filterL2StepData[0].action) ||
          !(+filterL2StepData[0].status === 1 || +filterL2StepData[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'stepLvl2',
          spTitle: filterL2StepData[0].action,
          spImage: filterL2StepData[0].screenshot,
          ...filterL2StepData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL1StepData.length) {
        if (
          !this.matchCondition(filterL1StepData[0].action) ||
          !(+filterL1StepData[0].status === 1 || +filterL1StepData[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'stepLvl1',
          spTitle: filterL1StepData[0].action,
          spImage: filterL1StepData[0].screenshot,
          ...filterL1StepData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL2TaskData.length) {
        if (
          !this.matchCondition(filterL2TaskData[0].taskIteration[0].step[0].action) ||
          !(+filterL2TaskData[0].taskIteration[0].step[0].status === 1 || +filterL2TaskData[0].taskIteration[0].step[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'taskLvl2',
          spTitle: filterL2TaskData[0].taskIteration[0].step[0].action,
          spImage: filterL2TaskData[0].taskIteration[0].step[0].screenshot,
          ...filterL2TaskData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else if (filterL1TaskData.length) {
        if (
          !this.matchCondition(filterL1TaskData[0].taskIteration[0].step[0].action) ||
          !(+filterL1TaskData[0].taskIteration[0].step[0].status === 1 || +filterL1TaskData[0].taskIteration[0].step[0].status === 2)
        ) {
          return this.handleStepNav(direction, initCounter);
        }

        let sidePanData = {
          stepCounter: initCounter,
          rowName: 'taskLvl1',
          spTitle: filterL1TaskData[0].taskIteration[0].step[0].action,
          spImage: filterL1TaskData[0].taskIteration[0].step[0].screenshot,
          ...filterL1TaskData[0]
        };

        this.handleClickTrSelection(sidePanData);

      } else {
        console.log('reached till end');
      }

    } else {
      this.handleClickTreeExpand(true);
      setTimeout(() => {
        if (direction === 'prev')
          return;
        // first trigger
        let initCounter = 1;
        let filterL1TaskData = l1TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
        let filterL2TaskData = l2TaskData.filter(el => el.taskIteration[0].step[0].fdStepNo === initCounter);
        let filterL1StepData = l1StepData.filter(el => el.fdStepNo === initCounter);
        let filterL2StepData = l2StepData.filter(el => el.fdStepNo === initCounter);

        // if found in {l1TaskData} or {l2TaskData} or {l1StepData} or {l2StepData}
        if (filterL2StepData.length) {
          if (
            !this.matchCondition(filterL2StepData[0].action) ||
            !(+filterL2StepData[0].status === 1 || +filterL2StepData[0].status === 2)
          ) {
            return this.handleStepNav(direction, initCounter);
          }

          let sidePanData = {
            stepCounter: initCounter,
            rowName: 'stepLvl2',
            spTitle: filterL2StepData[0].action,
            spImage: filterL2StepData[0].screenshot,
            ...filterL2StepData[0]
          };

          this.handleClickTrSelection(sidePanData);

        } else if (filterL1StepData.length) {
          if (
            !this.matchCondition(filterL1StepData[0].action) ||
            !(+filterL1StepData[0].status === 1 || +filterL1StepData[0].status === 2)
          ) {
            return this.handleStepNav(direction, initCounter);
          }

          let sidePanData = {
            stepCounter: initCounter,
            rowName: 'stepLvl1',
            spTitle: filterL1StepData[0].action,
            spImage: filterL1StepData[0].screenshot,
            ...filterL1StepData[0]
          };

          this.handleClickTrSelection(sidePanData);

        } else if (filterL2TaskData.length) {
          if (
            !this.matchCondition(filterL2TaskData[0].taskIteration[0].step[0].action) ||
            !(+filterL2TaskData[0].taskIteration[0].step[0].status === 1 || +filterL2TaskData[0].taskIteration[0].step[0].status === 2)
          ) {
            return this.handleStepNav(direction, initCounter);
          }

          let sidePanData = {
            stepCounter: initCounter,
            rowName: 'taskLvl2',
            spTitle: filterL2TaskData[0].taskIteration[0].step[0].action,
            spImage: filterL2TaskData[0].taskIteration[0].step[0].screenshot,
            ...filterL2TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);

        } else if (filterL1TaskData.length) {
          if (
            !this.matchCondition(filterL1TaskData[0].taskIteration[0].step[0].action) ||
            !(+filterL1TaskData[0].taskIteration[0].step[0].status === 1 || +filterL1TaskData[0].taskIteration[0].step[0].status === 2)
          ) {
            return this.handleStepNav(direction, initCounter);
          }

          let sidePanData = {
            stepCounter: initCounter,
            rowName: 'taskLvl1',
            spTitle: filterL1TaskData[0].taskIteration[0].step[0].action,
            spImage: filterL1TaskData[0].taskIteration[0].step[0].screenshot,
            ...filterL1TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);

        } else {
          console.log('reached till end');
        }
      }, 200)

    }
    // this.handleClickTreeExpand(true);
  }

  handleTaskNav(direction, num) {
    const {l2TaskData, selectedRow} = this.state;
    let initCounter;
    let maxCounter = l2TaskData.length;

    if (direction === 'prev') {
      // Back Click
      if (num) {
        initCounter = num - 1;

        let filterL2TaskData = l2TaskData.filter(el => el.fdTaskNo === initCounter);

        if (filterL2TaskData.length) {
          if (
            !this.matchCondition(filterL2TaskData[0].name) ||
            !(+filterL2TaskData[0].status === 1 || +filterL2TaskData[0].status === 2)
          ) {
            return this.handleTaskNav(direction, initCounter);
          }

          let sidePanData = {
            taskCounter: initCounter,
            rowName: 'taskLvl2',
            spTitle: filterL2TaskData[0].name,
            spImage: filterL2TaskData[0].screenshot,
            ...filterL2TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);
        } else {
          if (initCounter > 0) {
            return this.handleTaskNav(direction, initCounter);
          } else {
            console.log('Reached till Start!');
          }
        }

      } else if (selectedRow.taskCounter) {
        // next trigger
        initCounter = selectedRow.taskCounter - 1;

        let filterL2TaskData = l2TaskData.filter(el => el.fdTaskNo === initCounter);

        if (filterL2TaskData.length) {
          if (
            !this.matchCondition(filterL2TaskData[0].name) ||
            !(+filterL2TaskData[0].status === 1 || +filterL2TaskData[0].status === 2)
          ) {
            return this.handleTaskNav(direction, initCounter);
          }

          let sidePanData = {
            taskCounter: initCounter,
            rowName: 'taskLvl2',
            spTitle: filterL2TaskData[0].name,
            spImage: filterL2TaskData[0].screenshot,
            ...filterL2TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);
        } else {
          if (initCounter > 0) {
            return this.handleTaskNav(direction, initCounter);
          } else {
            console.log('Reached till End!');
          }
        }

      }
    } else {
      // Next Click
      if (num) {
        initCounter = num + 1;

        let filterL2TaskData = l2TaskData.filter(el => el.fdTaskNo === initCounter);

        if (filterL2TaskData.length) {
          if (
            !this.matchCondition(filterL2TaskData[0].name) ||
            !(+filterL2TaskData[0].status === 1 || +filterL2TaskData[0].status === 2)
          ) {
            return this.handleTaskNav(direction, initCounter);
          }

          let sidePanData = {
            taskCounter: initCounter,
            rowName: 'taskLvl2',
            spTitle: filterL2TaskData[0].name,
            spImage: filterL2TaskData[0].screenshot,
            ...filterL2TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);
        } else {
          if (initCounter <= maxCounter) {
            return this.handleTaskNav(direction, initCounter);
          } else {
            console.log('Reached till Start!');
          }
        }

      } else if (selectedRow.taskCounter) {
        // next trigger
        initCounter = selectedRow.taskCounter + 1;

        let filterL2TaskData = l2TaskData.filter(el => el.fdTaskNo === initCounter);

        if (filterL2TaskData.length) {
          if (
            !this.matchCondition(filterL2TaskData[0].name) ||
            !(+filterL2TaskData[0].status === 1 || +filterL2TaskData[0].status === 2)
          ) {
            return this.handleTaskNav(direction, initCounter);
          }

          let sidePanData = {
            taskCounter: initCounter,
            rowName: 'taskLvl2',
            spTitle: filterL2TaskData[0].name,
            spImage: filterL2TaskData[0].screenshot,
            ...filterL2TaskData[0]
          };

          this.handleClickTrSelection(sidePanData);
        } else {
          if (initCounter <= maxCounter) {
            return this.handleTaskNav(direction, initCounter);
          } else {
            console.log('Reached till End!');
          }
        }

      } else {
        this.handleClickTreeExpand(true);
        setTimeout(() => {
          // first trigger
          let initCounter = 1;

          let filterL2TaskData = l2TaskData.filter(el => el.fdTaskNo === initCounter);

          if (filterL2TaskData.length) {
            if (
              !this.matchCondition(filterL2TaskData[0].name) ||
              !(+filterL2TaskData[0].status === 1 || +filterL2TaskData[0].status === 2)
            ) {
              return this.handleTaskNav(direction, initCounter);
            }

            let sidePanData = {
              taskCounter: initCounter,
              rowName: 'taskLvl2',
              spTitle: filterL2TaskData[0].name,
              spImage: filterL2TaskData[0].screenshot,
              ...filterL2TaskData[0]
            };

            this.handleClickTrSelection(sidePanData);
          } else {
            if (initCounter <= maxCounter) {
              return this.handleTaskNav(direction, initCounter);
            } else {
              console.log('Reached till End!');
            }
          }
        }, 200)

      }
    }
  }

  handleIterationNav(direction, num) {
    let fdIteration = JSON.parse(localStorage.getItem('fdIteration'));
    let tcId = this.props.match.params.tcId;
    let tciId = this.props.match.params.tciId;
    let counter;
    fdIteration = fdIteration[tcId - 1];
    if (direction === 'prev') {
      if (num) {
        counter = num - 1;
        if (counter > 0) {
          if (fdIteration[counter - 1] === 1) {
            this.props.history.push('/folder-tree/' + tcId + '/' + counter);
          } else {
            return this.handleIterationNav('prev', counter)
          }
        }
      } else {
        counter = +tciId - 1;
        if (counter > 0) {
          if (fdIteration[counter - 1] === 1) {
            this.props.history.push('/folder-tree/' + tcId + '/' + counter);
          } else {
            return this.handleIterationNav('prev', counter)
          }
        }
      }
    } else {
      if (num) {
        counter = num + 1;
        if (counter < fdIteration.length) {
          if (fdIteration[counter - 1] === 1) {
            this.props.history.push('/folder-tree/' + tcId + '/' + counter);
          } else {
            return this.handleIterationNav('next', counter)
          }
        }
      } else {
        counter = +tciId + 1;
        if (counter < fdIteration.length) {
          if (fdIteration[counter - 1] === 1) {
            this.props.history.push('/folder-tree/' + tcId + '/' + counter);
          } else {
            return this.handleIterationNav('next', counter)
          }
        }
      }
    }

  }

  handleClickTdChkBox(tdname) {
    this.props.onClickTdChkBox(tdname);
  }

  handleClickResetTd() {
    this.props.onClickResetTd();
  }

  render() {
    document.body.className = "";
    document.body.classList.add('Summeryreport');
    document.body.classList.add('aborted');

    return (
      <Fragment>
        <Gridpanel/>
        <Sidepan data={this.state.selectedRow}/>
        <TableViewDetailGrid
          state={this.state}
          trlist={this.props.trlist}
          onRowClick={this.handleRowClick}
          onClickTdFilterDropdown={this.handleClickTdFilterDropdown}
          onClickTreeExpand={this.handleClickTreeExpand}
          onClickTrSelection={this.handleClickTrSelection}
          onClickStepNav={this.handleStepNav}
          onClickTaskNav={this.handleTaskNav}
          onClickIterationNav={this.handleIterationNav}
          onClickTdChkBox={this.handleClickTdChkBox}
          onClickResetTd={this.handleClickResetTd}
        />
        <Loadalert/>
      </Fragment>
    );
  }
}

export default withRouter(TableLevelTwo);
