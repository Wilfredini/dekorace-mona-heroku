import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

const express = require("express");
const app = express;
const path = require("path");
const port = process.env.PORT || 5432;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendfile(path.resolve(_dirname, "build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port:", port);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
