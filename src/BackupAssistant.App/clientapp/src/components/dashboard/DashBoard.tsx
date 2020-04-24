import React from "react";
import { Row, Col } from "react-bootstrap";
import Rules from "./Rules";
import Logs from "./Logs";

export default function DashBoard() {
  return (
    <Row>
      <Col xs="4">
        <Rules></Rules>
      </Col>
      <Col xs="8">
        <Logs></Logs>
      </Col>
    </Row>
  );
}
