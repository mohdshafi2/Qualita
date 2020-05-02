import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Donutchat.scss';

class Donutchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleChart: false,
      data: {
        labels: [
          '',
          '',
          '',
          ''
        ],
        datasets: [{
          data: [20, 26, 14, 16],
          backgroundColor: [
            '#EA4636',
            '#69BE4B',
            '#FA912D',
            '#7C8B96'
          ],
          borderWidth: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        legend: false,
        // tooltips: false
      }
    }
  }

  handleDoughnutElmClick(elm) {
    console.log(elm);
  }

  componentDidUpdate(prevProps) {
    if (this.props.toggleState !== prevProps.toggleState) {
      this.setState({...this.state, toggleChart: this.props.toggleState})
    }
  }

  render() {
    return (
      <div className="Donutchat">
        {this.state.toggleChart &&
        <Doughnut
          data={this.state.data}
          width={50} height={50}
          options={this.state.options}
          getElementAtEvent={elm => this.handleDoughnutElmClick(elm)}
          redraw
        />
        }
      </div>
    );
  }
}

export default Donutchat
