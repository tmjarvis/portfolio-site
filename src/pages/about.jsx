import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Button from "../components/customButton";
import EmailIcon from "../images/emailIcon.svg";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="Page">
        <h1 className="Heading">About Me</h1>
        <p>
          <code>
            Born and raised in Portland, Oregon, I'm living in the Boise area.
          </code>
        </p>
        <p>
          <code>
            Currently "creating what's next" as a senior software engineer at
            Suds Creative, but I'm always looking for cool projects!
          </code>
        </p>
        <p>
          <code>Hit me up!</code>
        </p>
        <div className="Center-Justified Email-Button">
          <Button
            type="image"
            image={EmailIcon}
            link="mailto:tmjavascript@gmail.com"
          />
        </div>
        <Fade left>
          <p>
            <code>
              If you'd like to learn more about this custom-coded portfolio
              site, click 👉{" "}
              <a
                href="https://github.com/tmjarvis/portfolio-site"
                style={{ textDecoration: "none" }}
              >
                <blue>
                  <u>here</u>
                </blue>
              </a>{" "}
              👈
            </code>
          </p>
        </Fade>
      </div>
    );
  }
}

export default AboutPage;
