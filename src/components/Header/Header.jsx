import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import { User } from 'components/User';
import './Header.css';

export default function Header(props) {
  return (
    <header className="Header">
      <Grid fluid={true}>
        <Row>
          <Col xs={12} sm={9}>
            <h1 className="Header-title">Firebase React Chat</h1>
          </Col>
          <Col xs={12} sm={3}>
            <User />
          </Col>
        </Row>
      </Grid>
    </header>
  );
}