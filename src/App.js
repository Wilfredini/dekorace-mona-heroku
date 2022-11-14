import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
