import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Chart from "./Chart";
import Overview from "./Overview";

function Home() {
  const stockSymbol = useSelector((state) => state.stockSymbol);

  return (
    <HomeContainer>
      <HomeCharts>
        <h1>{stockSymbol}</h1>
        <ChartContainer>
          <Chart stockSymbol="IBM" />
          <Overview stockSymbol="AAPL" />
        </ChartContainer>
      </HomeCharts>

      <StockInfoContainer></StockInfoContainer>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background-color: var(--main-color1);
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeCharts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 110px;
  margin-left: 35px;
  width: 95%;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const StockInfoContainer = styled.div`
  margin: 30px;
  height: 100vh;
`;
