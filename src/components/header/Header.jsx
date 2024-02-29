import React from "react";
import LoGo from "../../assets/brand.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Seçil Store</h1>
    </header>
  );
};

export default Header;
