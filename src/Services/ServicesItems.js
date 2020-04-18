import React from "react";
import "./ServicesItems.css";

export default function ServicesItems(props) {
  return (
    <>
      <div className="ServiceBox">
        <div className="BoxTitle">
          {props.BoxTitle}
          <div className="BoxIcon">
            <img src={props.BoxIcon} alt=""/>
          </div>
          <div className="BoxContent">{props.BoxContent}</div>
        </div>
      </div>
    </>
  );
}
