import React, { Component } from 'react';

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
      <main>
        {messages.map(message => {
          return <Message key={message[0]} message={message[1]} />
        })}
      </main>
    );
  }
}