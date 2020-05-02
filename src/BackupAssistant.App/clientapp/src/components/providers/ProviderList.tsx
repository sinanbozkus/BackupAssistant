import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export default function ProviderList() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    GetProviders();
  }, []);

  function GetProviders() {
    axios.post("/provider/getlist").then(function (response) {
      setProviders(response.data);
    });
  }

  return (
    <>
      <Row>
        {providers.map((pt: any) => {
          return (
            <Col xs="4">
              <Card border="secondary" key={pt.id}>
                <Card.Body>
                  <Card.Title>{pt.friendlyName}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
