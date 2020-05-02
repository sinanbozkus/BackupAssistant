import React, { useState } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import AddProvider from "./AddProvider";
import ProviderList from "./ProviderList";

export default function Providers() {
  const [addProviderModalState, setAddProviderModal] = useState(false);

  const closeAddProviderModal = () => setAddProviderModal(false);
  const openAddProviderModal = () => setAddProviderModal(true);

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title className="w-100">
            Providers
            <Button
              variant="primary"
              className="float-right"
              onClick={() => openAddProviderModal()}
            >
              Add Provider
            </Button>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <ProviderList />
        </Card.Body>
      </Card>

      <AddProvider
        modalState={addProviderModalState}
        closeModal={closeAddProviderModal}
      ></AddProvider>
    </>
  );
}
