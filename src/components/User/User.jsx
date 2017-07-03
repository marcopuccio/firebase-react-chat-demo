import React, { Component } from 'react';

import { Button, Col, Glyphicon, Row } from 'react-bootstrap';

import firebase from 'shared/firebase';


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
    };
    this.loginProviders = {
      google: new firebase.auth.GoogleAuthProvider(),
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({
          userLoggedIn: true,
        });
      } else {
        this.setState({
          userLoggedIn: false,          
        })
      }
    });
  }

  handleClick = () => {
    if(this.state.userLoggedIn) {
      firebase.auth().signOut();
    } else {
      firebase.auth().signInWithPopup(this.loginProviders.google).catch();
    }
  }

  render() {
    const iconLbl = this.state.userLoggedIn ? 'Sign Out' : 'Login with Google'; 
    return (
      <Row>
        <Col xs={12}>
          <Button 
            onClick={this.handleClick}
            >
            {iconLbl} <Glyphicon glyph='user'/>
          </Button>
        </Col>
      </Row>
    );
  }
}