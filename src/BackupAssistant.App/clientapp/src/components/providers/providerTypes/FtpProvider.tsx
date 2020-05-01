import React from "react";
import { Form } from "react-bootstrap";

export default function FtpProvider({ register, ...props }: any) {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Server</Form.Label>
        <Form.Control name="server" type="text" ref={register} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Port</Form.Label>
        <Form.Control name="port" type="number" defaultValue="21" ref={register} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" type="text" ref={register} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="text" ref={register} />
      </Form.Group>
    </div>
  );
}
