import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import SelectProviderType from "./SelectProviderType";
import { useForm } from "react-hook-form";
import FtpProvider from "./providerTypes/FtpProvider";
import { providerTypesEnum } from "../../variables";
import axios from "axios";

export default function AddProvider({ modalState, closeModal }: any) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [selectedProviderType, setSelectedProviderType] = useState(0);

  function providerTypeSelected(providerType: number) {
    setSelectedProviderType(providerType);
  }

  const onSubmit = (data: any) => {
    var form_data = new FormData();

    for (var key in data) {
      form_data.append(key, data[key]);
    }

    axios({
      method: "post",
      url: "/provider/save",
      data: form_data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response: any) {
        closeModal();
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <Modal show={modalState} onHide={closeModal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Provider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Provider
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input name="example" defaultValue="test" ref={register} />
    //   <input name="exampleRequired" ref={register({ required: true })} />
    //   {errors.exampleRequired && <span>This field is required</span>}
    //   <input type="submit" />
    // </form>
  );
}
