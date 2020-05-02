import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom';
import Multiselect from 'react-bootstrap-multiselect';
import './Multiselected.scss'

class Multiselected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [
        {'value': '0'},
        {'value': '1'},
        {'value': '2'},
        {'value': '3'},
        {'value': '4'},
        {'value': '5'},
        {'value': '6'},
        {'value': '7'},
        {'value': '8'}
      ],
      status: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      hierarchy: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      data: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      object: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      screenshot: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      modules: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      epic: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      story: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      scenario: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      manual: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ],
      etime: [
        {'value': 'item0'},
        {'value': 'item1'},
        {'value': 'item2'},
        {'value': 'item3'},
        {'value': 'item4'},
        {'value': 'item5'},
        {'value': 'item6'},
        {'value': 'item7'},
        {'value': 'item8'}
      ]
    }
  }


  render() {
    let {match, trlist} = this.props;
    let tciId = match.params.tciId;

    return (
        <tr className="iteration">
          { tciId &&
          <td>
            <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.number} multiple maxHeight={110} buttonText={function (options, select) {
              return 'no';
            }}
            />
          </td>
          }
          <td>
            <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.status} multiple maxHeight={110} buttonText={function (options, select) {
              return 'Status';
            }}
            />
          </td>
          <td>
            <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.hierarchy} multiple maxHeight={110} buttonText={function (options, select) {
              return 'Hierarchy';
            }}
            />
          </td>
          {tciId &&
          <Fragment>
            <td className={trlist.tdData ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.data} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Data';
              }}
              />
            </td>
            <td className={trlist.tdObject ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.object} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Object';
              }}
              />
            </td>
            <td className={trlist.tdScreenshot ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.screenshot} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Screenshot';
              }}
              />
            </td>
          </Fragment>
          }
          {!tciId &&
          <Fragment>
            <td className={trlist.tdModule ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.modules} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Modules';
              }}
              />
            </td>
            <td className={trlist.tdEpic ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.epic} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Epic';
              }}
              />
            </td>
            <td className={trlist.tdStory ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.story} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Story';
              }}
              />
            </td>
            <td className={trlist.tdScenario ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.scenario} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Scenario';
              }}
              />
            </td>
            <td className={trlist.tdMtcid ? '' : 'd-none'}>
              <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.manual} multiple maxHeight={110} buttonText={function (options, select) {
                return 'Manual TC ID';
              }}
              />
            </td>
          </Fragment>
          }
          <td className={trlist.tdEtime ? '' : 'd-none'}>
            <Multiselect enableCaseInsensitiveFiltering={true} data={this.state.etime} multiple maxHeight={110} buttonText={function (options, select) {
              return 'Time';
            }}
            />
          </td>
        </tr>

    );
  }
}

export default withRouter(Multiselected)