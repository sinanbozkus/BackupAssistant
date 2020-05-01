import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faCog } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleRight, faCog);

const onChange = (e: any) => {
  console.log(e.target);
};

export default function Rules() {
  return (
    <Card>
      <Card.Header style={{ fontWeight: "bold", fontSize: "15px" }}>
        Backup Rules
      </Card.Header>
      <ListGroup>
        <ListGroup.Item onClick={onChange} active>
          <FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
          Yıkıyoruz DB
          <FontAwesomeIcon icon={["fas", "cog"]} className="float-right mt-1 text-light" />
        </ListGroup.Item>
        <ListGroup.Item onClick={onChange}>
          <FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
          Fatih Mongo DB
          <FontAwesomeIcon icon={["fas", "cog"]} className="float-right mt-1 text-light" />
        </ListGroup.Item>
        <ListGroup.Item onClick={onChange}>
          <FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
          Hastanebul Files
          <FontAwesomeIcon icon={["fas", "cog"]} className="float-right mt-1 text-light" />
        </ListGroup.Item>
        <ListGroup.Item onClick={onChange}>
          <FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
          IIS Backups
          <FontAwesomeIcon icon={["fas", "cog"]} className="float-right mt-1 text-light" />
        </ListGroup.Item>
        <ListGroup.Item onClick={onChange}>
          <FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
          User Desktop Files
          <FontAwesomeIcon icon={["fas", "cog"]} className="float-right mt-1 text-light" />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
