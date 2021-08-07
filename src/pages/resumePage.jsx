import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import jsLogo from "../images/jsLogo.png";
import reactLogo from "../images/reactLogo.svg";
import htmlLogo from "../images/htmlLogo.png";
import cssLogo from "../images/cssLogo.png";
import Button from "../components/customButton";

class ResumePage extends Component {
  state = {};
  render() {
    return (
      <div className="Page">
        {/* <h1 className='Heading'>Some Headline</h1> */}
        <Fade down>
          <div className="Center-Justified">
            <p>
              <code>Check out my resume by clicking here 👇</code>
            </p>
          </div>
          <div className="Center-Justified">
            <Button text="Download Resume" link="google.com" className />
          </div>
          <div className="Center-Justified">
            <p>
              <code>Some of the technologies I'm familiar with:</code>
            </p>
          </div>
        </Fade>
        <div className="Wrapper-3-Col">
          <div className="Three-Column-1">
            <Fade left>
              <p>
                <code>
                  Javascript -{" "}
                  <img src={jsLogo} alt="Javascript" className="Icon" /> - Skill
                  Level: Wizard 🧙‍♂️
                </code>
              </p>
              <p>
                <code>
                  HTML & CSS -{" "}
                  <img src={htmlLogo} alt="HTML" className="Icon" />
                  <img src={cssLogo} alt="CSS" className="Icon" />
                </code>
              </p>
            </Fade>
          </div>
          <div className="Three-Column-3">
            <Fade right>
              <p>
                <code>
                  React - <img src={reactLogo} alt="React" className="Icon" /> -
                  Skill Level: Wizard 🧙‍♂️
                </code>
              </p>
              <p>
                <code>
                  React Native -{" "}
                  <img src={reactLogo} alt="React" className="Icon" />
                </code>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
