import React from "react";

const Progress = (props) => {
  const section1Class = props.sections.section1 ? "ActiveText" : "ProgressText";
  const section2Class = props.sections.section2 ? "ActiveText" : "ProgressText";
  const section3Class = props.sections.section3 ? "ActiveText" : "ProgressText";
  var filledHeight = 0;
  var filledHeightString = 0;
  if (props.progress && props.windowHeight && props.totalHeight) {
    filledHeight =
      (props.progress / (props.totalHeight - props.windowHeight + 60)) * 80;
    filledHeightString = filledHeight + "vh";
  }
  console.log("Yonder props: ", props, "filledHeight: ", filledHeight);
  //   console.log(
  //     `Progress: ${props.progress}, windowHeight: ${props.windowHeight}, totalHeight: ${props.totalheight}, filledHeight: ${filledHeight}`
  //   );
  return (
    <div className="Progress">
      <div className="ProgressBar" />
      <div
        className="ProgressBarFilled"
        style={{ height: filledHeightString }}
      />
      <p className={section1Class} style={{ top: "15%" }}>
        <code>TKTG</code>
      </p>
      <p className={section2Class} style={{ top: "45%" }}>
        <code>
          Suds{"\n"}
          Scanit
        </code>
      </p>
      <p className={section3Class} style={{ top: "80%" }}>
        <code>
          The Daily{"\n"}
          Shifts
        </code>
      </p>
    </div>
  );
};

export default Progress;
