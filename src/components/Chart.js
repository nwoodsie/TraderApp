import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import Price from "./Price";
import StockHealth from "./StockHealth";
const Plot = createPlotlyComponent(Plotly);

function Chart({ stockSymbol }) {
  const initialState = {
    ChartDateValues: [],
    ChartHighValues: [],
    ChartLowValues: [],
    ChartOpenValues: [],
    ChartCloseValues: [],
  };

  const [chartData, setChartData] = useState(initialState);

  useEffect(() => {
    async function fetchChartData() {
      let ChartDateValuesFunction = [];
      let ChartHighValuesFunction = [];
      let ChartLowValuesFunction = [];
      let ChartOpenValuesFunction = [];
      let ChartCloseValuesFunction = [];
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo`;
      /* const API_KEY = "PZ1TZV8VSEPLPKOA";
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`; */
      const response = await fetch(API_Call);
      const data = await response.json();
      for (var key in data["Time Series (Daily)"]) {
        if (key.includes("2021")) {
          ChartDateValuesFunction.push(key);
          ChartOpenValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
          ChartCloseValuesFunction.push(
            data["Time Series (Daily)"][key]["4. close"]
          );
          ChartHighValuesFunction.push(
            data["Time Series (Daily)"][key]["2. high"]
          );
          ChartLowValuesFunction.push(
            data["Time Series (Daily)"][key]["3. low"]
          );
        }
      }
      console.log(data);
      setChartData({
        ChartDateValues: ChartDateValuesFunction,
        ChartHighValues: ChartHighValuesFunction,
        ChartLowValues: ChartLowValuesFunction,
        ChartCloseValues: ChartCloseValuesFunction,
        ChartOpenValues: ChartOpenValuesFunction,
      });
    }
    fetchChartData();
  }, [stockSymbol]);

  return (
    <Container>
      <PlotContainer>
        <Plot
          data={[
            {
              x: chartData.ChartDateValues,
              close: chartData.ChartCloseValues,
              decreasing: { line: { color: "#7F7F7F" } },
              high: chartData.ChartHighValues,
              increasing: { line: { color: "#17BECF" } },
              line: { color: "rgba(31,119,180,1)" },
              low: chartData.ChartLowValues,
              open: chartData.ChartOpenValues,
              type: "candlestick",
              xaxis: "x",
              yaxis: "y",
            },
          ]}
          config={{
            displayModeBar: false,
            zoom: false,
            responsive: true,
          }}
          trace={{
            increasing: { line: { color: "black" } },
            decreasing: { line: { color: "red" } },
          }}
          layout={{
            autosize: false,
            margin: {
              l: 40,
              r: 20,
              b: 20,
              t: 20,
              pad: 4,
            },

            font: {
              family: "Courier New, monospace",
              size: 16,
              color: "#eeeeee",
            },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            xaxis: {
              type: "date",
              automargin: true,
              rangebreaks: [{ pattern: "day of week", bounds: [6, 1] }],
              yaxis: {
                automargin: true,
              },
            },
          }}
        />
      </PlotContainer>

      <PriceContainer>
        <Price stockSymbol={stockSymbol} />
        <StockHealth stockSymbol={stockSymbol} />
      </PriceContainer>
    </Container>
  );
}

export default Chart;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  justify-content: space-evenly;
  background: var(--main-color1);
  border-radius: 10px;
  margin: 5px;
`;

const PlotContainer = styled.div`
  display: flex;

  height: 100%;
`;

const PriceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
