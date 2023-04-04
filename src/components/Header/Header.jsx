import React from "react";
import HeaderLogoContainer from "./HeaderLogoContainer/HeaderLogoContainer";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderNav from "./HeaderNav/HeaderNav";
// import styles from "./header.module.scss";
import "./header.scss";

const Header = () => {
  return (
    // <div className="container">
    <header className={"header container"}>
      <HeaderLogoContainer />
      <HeaderNav />
      <HeaderContacts />
    </header>
    // </div>
  );
};

export default Header;
