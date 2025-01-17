import React from "react";
import Plot from "react-plotly.js";

const ZipfScatterPlot = ({ xAxis, yAxis, vKeys, file_name }) => {
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
    title: {
      text: `Zipf's Law - ${file_name}`,
      font: {
        family: "Courier New, monospace",
        size: 24,
      },
    },
    xaxis: {
      title: {
        text: "Log(Ranking)",

        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },

    yaxis: {
      title: {
        text: "Log(Frequency)",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },
  };

  return <Plot className="plot" data={dataParam} layout={layoutParam} />;
};

export default ZipfScatterPlot;
