import React from "react";
import linkedin from "../images/linkedin.png";
import logo from "../images/logo.png";
import triangle from "../images/triangle.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <item>
          <a href="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/">
            <img src={linkedin} className="icon_footer" />
          </a>
        </item>
        <item>
          <a href="https://github.com/Viki-Robles">
            <img src={logo} className="icon_footer" />
          </a>
        </item>
        <item>
          <a href="https://zeit.co/dashboard/projects">
            <img src={triangle} className="icon_footer" />
          </a>
        </item>
      </div>
    </>
  );
}

/**
 * <div className="footer">
            <item>
                <a href="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/">Linkedin</a></item>
            <item>
                <a href="https://github.com/Viki-Robles">GitHub</a></item>
            <item>
                <a href="https://zeit.co/dashboard/projects">ZEIT</a>
            </item>
            </div>
 */
