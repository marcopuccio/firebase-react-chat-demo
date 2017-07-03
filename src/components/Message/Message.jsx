import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './Message.css';

export default function Message(props) {
  return (
    <Row className="Message">
      <Col xs={12} sm={2}>
        <p className="Message-user">{props.message.user}</p>
      </Col>
      <Col xs={12} sm={10}>
        <p  className="Message-messageText">{props.message.message}</p>
      </Col>
    </Row>
  );
}