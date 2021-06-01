import React from "react";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import styled from "styled-components";
const Plot = createPlotlyComponent(Plotly);

function StockHealth() {
  return (
    <PlotContainer>
      <Plot
        data={[
          {
            type: "indicator",
            mode: "gauge+number+delta",
            delta: {
              reference: 3,
              increasing: { color: "#c1c1ff" },
              decreasing: { color: "#7c7cb2" },
            },
            gauge: {
              axis: { range: [null, 5], tickcolor: "darkblue" },
              bar: { color: "aliceblue" },
              steps: [
                { range: [0, 1], color: "#7c7cb2" },
                { range: [1, 2], color: "#8e8ecc" },
                { range: [2, 3], color: "#a0a0ef" },
                { range: [3, 4], color: "#b2b2ff" },
                { range: [4, 5], color: "#c1c1ff" },
              ],
            },

            domain: { x: [0, 1], y: [0, 1] },
            value: 3.5,
            title: { text: "Stock Health" },
          },
        ]}
        config={{
          displayModeBar: false,
          zoom: false,
        }}
        layout={{
          width: 450,
          height: 200,
          font: {
            family: "Courier New, monospace",
            size: 16,
            color: "#eeeeee",
          },
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          margin: { t: 20, b: 20, l: 20, r: 20 },
        }}
      />
      <h1>Stock Health</h1>
    </PlotContainer>
  );
}

export default StockHealth;

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
`;
