import React, { Component } from 'react';
import { 
  Button,
  Col, 
  ControlLabel, 
  FormControl, 
  FormGroup, 
  Row
} from 'react-bootstrap';

import firebase from 'shared/firebase';

import './MessageForm.css'

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      message: '',
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({
          user: user.displayName,
        });
      } else {
        this.setState({
          user: '',
        });
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.user) {
      const messagesRef = firebase.database().ref().child('/messages');
      messagesRef.push({
        message: this.state.message,
        user: this.state.user,
      });
      this.setState({message: ''});
    }
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={12} sm={10}>
            <FormGroup>
              <ControlLabel>Message:</ControlLabel>
              <FormControl
                componentClass="textarea" 
                placeholder="Write your message..."
                disabled={!this.state.user}
                value={this.state.message}
                onChange={this.handleChange}
                >
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={12} sm={2}>
            <Button 
              type="submit"
              disabled={!this.state.user || !this.state.message} 
            >
            Submit
            </Button>
          </Col>
        </Row>
      </form>
    );  
  }
}