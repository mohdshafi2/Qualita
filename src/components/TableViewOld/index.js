import React from 'react'
import TableGrid from '../TableGridOld'
import Gridpanel from '../Gridpanel'
import Loadalert from '../Loadalert'
import Sidepan from '../Sidepan'
import '../../routes/TableView/Summeryreport.scss'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLvlTwo = this.handleClickLvlTwo.bind(this);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);

    this.state = {
      hierarchy: [],
      tableLevel1: [
        {
          id: 1,
          'Status': 'p',
          'Hierarchy': '1.E2E_Sales State Preprod',
          'Module': 'Salesforce',
          'Epic': 'Loan Application',
          'Story': 'Offer Conversion',
          'Scenario_Name': 'Merged E2E Flow',
          'Manual_TC_ID': '1.E2E_Sales_State_Preprod',
          'Execution_Time': '1h 13m 16s',
          'expand': false,
          'iteration': '0/0',
        },
        {
          id: 2,
          'Status': 'd',
          'Hierarchy': 'BL_Sales Login Till Offer Conversion',
          'Module': 'Salesforce',
          'Epic': 'Loan Application',
          'Story': 'Offer Conversion',
          'Scenario_Name': 'Merged E2E Flow',
          'Manual_TC_ID': '1.E2E_Sales_State_Preprod',
          'Execution_Time': '',
          'expand': false,
          'iteration': '0/0',
        },
        {
          id: 3,
          'Status': 'f',
          'Hierarchy': 'UCF_Sales Login Till Offer Conversion',
          'Module': 'Salesforce',
          'Epic': 'Loan Application',
          'Story': 'Offer Conversion',
          'Scenario_Name': 'Merged E2E Flow',
          'Manual_TC_ID': '1.E2E_Sales_State_Preprod',
          'Execution_Time': '',
          'expand': false,
          'iteration': '0/0',
        },
        {
          id: 4,
          'Status': 'r',
          'Hierarchy': '8(E2E_Sales State Preprod)',
          'Module': 'Salesforce',
          'Epic': 'Loan Application',
          'Story': 'Offer Conversion',
          'Scenario_Name': 'Merged E2E Flow',
          'Manual_TC_ID': '1.E2E_Sales_State_Preprod',
          'Execution_Time': '',
          'expand': false,
          'iteration': '0/0',
        },
        {
          id: 5,
          'Status': 'ne',
          'Hierarchy': 'DL_Sales Login Till Offer Conversion',
          'Module': 'Salesforce',
          'Epic': 'Loan Application',
          'Story': 'Offer Conversion',
          'Scenario_Name': 'Merged E2E Flow',
          'Manual_TC_ID': '1.E2E_Sales_State_Preprod',
          'Execution_Time': '',
          'expand': false,
          'iteration': '0/0',
        },
      ],
      tableLevel2: [
        {
          l1id: 1,
          id: 1,
          'Status': 'p',
          'Hierarchy': '1test1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 1,
          id: 2,
          'Status': 'd',
          'Hierarchy': '2test1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 2,
          id: 3,
          'Status': 'f',
          'Hierarchy': '1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 2,
          id: 4,
          'Status': 'r',
          'Hierarchy': '2',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 3,
          id: 5,
          'Status': 'ne',
          'Hierarchy': '1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 3,
          id: 6,
          'Status': 'p',
          'Hierarchy': '2',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 4,
          id: 7,
          'Status': 'd',
          'Hierarchy': '1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 4,
          id: 8,
          'Status': 'f',
          'Hierarchy': '2',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 5,
          id: 9,
          'Status': 'r',
          'Hierarchy': '1',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
        {
          l1id: 5,
          id: 10,
          'Status': 'ne',
          'Hierarchy': '2',
          'expand': false,
          'Tasks': '0/0',
          'Steps': '0/0',
        },
      ],
      tableLevel3: [
        {
          l1id: 1,
          l2id: 1,
          id: 1,
          'Status': 'p',
          'Hierarchy': 'Generate Random Number',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 2,
          'Status': 'd',
          'Hierarchy': 'Application Login',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 3,
          'Status': 'f',
          'Hierarchy': 'Unsecured_Screen To Be Validated',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 4,
          'Status': 'r',
          'Hierarchy': 'SME V2_API workaround PreRequisites1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 5,
          'Status': 'ne',
          'Hierarchy': 'Store Current Date',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 6,
          'Status': 'p',
          'Hierarchy': 'Unsecured_Store Primary Applicant Name',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          id: 7,
          'Status': 'd',
          'Hierarchy': 'Navigate to Loan Application Page',
          'expand': false,
        },
      ],
      tableLevel4: [
        {
          l1id: 1,
          l2id: 1,
          l3id: 1,
          id: 1,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 2,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 3,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 4,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 5,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 6,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          id: 7,
          'Status': '',
          'Hierarchy': '1',
          'expand': false,
        },
      ],
      tableLevel5: [
        {
          l1id: 1,
          l2id: 1,
          l3id: 1,
          l4id: 1,
          id: 1,
          'Status': 'd',
          'Hierarchy': 'randomNumber',
          'Data': '"PAN_No"(PAN_No)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '1m 2s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 1,
          l4id: 1,
          id: 2,
          'Status': 'p',
          'Hierarchy': 'ComputeExpression',
          'Data': '"SerialNo"(SerialNo)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '12s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 1,
          l4id: 1,
          id: 3,
          'Status': 'p',
          'Hierarchy': 'MaximizeBrowser',
          'Data': '"Create Asset"(Crea...',
          'Object': 'Log In to Sandbox..',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '11s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 4,
          'Status': 'p',
          'Hierarchy': 'quitdriver_reinstantiate',
          'Data': '"File Acceptance"(File Acceptance) File Acceptance...',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '27s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 5,
          'Status': 'f',
          'Hierarchy': 'StoreCurrentDateInFormat',
          'Data': '"Pre MCP"(Pre MCP)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '14s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 6,
          'Status': 'p',
          'Hierarchy': 'StoreVariable',
          'Data': '"PAN_No"(PAN_No)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '1m 2s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 7,
          'Status': 'f',
          'Hierarchy': 'StoreVariable',
          'Data': '"PAN_No"(PAN_No)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '1m 2s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 8,
          'Status': 'f',
          'Hierarchy': 'ToLowerCase',
          'Data': '"PAN_No"(PAN_No)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '1m 2s',
          'expand': false,
        },
        {
          l1id: 1,
          l2id: 1,
          l3id: 2,
          l4id: 3,
          id: 9,
          'Status': 'p',
          'Hierarchy': 'OpenURL',
          'Data': '"PAN_No"(PAN_No)',
          'Object': 'Username_txtBox',
          'Screenshot': 'https://picsum.photos/id/237',
          'Execution_Time': '1m 2s',
          'expand': false,
        }
      ],
      thLevel1: ['Status', 'Hierarchy', 'Module', 'Epic', 'Story', 'Scenario Name', 'Manual TC ID', 'Execution Time'],
      thLevel2: ['No.', 'Status', 'Hierarchy', 'Data', 'Object', 'Screenshot', 'Execution Time'],
      tableLevel5FD: [],
      options: {
        'lvl2ActiveId': null,
        'iteration': null,
        'trFilterDropdown': false
      }
    }
  }

  componentDidMount() {
    let newState = Object.assign({}, this.state);
    // update [Iteration] state for lavel 1
    this.state.tableLevel1.forEach((elm, i) => {
      let tableLevel2Filtered = this.state.tableLevel2.filter(el => el.l1id === elm.id);
      let numFDI = tableLevel2Filtered.reduce((n, row) => {
        return n + (row.Status === 'f' || row.Status === 'd');
      }, 0);
      newState.tableLevel1[i].iteration = `${numFDI}/${tableLevel2Filtered.length}`;
      this.setState(newState);
    })

    // update [Tasks, Steps] state for lavel 2
    this.state.tableLevel2.forEach((elm, i) => {
      // update [Tasks]
      let tableLevel3Filtered = this.state.tableLevel3.filter(el => el.l2id === elm.id);
      let numFDT = tableLevel3Filtered.reduce((n, row) => {
        return n + (row.Status === 'f' || row.Status === 'd');
      }, 0);
      newState.tableLevel2[i].Tasks = `${numFDT}/${tableLevel3Filtered.length}`;

      // update [Tasks]
      let tableLevel5Filtered = this.state.tableLevel5.filter(el => el.l2id === elm.id);
      let numFDS = tableLevel5Filtered.reduce((n, row) => {
        return n + (row.Status === 'f' || row.Status === 'd');
      }, 0);
      newState.tableLevel2[i].Steps = `${numFDS}/${tableLevel5Filtered.length}`;

      // update state at last
      this.setState(newState);
    })

    fetch("data/SummaryReport.json")
      .then(res => res.json())
      .then(data => data.suite.tcs.tc)
      .then(hierarchy => {
        // console.log(hierarchy);
        this.setState({...this.state, hierarchy})
      }).catch(err => {
      console.log(err);
    });
    console.log(this.state);
  }

  handeIterationCount = (count, length) => {
    let newState = Object.assign({}, this.state);
    let iteration = `${count}/${length}`;
    newState.options.iteration = iteration;
    console.log(iteration)
    // this.setState(newState);
  }

  handleRowClick = (lvl1id, lvl2id, lvl3id, lvl4id) => {
    let newState = Object.assign({}, this.state);

    if (lvl4id) {
      newState.tableLevel4[lvl4id - 1].expand = !newState.tableLevel4[lvl4id - 1].expand;
    } else if (lvl3id) {
      newState.tableLevel3[lvl3id - 1].expand = !newState.tableLevel3[lvl3id - 1].expand;
    } else if (lvl2id) {
      newState.tableLevel2[lvl2id - 1].expand = !newState.tableLevel2[lvl2id - 1].expand;
      newState.options.lvl2ActiveId = newState.tableLevel2[lvl2id - 1].id;
    } else if (lvl1id) {
      newState.tableLevel1[lvl1id - 1].expand = !newState.tableLevel1[lvl1id - 1].expand;
    } else {
      console.log('will research for this console!');
    }

    this.setState(newState);
  }

  handleClickLvlTwo() {
    let newState = Object.assign({}, this.state);
    newState.options.lvl2ActiveId = null;
    this.setState(newState);
  }

  handleClickTdFilterDropdown() {
    let newState = Object.assign({}, this.state);
    newState.options.trFilterDropdown = !newState.options.trFilterDropdown;
    this.setState(newState);
  }

  handleClickTreeExpand(expand) {
    let newState = Object.assign({}, this.state);
    if (newState.options.lvl2ActiveId) {
      newState.tableLevel2 = newState.tableLevel2.map(obj => ({...obj, expand}));
      newState.tableLevel3 = newState.tableLevel3.map(obj => ({...obj, expand}));
      newState.tableLevel4 = newState.tableLevel4.map(obj => ({...obj, expand}));
    } else {
      newState.tableLevel1 = newState.tableLevel1.map(obj => ({...obj, expand}));
    }
    this.setState(newState);
  }

  render() {
    document.body.className = "";
    document.body.classList.add('Summeryreport');
    return (
      <React.Fragment>
        <Gridpanel/>
        <Sidepan otherState={this.state.options}/>
        <TableGrid
          lvl1data={this.state.tableLevel1}
          lvl2data={this.state.tableLevel2}
          lvl3data={this.state.tableLevel3}
          lvl4data={this.state.tableLevel4}
          lvl5data={this.state.tableLevel5}
          lvl1head={this.state.thLevel1}
          lvl2head={this.state.thLevel2}
          otherState={this.state.options}
          onRowClick={this.handleRowClick}
          onClickLvlTwo={this.handleClickLvlTwo}
          onIterationCount={this.handeIterationCount}
          onClickTdFilterDropdown={this.handleClickTdFilterDropdown}
          onClickTreeExpand={this.handleClickTreeExpand}
        />
        <Loadalert/>
      </React.Fragment>
    );
  }
}

export default App;
