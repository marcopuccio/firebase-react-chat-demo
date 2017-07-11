import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap';

import image from 'images/octocat.jpg';
import { User } from 'components/User';
import './Header.css';

export default function Header(props) {
  const repoUrl = 'https://github.com/marcopuccio/firebase-react-chat-demo';
  return (
    <header className="Header">
      <Grid fluid={true}>
        <Row>
          <Col xs={10} sm={8}>
            <h1 className="Header-title">Firebase React Chat</h1>
          </Col>
          <Col xs={2} sm={1}>
            <a href={repoUrl} target="_new">
              <Image src={image} responsive className="Header-github"/>
            </a>
          </Col>
          <Col xs={12} sm={3}>
            <User />
          </Col>
        </Row>
      </Grid>
    </header>
  );
}