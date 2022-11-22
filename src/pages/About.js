import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about text-center">
        <div className="about-bg"></div>
        <div className="about-background">
          <h1 className="about-title mb-5">
            Ahoj, jmenuju se <span>Monika</span>
          </h1>
          <div className="row justify-content-evenly text-center mt-5">
            <div className="col d-none d-sm-block"></div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
              <div className="about-text-box">
                <h2>Taky máte rádi oku lahodící věci?</h2>
                <p>
                  U mně jste na správné adrese. Stačí mne kontaktovat, sdělit mi
                  své představy a určitě spolu vymyslíme dekoraci kterou by jste
                  si přáli.
                </p>
              </div>
            </div>
            <div className="row justify-content-evenly text-center my-5">
              <div className="col d-flex flex-column align-items-center justify-content-center">
                <div className="about-text-box">
                  <h2>Vyrábím dekorace s radostí</h2>
                  <p>
                    Mým koníčkem je výroba dekorací.Vyrábím dekorace z
                    přírodních materiálů, z dekorativních prvků všech tvarů a
                    barev. Začala jsem s výrobou dekorací jen pro sebe a pro své
                    známé, nicméně se poptávka rozšířila a tak jsem se rozhodla,
                    že své služby nabídnu širší veřejnosti.
                  </p>
                </div>
              </div>
              <div className="col d-none d-sm-block"></div>
            </div>
            <div className="row justify-content-evenly text-center py-5">
              <div className="col d-none d-sm-block"></div>
              <div className="col">
                <div className="about-text-box">
                  <h2>Dekorace nejenom na vánoce</h2>
                  <p>
                    Nespecializuji se jenom na vánoční dekorace. Vyrábím také
                    věnce na hřbitov, tématické dekorace a samozřejmě také
                    dekorativní prvky do interiéru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
