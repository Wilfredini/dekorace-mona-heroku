import React, { Component } from "react";
import imgHome from "../images/tree-nature-forest-grass-branch-plant-1081335-pxhere 1.png";

class Home extends Component {
  render() {
    return (
      <div className="home d-flex flex-column justify-content-center align-items-center text-center">
        <div className="text-box">
          <div className="overlay"></div>
          <h1>Vítám vás na svém webu Dekorace Mona</h1>
          <p>
            Nechejte se ispirovat dekoracemi, které vytvoří tu správnou
            atmosféru a udělají vám radost. Prohlédněte si galerii, dejte mi
            hodnocení, pokud se vám bude něco z mé tvorby líbit, neváhejte se
            ozvat a něco spolu vymyslíme.
          </p>
          <img src={imgHome} alt="tree minimize" className="img-home" />
        </div>
      </div>
    );
  }
}
export default Home;
