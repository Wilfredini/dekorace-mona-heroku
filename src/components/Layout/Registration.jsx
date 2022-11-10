import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Registration({ Registration, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Registration(details);
  };

  return (
    <div className="registration-container d-flex flex-column justify-content-center align-items-center">
      <Form
        onSubmit={submitHandler}
        className="bg-primary p-4 rounded"
        variant="dark"
      >
        <Form.Group className="mb-3" controlId="registerName">
          <Form.Label className="text-secondary">Celé jméno</Form.Label>
          <Form.Control type="text" placeholder="Vaše jméno" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label className="text-secondary">Emailová adresa</Form.Label>
          <Form.Control type="email" placeholder="Zadejte email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label className="text-secondary">Heslo</Form.Label>
          <Form.Control type="password" placeholder="Zadejte heslo" />
        </Form.Group>
        <Button variant="dark" type="submit" className="mt-3 w-100">
          Registrovat
        </Button>
        <h6 className="text-secondary text-center mb-0 mt-2">
          Už máš registraci? <br /> Tak se přihlaš. <br />
          <a className="text-light ms-1" href="/login">
            Přihlásit
          </a>
        </h6>
      </Form>
    </div>
  );
}

export default Registration;
