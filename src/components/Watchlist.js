import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import StockInfoBig from "./StockInfoBig.js";

function Watchlist() {
  const asxData = useSelector((state) => state.watchlist.data);
  const asxWatchlist = useSelector((state) => state.watchlist.watchlist);

  return (
    <WatchlistBackground>
      <WatchlistContainer>
        <WatchlistTitle>
          <h1>Watchlist </h1>
        </WatchlistTitle>
        <WatchlistHeader>
          <h3>Name</h3>
          <strong>52wk High</strong>
          <strong>52wk Low</strong>
          <strong>24h High</strong>
          <strong>24h Low</strong>
          <strong>Price</strong>
        </WatchlistHeader>

        {asxWatchlist.map((code) =>
          asxData.map((data) =>
            data.title === code ? (
              <StockInfoBig
                asxCode={data.title}
                price={data.price}
                percentage={data.percentage}
                high={data.high}
                low={data.low}
                yearHigh={data.yearHigh}
                yearLow={data.yearLow}
                companyName={data.companyName}
                addToWatchlistButton={false}
              />
            ) : (
              console.log(data.title)
            )
          )
        )}
      </WatchlistContainer>
    </WatchlistBackground>
  );
}

export default Watchlist;
/*  */

const WatchlistBackground = styled.div`
  background-color: var(--main-color1);
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WatchlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 35px;
`;

const WatchlistTitle = styled.div`
  margin-bottom: 20px;
`;

const WatchlistHeader = styled.div`
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
/*  {asxData.map((data) => (
          <StockInfoBig
            asxCode={data.title}
            price={data.price}
            percentage={data.percentage}
            high={data.high}
            low={data.low}
            yearHigh={data.yearHigh}
            yearLow={data.yearLow}
            companyName={data.companyName}
            addToWatchlistButton={false}
          /> */
