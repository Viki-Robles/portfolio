import React from "react";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="skills">
      <div className="SkillsBorder">
        <img src={props.logo} alt=""/>
      </div>
    </div>
  );
}
