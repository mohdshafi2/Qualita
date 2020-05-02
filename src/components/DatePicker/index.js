import React from "react";
import {FormControl, Row, Col} from "react-bootstrap";
import Grid from 'react-bootstrap/Container'
import moment from "moment";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import './DatePicker.scss'

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    let start = moment(new Date());
    let end = moment(start)
      .add()
      .subtract();
    this.state = {
      start: start,
      end: end
    };

    this.onClick = this.onClick.bind(this);
    this.applyCallback = this.applyCallback.bind(this);
  }

  applyCallback(startDate, endDate) {
    console.log("Apply Callback");
    console.log(startDate.format("MMM DD Y"));
    console.log(endDate.format("MMM DD Y"));
    this.setState({
      start: startDate,
      end: endDate
    });
  }

  rangeCallback(index, value) {
    console.log(index, value);
  }

  onClick() {
    let newStart = moment(this.state.start).subtract(3, "days");
    // console.log("On Click Callback");
    // console.log(newStart.format("DD-MM-YYYY HH:mm"));
    this.setState({start: newStart});
  }

  renderGridPickerNoMobileMode(ranges, local, maxDate) {
    let disabled = false;
    let value = `${this.state.start.format(
      "MMM DD Y"
    )} - ${this.state.end.format("MMM DD Y")}`;
    return (
      <Grid>
        <Row className="show-grid" style={{textAlign: "center"}}>
          <Col xs={12} id="DateTimeRangeContainerNoMobileMode">
            <DateTimeRangeContainer

              start={this.state.start}
              end={this.state.end}
              ranges={{
                'Last Week': [moment().subtract(7, 'days'), moment()],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'Last 3 Months': [moment().subtract(2, 'month').startOf('month'), moment().subtract(0, 'month').endOf('month')],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
              }}
              local={local}
              applyCallback={this.applyCallback}
              smartMode
              noMobileMode
            >
              <FormControl
                id="formControlsTextB"
                type="text"
                label="Text"
                placeholder="Enter text"
                style={{cursor: "pointer"}}
                disabled={disabled}
                defaultValue={value}
              />
            </DateTimeRangeContainer>
          </Col>
        </Row>
      </Grid>
    );
  }


  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start)
      .add(1, "days")
      .subtract(1, "seconds");
    let ranges = {
      "Today Only": [moment(start), moment(end)],
      "Yesterday Only": [
        moment(start).subtract(1, "days"),
        moment(end).subtract(1, "days")
      ],
      "3 Days": [moment(start).subtract(3, "days"), moment(end)],
      "5 Days": [moment(start).subtract(5, "days"), moment(end)],
      "1 Week": [moment(start).subtract(7, "days"), moment(end)],
      "2 Weeks": [moment(start).subtract(14, "days"), moment(end)],
      "1 Month": [moment(start).subtract(1, "months"), moment(end)],
      "1st August 18": [
        moment("2018-08-01 00:00:00"),
        moment("2018-08-02 23:59:59")
      ],
      "1 Year": [moment(start).subtract(1, "years"), moment(end)]
    };
    let local = {
      format: "MMM DD Y",
      sundayFirst: false
    };
    let maxDate = moment(end).add(24, "hour");
    return (
      <div className="container">
        {this.renderGridPickerNoMobileMode(ranges, local, maxDate)}
      </div>
    );
  }
}

export default DatePicker;
