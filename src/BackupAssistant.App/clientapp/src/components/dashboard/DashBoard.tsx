import React from "react";
import { Row, Col } from "react-bootstrap";
import Rules from "./Rules";
import Logs from "./Logs";
import Board from "./Board";

export default function DashBoard() {
  return (
    <Row>
      <Col xs="4">
        <Rules></Rules>
      </Col>
      <Col xs="8">
        <Board></Board>
        <Logs></Logs>
      </Col>
    </Row>
  );
}
