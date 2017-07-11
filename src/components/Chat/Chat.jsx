import React from 'react';

import { Header } from 'components/Header';
import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

import './Chat.css';

export default function Chat(props) {
  return (
    <div className="Chat">
      <section className="Chat-header">
        <Header />
      </section>
      <section className="Chat-messageList">
        <MessageList />
      </section>
      <section className="Chat-messageForm">
        <MessageForm />
      </section>
    </div>
  ) 
}