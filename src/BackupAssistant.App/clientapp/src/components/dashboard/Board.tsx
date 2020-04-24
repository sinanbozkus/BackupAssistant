import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function Board() {
  return (
    <Row>
      <Col xs="4">
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
