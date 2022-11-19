import React, { Component, lazy } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
