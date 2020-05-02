import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Suites from './routes/Suites'
import TableViewOld from './components/TableViewOld'
import TableView from './routes/TableView'
import TableViewDetail from './routes/TableView/TableViewDetail'
import './App.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickTdChkBox = this.handleClickTdChkBox.bind(this);
    this.handleClickResetTd = this.handleClickResetTd.bind(this);

    this.state = {
      trlist: {
        'tdData': true,
        'tdObject': true,
        'tdScreenshot': true,
        'tdModule': true,
        'tdEpic': true,
        'tdStory': true,
        'tdScenario': true,
        'tdMtcid': true,
        'tdEtime': true,
      }
    }
  }

  handleClickTdChkBox(tdname) {
    let newState = Object.assign({}, this.state);
    newState.trlist[tdname] = !newState.trlist[tdname];
    this.setState({
      ...this.state,
      newState
    });
  }

  handleClickResetTd() {
    let newState = Object.assign({}, this.state);
    // reset all
    Object.keys(newState.trlist).map(objKey => newState.trlist[objKey] = true);
    // set updated state
    this.setState({
      ...this.state,
      newState
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Redirect from="/home" to="/"/>
            <Route exact path="/suites">
              <Suites/>
            </Route>
            <Route exact path="/old-table">
              <TableViewOld/>
            </Route>
            <Route exact path="/folder-tree">
              <TableView
                trlist={this.state.trlist}
                onClickTdChkBox={this.handleClickTdChkBox}
                onClickResetTd={this.handleClickResetTd}
              />
            </Route>
            <Route exact path="/folder-tree/:tcId">
              <TableView
                trlist={this.state.trlist}
                onClickTdChkBox={this.handleClickTdChkBox}
                onClickResetTd={this.handleClickResetTd}
              />
            </Route>
            <Route exact path="/folder-tree/:tcId/:tciId">
              <TableViewDetail
                trlist={this.state.trlist}
                onClickTdChkBox={this.handleClickTdChkBox}
                onClickResetTd={this.handleClickResetTd}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
