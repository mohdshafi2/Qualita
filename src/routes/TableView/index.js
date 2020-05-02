import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Gridpanel from "../../components/Gridpanel";
import Loadalert from "../../components/Loadalert";
import TableViewGrid from './TableViewGrid'

export class TableBase extends Component {
  constructor(props) {
    super(props);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);

    this.state = {
      tcLevel: [],
      tcIteration: [],
      options: {
        'trFilterDropdown': false
      }
    }
  }

  componentDidMount() {
    let tcLevel = [];
    let tcIteration = [];
    let fdIteration = [];
    fetch("/data/SummaryReport.json")
      .then(res => res.json())
      .then(data => data.suite.tcs.tc)
      .then(hierarchy => {
        for (let i = 0; i < hierarchy.length; i++) {
          let iplus = i + 1;
          let activeExpandStatus = iplus === +this.props.match.params.tcId;
          const obj1 = {cid: iplus, expand: activeExpandStatus};
          const {tciteration, ...others1} = hierarchy[i];
          let fdCount = tciteration.filter(elm => (+elm.status === 1 || +elm.status === 2));
          let fdByaCount = {fdByaCount: `${fdCount.length}/${tciteration.length}`};
          let obj2 = {...obj1, ...fdByaCount, ...others1};
          fdIteration[i] = [];
          tcLevel.push(obj2);

          if (tciteration) {
            for (let j = 0; j < tciteration.length; j++) {
              let jplus = j + 1;
              const obj3 = {l1id: iplus, cid: jplus};
              const {task, ...others2} = tciteration[j];
              let obj4 = {...obj3, ...others2};
              tcIteration.push(obj4);
              +obj4.status === 1 || +obj4.status === 2 ? fdIteration[i][j] = 1 : fdIteration[i][j] = 0;
            }
          }
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          tcLevel,
          tcIteration
        });
        localStorage.setItem('tcLevel', JSON.stringify(tcLevel));
        localStorage.setItem('fdIteration', JSON.stringify(fdIteration));
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateLvl1Toggle() {
    let newState = Object.assign({}, this.state);
    newState.tcLevel[this.props.match.params.tcId - 1].expand = !newState.tcLevel[this.props.match.params.tcId - 1].expand;
    this.setState(newState);
  }

  getSnapshotBeforeUpdate(prevProps) {
    return {notifyRequired: prevProps.match.params !== this.props.match.params};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ((snapshot.notifyRequired && this.props.match.params.constructor === Object) && Object.keys(this.props.match.params).length !== 0) {
      this.updateLvl1Toggle();
    }
  }

  handleClickTdFilterDropdown() {
    let newState = Object.assign({}, this.state);
    newState.options.trFilterDropdown = !newState.options.trFilterDropdown;
    this.setState(newState);
  }

  handleClickTreeExpand(expand) {
    let newState = Object.assign({}, this.state);
    newState.tcLevel = newState.tcLevel.map(obj => ({...obj, expand}));
    this.setState(newState);
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
        <TableViewGrid
          lvl1data={this.state.tcLevel}
          lvl2data={this.state.tcIteration}
          otherState={this.state.options}
          trlist={this.props.trlist}
          onClickTdFilterDropdown={this.handleClickTdFilterDropdown}
          onClickTreeExpand={this.handleClickTreeExpand}
          onClickTdChkBox={this.handleClickTdChkBox}
          onClickResetTd={this.handleClickResetTd}
        />
        <Loadalert/>
      </Fragment>
    );
  }
}

export default withRouter(TableBase);
