import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { User } from 'components/User';

export default function Header(props) {
  return (
    <header>
      <Row>
        <Col xs={10}>
          <h1>Firebase React Chat</h1>
        </Col>
        <Col xs={2}>
          <User />
        </Col>
      </Row>
    </header>
  );
}