import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EarnMore from "../../components/Offers/EarnMore/EarnMore";
import Benefits from "../../components/Offers/Benefits/Benefits";

const Main = () => {
  return (
    // <div className="container">
    <>
      {/* <div className="container"> */}
      <Header />
      {/* </div> */}
      {/* <div className="container"> */}
      <main className="offers__wrapper">
        <div className="offers container">
          <EarnMore />
          <Benefits />
        </div>
      </main>
      {/* </div> */}
      {/* <div className="container"> */}
      <Footer />
      <div className="ball ball--1">
        <img src="balls/red-ball.png" alt="" />
      </div>
      <div className="ball ball--2">
        <img src="balls/purple-ball.png" alt="" />
      </div>
      <div className="ball ball--3">
        <img src="balls/ball3.png" alt="" />
      </div>
      {/* <div className="ball ball--4">
        <img src="balls/red-light.png" alt="" />
      </div> */}
      {/* </div> */}
    </>
    // </div>
  );
};

export default Main;
