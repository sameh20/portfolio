import React, { Component } from "react";
import About from "./../about";
import Work from "./../work";
import Footer from "./../footer";
import Home from "./../home";
import Portifilio from "./../portifilio";
import Profile from "./../profile";
import Socialmedia from "./../socialmedia";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portifilio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
