import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StockInfoBig from "./StockInfoBig.js";

function Stocklist() {
  fetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7226c641cfmsh6ec08c6bf99b593p1d201bjsndf9317799a38",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  const asxData = useSelector((state) => state.watchlist.data);
  return (
    <StocklistBackground>
      <StocklistContainer>
        <StocklistTitle>
          <h1>Stocks</h1>
        </StocklistTitle>
        <StocklistHeader>
          <h3>Name</h3>
          <strong>52wk High</strong>
          <strong>52wk Low</strong>
          <strong>24h High</strong>
          <strong>24h Low</strong>
          <strong>Price</strong>
        </StocklistHeader>

        {asxData.map((data) => (
          <StockInfoBig
            asxCode={data.title}
            price={data.price}
            percentage={data.percentage}
            high={data.high}
            low={data.low}
            yearHigh={data.yearHigh}
            yearLow={data.yearLow}
            companyName={data.companyName}
            addToWatchlistButton={true}
          />
        ))}
      </StocklistContainer>
    </StocklistBackground>
  );
}

export default Stocklist;

const StocklistBackground = styled.div`
  background-color: var(--main-color1);
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StocklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 35px;
`;

const StocklistTitle = styled.div`
  margin-bottom: 20px;
`;

const StocklistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--main-color3);
  height: 35px;
  margin: 5px;
  box-shadow: 0px 0px 10px 3px var(--main-shadow);
  > strong {
    margin-left: 5px;
    margin-right: 5px;
    flex: 0.1666;
    text-align: right;
    border-left: 2px solid var(--main-shadow);
    padding: 1px;
  }

  > h3 {
    margin-left: 5px;
    margin-right: 5px;
    flex: 0.16;
    text-align: left;
  }
`;
