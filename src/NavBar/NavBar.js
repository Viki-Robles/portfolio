import React from "react";
import mylogo from "../images/mylogo.png";
import "./NavBar.css";

export default function NavBar() {
  const [menuDisplay, setMenuDisplay] = React.useState("menuDisplayoff");

  function toggleMenu() {
    setMenuDisplay(menuDisplay === "menuDisplayoff" ? "" : "menuDisplayoff");
  }

  return (
    <div>
      <nav className="myNav">
        <button className="burgerButton" onClick={() => toggleMenu()}>
          <img className="burger" src={mylogo} alt="burger" />
        </button>
      </nav>
      <main className="navMenu" id={menuDisplay}>
        <h4 className="navItem">
          <a href="#portfolio" onClick={() => toggleMenu()}>
            1. portfolio
          </a>
        </h4>
        <h4 className="navItem">
          <a href="#services" onClick={() => toggleMenu()}>
            2. services
          </a>
        </h4>
        <h4 className="navItem">
          <a href="#myDetails" onClick={() => toggleMenu()}>
            3. contact
          </a>
        </h4>
      </main>
    </div>
  );
}
