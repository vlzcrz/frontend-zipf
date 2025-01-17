import React from "react";
import Plot from "react-plotly.js";

const ZipfScatterPlot = ({ xAxis, yAxis, vKeys }) => {
  const dataParam = [
    {
      x: xAxis,
      y: yAxis,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
      text: vKeys,
      hoverinfo: "text",
    },
  ];

  const layoutParam = {
    width: 1280,
    height: 768,
    title: { text: "Zipf's law" },
  };

  return <Plot className="plot" data={dataParam} layout={layoutParam} />;
};

export default ZipfScatterPlot;
