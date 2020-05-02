import React, {Component} from 'react'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.scss'

class ProgressBar extends Component {
  render() {
    const percentage = 42;
    return (
      <div className="ProgressBar">
        <div className="suitsProgressbar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`} strokeWidth={8} styles={{
            text: {
              // Text color
              fill: '#9F9F9F',
              // Text size
              fontSize: '22px',
            },
            path: {
              // Path color
              stroke: '#327CDE',
            },
            trail: {
              // Trail color
              stroke: '#DADBDD',
            },
          }}/>
        </div>

      </div>
    );
  }
}

export default ProgressBar

