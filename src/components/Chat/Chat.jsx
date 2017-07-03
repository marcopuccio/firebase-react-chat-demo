import React from 'react';
import { Grid } from 'react-bootstrap';

import { Header } from 'components/Header';
import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

import './Chat.css';

export default function Chat(props) {
  return (
    <Grid>
      <Header />
      <MessageList />
      <MessageForm />
    </Grid>
  ) 
}