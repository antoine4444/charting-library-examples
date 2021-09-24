/* tslint:disable */
import * as React from "react";
import { useState } from "react";

const OtherDiv = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={toggleShow}>
        click to load/unload div id="tv_chart_container"
      </button>
      <p>div is mounted: {show.toString()}</p>
      {show && <div id="tv_chart_container" className={"TVChartContainer"} />}
    </>
  );
};

export default OtherDiv;
