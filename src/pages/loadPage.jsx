import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import logo from "../Logo_1_React_Blue_2.svg";

const Loading = (props) => {
  return (
    // Figure out how to trigger something on the 7th onAnimationStart event. That should start the fade in for the page content without the delay.
    <div
      className="Overlay"
      style={{ display: props.display }}
      onAnimationEnd={props.handleEnd}
      onAnimationStart={() => console.log("Yo, we've started.")}
    >
      <img src={logo} alt="logo" className="StartIcon" />
      <Typist startDelay={2000} avgTypingDelay={70} stdTypingDelay={0.3}>
        <code>npm start</code>
      </Typist>
    </div>
  );
};

export default Loading;
