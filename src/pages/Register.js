import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Register extends Component {
  render() {
    return (
      <div className="registration-container d-flex flex-column justify-content-center align-items-center">
        <Form className="bg-primary p-4 rounded" variant="dark">
          <Form.Group className="mb-3" controlId="registerName">
            <Form.Label className="text-white">Celé jméno</Form.Label>
            <Form.Control type="text" placeholder="Vaše jméno" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label className="text-white">Emailová adresa</Form.Label>
            <Form.Control type="email" placeholder="Zadejte email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-white">Heslo</Form.Label>
            <Form.Control type="password" placeholder="Zadejte heslo" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label className="text-white">Potvrzení hesla</Form.Label>
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
}
export default Register;
