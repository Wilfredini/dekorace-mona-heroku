import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import cardImg1 from "../images/service-exterier.jpg";
import CardImg2 from "../images/service-interier.jpg";
import CardImg3 from "../images/tree-branch-person-snow-cold-winter-1390020-pxhere.com.jpg";
import CardImg4 from "../images/light-decoration-meal-food-produce-shine-1153122-pxhere.com.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home d-flex flex-column justify-content-center align-items-center text-center">
        <div className="text-box p-3 bg-light rounded my-5">
          <h1 className="text-primary">Vítám vás na svém webu Dekorace Mona</h1>
          <p className="text-warning">
            Nechejte se ispirovat dekoracemi, které vytvoří tu správnou
            atmosféru a udělají vám radost. Prohlédněte si galerii, dejte mi
            hodnocení, pokud se vám bude něco z mé tvorby líbit, neváhejte se
            ozvat a něco spolu vymyslíme.
          </p>
        </div>
        <div className="photo-banner my-5"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center my-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cardImg1} />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title>Exteriérové dekorace</Card.Title>
                  <Card.Text>
                    Ozdobte si domov z venčí.Halloween , dušičky a další
                    dekorace.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col d-flex justify-content-center align-items-center my-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={CardImg2} />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title>Ozdobné věnce</Card.Title>
                  <Card.Text>
                    Věnce na vchodové dveře, sváteční věnce a věnce na hrob.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col d-flex justify-content-center align-items-center my-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={CardImg3} />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title>Přírodní dekorace</Card.Title>
                  <Card.Text>
                    Nejraději tvořím dekorace, kde jsou použity přírodní prvky.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col d-flex justify-content-center align-items-center my-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={CardImg4} />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title>Interiérové dekorace</Card.Title>
                  <Card.Text>
                    Vdechněte domovu atmosféru.Potěšíte oko každé návštěvy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
