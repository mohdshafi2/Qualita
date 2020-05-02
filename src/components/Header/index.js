import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      live: false
    }
  }
  render() {
    const {live} = this.state;
    return (
      <div className="Header">
        <div className="_headerMain">
          <Container>
            <Row>
              <Col>
                <NavLink className="_logo" to="/">
                  <picture>
                    <img src="https://d25tv1xepz39hi.cloudfront.net/2019-11-25/files/qualitia_white@2x.png" alt="Qualitia logo"/>
                  </picture>
                </NavLink>
              </Col>
              <Col>
                <div className="_liveStatus float-right">
                  {live && <Button variant="success">LIVE</Button>}
                  {!live && <Button variant="danger">Aborted</Button>}
                  <div className="usericons">
                    <Image src="https://d25tv1xepz39hi.cloudfront.net/2018-06-27/files/prm2.png" roundedCircle />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Header
