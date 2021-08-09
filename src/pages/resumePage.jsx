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
        <div className="Wrapper-Languages">
          <div>
            <img src={jsLogo} alt="Javascript" className="Icon" />
            <p>
              <code>Javascript - 🧙‍♂️</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>React - 🧙‍♂️</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>Node JS</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>React Native</code>
            </p>
          </div>
          <div>
            <img src={htmlLogo} alt="HTML" className="Icon" />
            <p>
              <code>HTML</code>
            </p>
          </div>
          <div>
            <img src={cssLogo} alt="CSS" className="Icon" />
            <p>
              <code>CSS</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>Redux</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>Python</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>PHP</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>Swift</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>SQL</code>
            </p>
          </div>
          <div>
            <img src={reactLogo} alt="React" className="Icon" />
            <p>
              <code>Firebase</code>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
