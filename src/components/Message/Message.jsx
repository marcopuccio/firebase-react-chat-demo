import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './Message.css';

export default function Message(props) {
  return (
    <Row>
      <Col xs={12} sm={2}>
        <p>{props.message.user}</p>
      </Col>
      <Col xs={12} sm={10}>
        <p>{props.message.message}</p>
      </Col>
    </Row>
  );
}