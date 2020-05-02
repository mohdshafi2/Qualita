import React, {Fragment} from "react";

const HmsCalculator = (props) => {
  if (!props.executionTime)
    return <Fragment></Fragment>;
  let skipMs = props.executionTime.split('.');
  let splitsHmsArr = skipMs[0].split(':');
  let hmsData = '';

  if (+splitsHmsArr[0] > 0) {
    hmsData =
      <Fragment>
        <span>{+splitsHmsArr[0]}h</span>&nbsp;
        <span>{+splitsHmsArr[1]}m</span>&nbsp;
        <span>{+splitsHmsArr[2]}s</span>&nbsp;
        <span>{+skipMs[1]}ms</span>
      </Fragment>
  } else if (+splitsHmsArr[1] > 0) {
    hmsData =
      <Fragment>
        <span>{+splitsHmsArr[1]}m</span>&nbsp;
        <span>{+splitsHmsArr[2]}s</span>&nbsp;
        <span>{+skipMs[1]}ms</span>
      </Fragment>
  } else if (+splitsHmsArr[2] > 0) {
    hmsData =
      <Fragment>
        <span>{+splitsHmsArr[2]}s</span>&nbsp;
        <span>{+skipMs[1]}ms</span>
      </Fragment>
  } else if (+skipMs[1] > 0) {
    hmsData =
      <Fragment>
        <span>{+skipMs[1]}ms</span>
      </Fragment>
  }
  return hmsData
};

export default HmsCalculator;
