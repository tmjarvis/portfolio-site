import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Progress from "../components/progress";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
    this.section1Ref = React.createRef();
    this.section2Ref = React.createRef(null);
    this.section3Ref = React.createRef(null);
    this.bottomRef = React.createRef(null);
    this.pageRef = React.createRef();
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
    this.handleNavChange = this.handleNavChange.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      progress: 0,
      sections: {},
      windowHeight: 0,
    };
  }

  componentDidMount() {
    this.updateWindowHeight();
    window.addEventListener("scroll", this.onScroll);
  }

  handleNavChange = (display, top) => {
    this.props.onNavChange(display, top);
  };

  onScroll = () => {
    var progress = window.pageYOffset;
    if (progress == 0) {
      console.log("We're at the top of the page!");
      this.handleNavChange(true, true);
    } else if (this.state.progress + 1 < progress) {
      console.log(
        `Scrolled down, turn nav off. State: ${this.state.progress}, Progress: ${progress}`
      );
      this.handleNavChange(false, false);
    } else if (this.state.progress > progress + 1) {
      console.log("Scrolled up, turn nav back on");
      this.handleNavChange(true, false);
    }
    if (
      this.section1Ref.current &&
      this.section2Ref.current &&
      this.section3Ref.current
    ) {
      //   console.log(`onScroll, window.scrollY: ${progress}`);
      //   console.log(
      //     `onScroll, window.innerheight: ${this.state.windowHeight}, window.bottomPosition: ${this.state.bottomPosition}`
      //   );
      const section1 = this.section1Ref.current.getBoundingClientRect().top;
      if (section1 < 300) {
        const section2 = this.section2Ref.current.getBoundingClientRect().top;
        // console.log(
        //   `Section 1 has passed. Now tracking Section 2: ${section2}`
        // );
        if (section2 < 300) {
          const section3 = this.section3Ref.current.getBoundingClientRect().top;
          if (section3 < 300) {
            this.setState({
              ...this.state,
              progress: progress,
              sections: {
                section3: "active",
              },
            });
          } else {
            this.setState({
              ...this.state,
              progress: progress,
              sections: {
                section2: "active",
              },
            });
          }
        } else {
          this.setState({
            ...this.state,
            progress: progress,
            sections: {
              section1: "active",
            },
          });
        }
      }
    }
  };

  updateWindowHeight() {
    if (this.bottomRef.current) {
      const bottomPosition = this.bottomRef.current.getBoundingClientRect()
        .bottom;
      console.log("Found the position of the bottomRef!", bottomPosition);
      this.setState({
        ...this.state,
        windowHeight: window.innerHeight,
        bottomPosition: bottomPosition,
      });
    } else {
      this.setState({
        ...this.state,
        windowHeight: window.innerHeight,
        bottomPosition: 2000,
      });
    }
  }

  render() {
    return (
      <div className="Page" ref={this.pageRef} onWheel={this.onScroll}>
        <Progress
          sections={this.state.sections}
          progress={this.state.progress}
          windowHeight={this.state.windowHeight}
          totalHeight={this.state.bottomPosition}
        />
        <Fade left>
          <h1 className="Heading">My Portfolio</h1>
          <p>
            <code>Here are some of the projects I've worked on.</code>
          </p>
        </Fade>
        <div className="Wrapper-2-Col">
          <Fade left>
            <div className="Column-1" style={{ gridRow: 1 }}>
              <h1 className="First-Subheading" ref={this.section1Ref}>
                1. <blue>TKTG</blue>
              </h1>
            </div>
            <div className="Column-1" style={{ gridRow: 2 }}>
              <p>
                <code>
                  Code-named TKTG, I built this event management system from
                  scratch. It was designed to be an order of magnitude better
                  than any existing solution through providing better user
                  experience, better analytics, and seamless integration with
                  other systems.
                </code>
              </p>
              <p>
                <code>Features:</code>
              </p>
              <li>
                <code>Stripe Integration for secure payment processing</code>
              </li>
              <li>
                <code>Admin platform for analytics</code>
              </li>
              <li>
                <code>Mobile-first design</code>
              </li>
            </div>
            <div className="Column-2" style={{ gridRow: 2 }}>
              <p style={{ textAlign: "right" }}>
                <code>SCREENSHOT HERE</code>
              </p>
            </div>
            <div className="Column-1" style={{ gridRow: 3 }}>
              <p>
                <code>My role: Architect, Owner</code>
              </p>
            </div>
            <div className="Column-2" style={{ gridRow: 3 }}>
              <p style={{ textAlign: "center" }}>
                <code>Languages Used Here</code>
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="Column-2" style={{ gridRow: 4 }}>
              <h1 className="Subheading" ref={this.section2Ref}>
                2. <blue>Suds ScanIt</blue>
              </h1>
            </div>
            <div className="Column-2" style={{ gridRow: 5 }}>
              <p>
                <code>
                  ScanIt is a project I built at my current job to improve our
                  clients' flow of operations. This tool combines frontend
                  wizardry with a complex backend.
                </code>
              </p>
              <p>
                <code>Features:</code>
              </p>
              <li>
                <code>ZXing-based barcode reader</code>
              </li>
              <li>
                <code>Standalone "Jarvis API" to process requests</code>
              </li>
              <li>
                <code>Data submission to client databases</code>
              </li>
            </div>
            <div className="Column-1" style={{ gridRow: 5 }}>
              <p style={{ textAlign: "left" }}>
                <code>SCREENSHOT HERE</code>
              </p>
            </div>
            <div className="Column-2" style={{ gridRow: 6 }}>
              <p>
                <code>My role: Architect, Senior Engineer</code>
              </p>
            </div>
            <div className="Column-1" style={{ gridRow: 6 }}>
              <p style={{ textAlign: "center" }}>
                <code>Languages Used Here</code>
              </p>
            </div>
          </Fade>
          <Fade left>
            <div
              className="Column-1"
              style={{ gridRow: 7 }}
              ref={this.section3Ref}
            >
              <h1 className="Subheading" ref={this.section3Ref}>
                3. <blue>The Daily Shifts</blue>
              </h1>
            </div>
            <div className="Column-1" style={{ gridRow: 8 }}>
              <p>
                <code>
                  The Daily Shifts is a highly-rated "confident mindfulness
                  app," which users reach their highest selves by providing
                  guidance through simple tasks ("shifts"). Download it on the
                  App Store by clicking{" "}
                  <a href="https://apps.apple.com/us/app/the-daily-shifts/id1441559027">
                    HERE
                  </a>
                </code>
              </p>
              <p>
                <code>Features:</code>
              </p>
              <li>
                <code>Interactive tasks</code>
              </li>
              <li>
                <code>Journaling and task logs</code>
              </li>
              <li>
                <code>Simple UX</code>
              </li>
            </div>
            <div className="Column-2" style={{ gridRow: 8 }}>
              <p style={{ textAlign: "right" }}>
                <code>SCREENSHOT HERE</code>
              </p>
            </div>
            <div className="Column-1" style={{ gridRow: 9 }}>
              <p ref={this.bottomRef}>
                <code>My role: Product Owner (Scrum)</code>
              </p>
            </div>
          </Fade>
          {/* <Fade left>
            <div className="Column-1" style={{ gridRow: 4 }}>
              <p>
                <code>Some sort of thing here.</code>
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="Column-2" style={{ gridRow: 5 }}>
              <p>
                <code>Another thing here. Why isn't it loading?</code>
              </p>
              <p className="Right-Justified">
                <code>
                  Some sort of thing here. Some additional text to show right
                  justified text.
                </code>
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="Column-1" style={{ gridRow: 6 }}>
              <p>
                <code>Some sort of thing here.</code>
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="Column-1" style={{ gridRow: 7 }}>
              <p>
                <code>Another thing here. Why isn't it loading?</code>
              </p>
              <p className="Right-Justified">
                <code>
                  Some sort of thing here. Some additional text to show right
                  justified text.
                </code>
              </p>
            </div>
          </Fade> */}
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
