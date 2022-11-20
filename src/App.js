import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/Home"
            element={
              <React.Suspense fallback="Loading...">
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <React.Suspense fallback="Loading...">
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/Services"
            element={
              <React.Suspense fallback="Loading...">
                <Services />
              </React.Suspense>
            }
          />
          <Route
            path="/Gallery"
            element={
              <React.Suspense fallback="Loading...">
                <Gallery />
              </React.Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <React.Suspense fallback="Loading...">
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="/Login"
            element={
              <React.Suspense fallback="Loading...">
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="/Register"
            element={
              <React.Suspense fallback="Loading...">
                <Register />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
