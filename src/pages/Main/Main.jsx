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
      {/* </div> */}
    </>
    // </div>
  );
};

export default Main;
