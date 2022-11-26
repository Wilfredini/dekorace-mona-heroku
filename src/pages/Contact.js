import React, { Component } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Poloha from "./Poloha";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-bg"></div>
        <div className="contact-box text-center">
          <h1 className="contact-title text-center">Kontaktujte mně</h1>
          <div className="row d-flex justify-content-center align-item-center w-100 py-5">
            <div className="col-12 col-xs-6 col-md-3 py-3">
              <div className="contact-item d-flex flex-column  align-items-center">
                <FaEnvelope />
                <p className="contact-item-title">
                  Email: <br /> <span>matulovamona@seznam.cz</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 py-3">
              <div className=" contact-item d-flex flex-column  align-items-center">
                <FaPhoneAlt />
                <p className="contact-item-title">
                  Telefon: <br /> <span>605347101</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 py-3">
              <div className=" contact-item d-flex flex-column align-items-center">
                <ImHome />
                <p className="contact-item-title">
                  Adresa: <br /> <span>Moravský Písek</span> <br />
                  <span>Velkomoravská 503</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 py-3">
              <div className="contact-item d-flex flex-column justify-content-center align-items-center">
                <a href="https://www.facebook.com/profile.php?id=100078345931736">
                  <FaFacebookMessenger />
                </a>
                <p className="contact-item-title">
                  Napište mi na messenger kliknutím na ikonku
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-5 flex-wrap-wrap">
            <div className="col-12 col-md-6 py-2">
              <Form className="p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="w-100 text-start text-light">
                    Emailová adresa
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="w-100 text-start text-light">
                    Vaše jméno
                  </Form.Label>
                  <Form.Control type="text" placeholder="Vaše jméno" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Napište zprávu"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-12 col-md-6 py-2">
              <Poloha />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
