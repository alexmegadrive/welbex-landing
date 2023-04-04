import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleOffer from "../../components/Offers/TitleOffer/TitleOffer";
import Benefits from "../../components/Offers/Benefits/Benefits";

const Main = () => {
  return (
    <>
      <Header />
      <main className="offers__wrapper">
        <div className="offers container">
          <TitleOffer />
          <Benefits />
        </div>
      </main>
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
    </>
  );
};

export default Main;
