import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends Component {
  render() {
    return (
      <div className="registration-container d-flex flex-column justify-content-center align-items-center">
        <Form className="bg-primary p-4 rounded" variant="dark">
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className="text-white">Emailová adresa</Form.Label>
            <Form.Control type="email" placeholder="Zadejte email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-white">Heslo</Form.Label>
            <Form.Control type="password" placeholder="Zadejte heslo" />
          </Form.Group>
          <Button variant="dark" type="submit" className="mt-3 w-100">
            Přihlásit
          </Button>
          <h6 className="text-secondary text-center mb-0 mt-2">
            Ještě nemáš registraci?
            <a className="text-light ms-1" href="/Register">
              Zaregistrovat se
            </a>
          </h6>
        </Form>
      </div>
    );
  }
}
export default Login;
