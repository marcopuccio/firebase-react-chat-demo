import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import { Message } from 'components/Message';
import firebase from 'shared/firebase';
import './MessageList.css'

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {}
    };
  }

  componentDidMount() {
    const messagesRef = firebase.database().ref().child('/messages');
    messagesRef.on('value', snap => {
      const snapVal = snap.val();
      if(snapVal) this.setState({messages: snapVal});
    });
  }

  render() {
    const messages = Object.entries(this.state.messages);
    return (
      <Grid>
        <main className="MessageList">
          {messages.map(message => {
            return <Message key={message[0]} message={message[1]} />
          })}
        </main>
      </Grid>
    );
  }
}