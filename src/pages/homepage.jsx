import React, { Component } from "react";
import Loading from "./loadPage";
import Fade from "react-reveal/Fade";
import LinkedInLogo from "../images/linkedinLogo.png";
import EmailIcon from "../images/emailIcon.svg";
import Button from "../components/customButton";

// Talk about how I specialize in all things Javascript. Frontend, backend, etc. Node, versatile language. Also familiar with others.

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: "",
      animationFinished: false,
      displayLoading: "block",
      displayPage: "none",
    };
    this.endAnimation = this.endAnimation.bind(this);
  }

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
    });
  };

  endAnimation = () => {
    this.setState({
      ...this.state,
      displayLoading: "none",
      displayPage: "block",
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Loading
          handleEnd={this.endAnimation}
          display={this.state.displayLoading}
        />
        <div className="Page" style={{ display: this.state.displayPage }}>
          <Fade left>
            <h1 className="Heading">Trevor Jarvis</h1>
          </Fade>
          <Fade right>
            <div className="Code">
              <p>Senior Software Engineer and Technical Project Manager</p>
              <p>
                I specialize in Javascript and <blue>React</blue>.
              </p>
              <p>
                I use Agile/Scrum methodologies to manage my projects
                effectively.
              </p>
              <p>
                Check out my portfolio{" "}
                <a href="/portfolio" className="Link">
                  HERE
                </a>{" "}
                or click one of the links below to send me a message.
              </p>
            </div>
          </Fade>
          <div className="Wrapper-3-Col" style={{ marginTop: "55px" }}>
            <Fade left>
              <div className="Three-Column-1">
                <Button
                  type="white-image"
                  image={EmailIcon}
                  link="mailto:tmjavascript@gmail.com"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="Three-Column-3">
                <Button
                  type="image"
                  image={LinkedInLogo}
                  link="https://www.linkedin.com/in/trevor-jarvis-b7b235185/"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
