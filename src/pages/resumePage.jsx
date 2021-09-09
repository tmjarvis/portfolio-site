import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import jsLogo from "../images/jsLogo.png";
import reactLogo from "../images/reactLogo.svg";
import reactNativeLogo from "../images/reactNativeLogo.svg";
import htmlLogo from "../images/htmlLogo.png";
import cssLogo from "../images/cssLogo.png";
import nodeLogo from "../images/nodeLogo.png";
import pythonLogo from "../images/pythonLogo.png";
import reduxLogo from "../images/reduxLogo.png";
import sqlLogo from "../images/sqlLogo.png";
import firebaseLogo from "../images/firebaseLogo.png";
import swiftLogo from "../images/swiftLogo.png";
import phpLogo from "../images/phpLogo.svg";
import Button from "../components/customButton";
import resume from "../images/Trevor_Jarvis_Resume.pdf";

class ResumePage extends Component {
  state = {
    techItems: [
      { name: "Javascript", image: jsLogo },
      { name: "React", image: reactLogo },
      { name: "Node", image: nodeLogo },
      { name: "React Native", image: reactNativeLogo },
      { name: "HTML", image: htmlLogo },
      { name: "CSS", image: cssLogo },
      { name: "Redux", image: reduxLogo },
      { name: "Python", image: pythonLogo },
      { name: "PHP", image: phpLogo },
      { name: "Swift", image: swiftLogo },
      { name: "SQL", image: sqlLogo },
      { name: "Firebase", image: firebaseLogo },
    ],
  };
  render() {
    const items = this.state.techItems.map((item, index) => (
      <div className="Image-Grid-Item">
        <img src={item.image} alt={item.name} className="Icon" />
      </div>
    ));
    return (
      <div className="Page">
        {/* <h1 className='Heading'>Some Headline</h1> */}
        <Fade down>
          <div className="Center-Justified">
            <p className="Vertical-Space">
              <code>Check out my resume by clicking here 👇</code>
            </p>
          </div>
          <div className="Center-Justified">
            <Button text="View Resume" type="download" link={resume} />
          </div>
          <div className="Center-Justified">
            <p className="Vertical-Space">
              <code>Some of the technologies I'm familiar with:</code>
            </p>
          </div>
        </Fade>
        <div className="Wrapper-Languages">{items}</div>
      </div>
    );
  }
}

export default ResumePage;
