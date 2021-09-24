/* tslint:disable */
import * as React from "react";
import { useState } from "react";
import { TVChartContainer } from "./TVChartContainer";

const Wrapper = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleShow}>
        click to load/unload TVChartContainer
      </button>
      {show && <TVChartContainer />}
    </div>
  );
};

export default Wrapper;
