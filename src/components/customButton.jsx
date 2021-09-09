import React from "react";

const CustomButton = (props) => {
  let customButton = {};
  if (props.type == "image") {
    customButton = <img src={props.image} className="ImageButton" />;
  } else if (props.type == "white-image") {
    customButton = <img src={props.image} className="White-ImageButton" />;
  } else {
    customButton = (
      <custombutton>
        <code>{props.text}</code>
      </custombutton>
    );
  }

  if (props.type === "download") {
    return (
      <a onClick={() => window.open(props.link, "_blank")}>{customButton}</a>
    );
  }

  return (
    <a href={props.link} className="Link">
      {customButton}
    </a>
  );
};

export default CustomButton;
