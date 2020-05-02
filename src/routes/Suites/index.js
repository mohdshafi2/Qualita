import React, {Component} from 'react'
import './Suites.scss'
import Tabview from "../../components/Tabview";

class Suites extends Component {
  render() {
    document.body.className = "";
    document.body.classList.add('Suites');
    return (
      <Tabview/>
    );
  }
}

export default Suites
