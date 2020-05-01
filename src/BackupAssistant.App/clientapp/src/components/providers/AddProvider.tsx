import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import SelectProviderType from "./SelectProviderType";
import { useForm } from "react-hook-form";
import FtpProvider from "./providerTypes/FtpProvider";
import { providerTypesEnum } from "../../variables";

export default function AddProvider() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [selectedProviderType, setSelectedProviderType] = useState(0);

  function providerTypeSelected(providerType: number) {
    setSelectedProviderType(providerType);
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Add Provider</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Friendly Name</Form.Label>
            <Form.Control name="friendlyName" type="text" ref={register} />
          </Form.Group>

          <SelectProviderType
            register={register}
            providerTypeSelected={providerTypeSelected}
          />

          {selectedProviderType == providerTypesEnum.FtpServer && (
            <FtpProvider register={register}></FtpProvider>
          )}

          <Form.Group className="text-right">
            <Button variant="primary" type="submit">
              Save Provider
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input name="example" defaultValue="test" ref={register} />
    //   <input name="exampleRequired" ref={register({ required: true })} />
    //   {errors.exampleRequired && <span>This field is required</span>}
    //   <input type="submit" />
    // </form>
  );
}
