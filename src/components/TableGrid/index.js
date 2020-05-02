import React, {Component} from 'react'
import {Container, Table} from 'react-bootstrap';
import IcomoonReact from 'icomoon-react';
import PreviewModel from '../PreviewModel';

import Multiselected from '../Multiselected'
import Sortpan from '../Sortpan';
import iconSet from '../../fonts/selection';
import './Table.scss'

class TableGrid extends Component {
  constructor(props) {
    super(props);
    this.handleClickLvlTwo = this.handleClickLvlTwo.bind(this);
    this.handleClickTdFilterDropdown = this.handleClickTdFilterDropdown.bind(this);
    this.handleClickTreeExpand = this.handleClickTreeExpand.bind(this);
  }

  renderTableHeader() {
    const header1 = this.props.lvl1head;
    const header2 = this.props.lvl2head;
    let titleStatus = (col) => {
      if (col === 'Status') {
        return (
          <React.Fragment>
            {col}
            <span className="float-right">
              <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-arrow-down"/>
            </span>
          </React.Fragment>
        )
      } else if (col === 'Hierarchy') {
        return (
          <React.Fragment>
            {col}
            <span className="float-right">
              <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-sort-icon"/>
            </span>
          </React.Fragment>
        )
      } else {
        return col;
      }
    }

    if (this.props.otherState.lvl2ActiveId) {
      return header2.map((elm, i) => {
        return <th key={i}>{titleStatus(elm)}</th>
      })
    } else {
      return header1.map((elm, i) => {
        return <th key={i}>{titleStatus(elm)}</th>
      })
    }

  }

  handleRowClick(lvl1id, lvl2id, lvl3id, lvl4id) {
    this.props.onRowClick(lvl1id, lvl2id, lvl3id, lvl4id);
  }

  handleClickLvlTwo() {
    this.props.onClickLvlTwo();
  }

  handleClickTdFilterDropdown() {
    this.props.onClickTdFilterDropdown();
  }

  handleClickTreeExpand(expand) {
    this.props.onClickTreeExpand(expand);
  }

  renderItem(item) {
    let trClass = (status) => status === 'p' ? 'status-passed' : status === 'd' ? 'status-defects' : status === 'f' ? 'status-failed' : status === 'r' ? 'status-loading' : status === 'ne' ? 'status-not-executed' : 'status-';
    // filter level 2 wrt this id
    let childlvl2 = this.props.lvl2data.filter(el => el.l1id === item.id);
    let ifTreeButton = childlvl2.length > 0 ? <span className="tree-icon"><i></i></span> : '';
    // calculate expand/collapse class
    let expandClass = item.expand ? 'tree-collapse' : 'tree-expand';
    // level 1 row
    const itemRows = [
      <tr
        key={"row-data-" + item.id}
        className={`${trClass(item.Status)} ${expandClass} row-level-1`}
      >
        <td><span className="icon-status"></span></td>
        <td onClick={() => this.handleRowClick(item.id)}>
          <div className="padding-left">
            {ifTreeButton}{item.Hierarchy}
          </div>
        </td>
        <td>{item.Module}</td>
        <td>{item.Epic}</td>
        <td>{item.Story}</td>
        <td>{item.Scenario_Name}</td>
        <td>{item.Manual_TC_ID}</td>
        <td>{item.Execution_Time}</td>
      </tr>
    ];

    // level 2 row
    if (item.expand) {
      // Add calculation Row here
      itemRows.push(
        <tr
          key={"row-calculation-" + item.id}
          className="iteration"
        >
          <td></td>
          <td className="iteration-head">
            <p>Iterations <span>{item.iteration}</span></p>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );

      if (childlvl2.length) {
        childlvl2.forEach(iteml2 => {
          itemRows.push(
            <tr
              key={"re" + item.id + '_' + iteml2.id}
              className={`${trClass(iteml2.Status)} tree-expand row-level-2`}
            >
              <td><span className="icon-status"></span></td>
              <td
                onClick={() => this.handleRowClick(item.id, iteml2.id)}
              >
                <div className="padding-left">
                  <span className="tree-icon"><i></i></span>
                  {iteml2.Hierarchy}
                  <span className="float-right">
                    <IcomoonReact iconSet={iconSet} color="#7c8b96" size={13} icon="e-arrow-export"/>
                  </span>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })
      }
    }

    return itemRows;
  }

  renderItemTwo(iteml2) {
    let trClass = (status) => status === 'p' ? 'status-passed' : status === 'd' ? 'status-defects' : status === 'f' ? 'status-failed' : status === 'r' ? 'status-loading' : status === 'ne' ? 'status-not-executed' : 'status-';
    // calculate expand/collapse class
    let expandClassLvl2 = iteml2.expand ? 'tree-collapse' : 'tree-expand';

    // level 2 row
    const itemRows = [
      <tr
        onClick={() => this.handleRowClick(iteml2.l1id, iteml2.id)}
        key={"re" + iteml2.l1id + '_' + iteml2.id}
        className={`${trClass(iteml2.Status)} ${expandClassLvl2} row-level-2`}
      >
        <td></td>
        <td><span className="icon-status"></span></td>
        <td>
          <div className="padding-left">
            <span className="tree-icon"><i></i></span>
            {iteml2.Hierarchy}
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ];

    // level 3 row
    if (iteml2.expand) {
      let childlvl3 = this.props.lvl3data.filter(el => el.l2id === iteml2.id);

      // Add calculation Row here
      itemRows.push(
        <tr
          key={"row-calculation-" + iteml2.l1id + '_' + iteml2.id}
          className="iteration"
        >
          <td></td>
          <td></td>
          <td className="iteration-head">
            <div className="padding-left">
              <p>Tasks <span>{iteml2.Tasks}</span></p>
              <p>Steps <span>{iteml2.Steps}</span></p>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );

      if (childlvl3.length) {
        childlvl3.forEach(iteml3 => {
          // calculate expand/collapse class
          let expandClassLvl3 = iteml3.expand ? 'tree-collapse' : 'tree-expand';
          itemRows.push(
            <tr
              onClick={() => this.handleRowClick(iteml2.l1id, iteml2.id, iteml3.id)}
              key={"re" + iteml2.l1id + '_' + iteml2.id + '_' + iteml3.id}
              className={`${trClass(iteml3.Status)} ${expandClassLvl3} row-level-3`}
            >
              <td></td>
              <td><span className="icon-status"></span></td>
              <td>
                <div className="padding-left">
                  <span className="tree-icon"><i></i></span>
                  {iteml3.Hierarchy}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );

          // level 4 row
          if (iteml3.expand) {
            let childlvl4 = this.props.lvl4data.filter(el => el.l3id === iteml3.id);
            if (childlvl4.length) {
              childlvl4.forEach(iteml4 => {
                let expandClassLvl4 = iteml4.expand ? 'tree-collapse' : 'tree-expand';
                itemRows.push(
                  <tr
                    onClick={() => this.handleRowClick(iteml2.l1id, iteml2.id, iteml3.id, iteml4.id)}
                    key={"re" + iteml2.l1id + '_' + iteml2.id + '_' + iteml3.id + '_' + iteml4.id}
                    className={`${trClass(iteml4.Status)} ${expandClassLvl4} row-level-4`}
                  >
                    <td></td>
                    <td><span className="icon-status"></span></td>
                    <td>
                      <div className="padding-left">
                        <span className="tree-icon"><i></i></span>
                        {iteml4.Hierarchy}
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );

                // level 5 row
                if (iteml4.expand) {
                  let childlvl5 = this.props.lvl5data.filter(el => el.l4id === iteml4.id);
                  if (childlvl5.length) {
                    childlvl5.forEach(iteml5 => {
                      itemRows.push(
                        <tr
                          key={"re" + iteml2.l1id + '_' + iteml2.id + '_' + iteml3.id + '_' + iteml4.id + '_' + iteml5.id}
                          className={`${trClass(iteml5.Status)} row-level-5`}
                        >
                          <td></td>
                          <td><span className="icon-status"></span></td>
                          <td>
                            <div className="padding-left">
                              {iteml5.Hierarchy}
                            </div>
                          </td>
                          <td>{iteml5.Data}</td>
                          <td>{iteml5.Object}</td>
                          <td>
                            <div className="screenshot-attach">
                              <PreviewModel imgUrl={iteml5.Screenshot}/>
                            </div>
                          </td>
                          <td>{iteml5.Execution_Time}</td>
                        </tr>
                      );
                    })
                  }
                }
              })
            }
          }
        })
      }
    }


    return itemRows;
  }

  render() {
    let firstTwoLevelRows = [];
    let fromTwoLevelRows = [];
    if (this.props.otherState.lvl2ActiveId) {
      let lvl2data = this.props.lvl2data.filter(el => el.id === this.props.otherState.lvl2ActiveId);
      lvl2data.forEach(item => {
        const perItemRows = this.renderItemTwo(item);
        fromTwoLevelRows = fromTwoLevelRows.concat(perItemRows);
      });
    } else {
      this.props.lvl1data.forEach(item => {
        const perItemRows = this.renderItem(item);
        firstTwoLevelRows = firstTwoLevelRows.concat(perItemRows);
      });
    }

    return (
      <div className="Table">
        <section>
          <Container>
            <Sortpan
              lvl1data={this.props.lvl1data}
              lvl2data={this.props.lvl2data}
              otherState={this.props.otherState}
              onClickLvlTwo={this.handleClickLvlTwo}
              onClickTdFilterDropdown={this.handleClickTdFilterDropdown}
              onClickTreeExpand={this.handleClickTreeExpand}
            />
            <div className="_tableMain">
              <Table responsive size="sm" className={this.props.otherState.lvl2ActiveId ? 'table2' : ''}>
                <thead>
                <tr>
                  {this.renderTableHeader()}
                </tr>
                </thead>
                <tbody>
                  {this.props.otherState.trFilterDropdown ? <Multiselected otherState={this.props.otherState}/> : null}
                  {this.props.otherState.lvl2ActiveId ? fromTwoLevelRows : firstTwoLevelRows}
                </tbody>
              </Table>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default TableGrid
