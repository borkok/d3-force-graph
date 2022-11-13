import React, { memo, useEffect, useRef } from "react";
import { drawGraph } from "./draw";

const Graph = ({ data, width, height, charge }) => {
  const canvas = useRef();

  useEffect(() => {
    drawGraph(data, width, height, charge, canvas.current);
  }, [data, width, height, charge]);

  return (
    <div>
      <svg ref={canvas} data-testid="svg-canvas" />
    </div>
  );
};

export default memo(Graph);
