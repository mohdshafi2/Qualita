import React, {Component} from 'react';
import Dashpanel from '../../components/Dashpanel';
import './Home.scss'

class Home extends Component {
  render() {
    document.body.className = "";
    document.body.classList.add('Home');
    return (
      <Dashpanel/>
    );
  }
}

export default Home
