import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleRight);

const onChange = (e : any) => {
    console.log(e.target);
};

export default function Rules() {

  return (
    <ListGroup>
      <ListGroup.Item><h3>Rules</h3></ListGroup.Item>
      <ListGroup.Item onClick={onChange} active><FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" /> Yıkıyoruz DB</ListGroup.Item>
      <ListGroup.Item onClick={onChange}><FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" /> Fatih Mongo DB</ListGroup.Item>
      <ListGroup.Item onClick={onChange}><FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" /> Hastanebul Files</ListGroup.Item>
      <ListGroup.Item onClick={onChange}><FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" /> IIS Backups</ListGroup.Item>
      <ListGroup.Item onClick={onChange}><FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" /> User Desktop Files</ListGroup.Item>
    </ListGroup>
  );
}
