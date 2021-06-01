import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToList } from "../store/watchlistSlice";
import swal from "@sweetalert/with-react";

function Price({ stockSymbol }) {
  const dispatch = useDispatch();
  const asxWatchlist = useSelector((state) => state.watchlist.watchlist);

  const addToWatchlist = () =>
    !asxWatchlist.includes(stockSymbol)
      ? dispatch(addToList(stockSymbol))
      : swal({
          text: "That Stock is already in the watchlist!",
          icon: "error",
        });

  const initialState = {
    price: [],
    changePercent: [],
    prevClose: [],
  };

  const [priceData, setPriceData] = useState(initialState);

  useEffect(() => {
    /* let API_Key = "3R7AD5LLUPX38VYD";
    let API_Call = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${API_Key}`; */
    let API_Call = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`;
    async function fetchOverview() {
      const response = await fetch(API_Call);
      const data = await response.json();
      setPriceData({
        price: data["Global Quote"]["05. price"],
        changePercent: data["Global Quote"]["10. change percent"],
        prevClose: data["Global Quote"]["08. previous close"],
      });
      console.log(data);
    }
    fetchOverview();
  }, [stockSymbol]);

  return (
    <PriceContainer>
      <HeaderUser onClick={addToWatchlist}>
        <h2>Add to Watchlist</h2>
      </HeaderUser>
      <h1>Current Price</h1>
      <h1>
        <small>$</small>
        {priceData.price}
      </h1>
      {priceData.prevClose < priceData.price ? (
        <p>+{priceData.changePercent}</p>
      ) : (
        <p>{priceData.changePercent}</p>
      )}
    </PriceContainer>
  );
}

export default Price;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HeaderUser = styled.div`
  font-size: 14px;
  font-weight: 20;
  color: var(--sub-color2);
  font-family: "Impact", sans-serif;
  border-radius: 8px;
  background: var(--main-button);
  box-shadow: 1px 1px var(--main-shadow);
  padding: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 10px;
  transition: 0.2s;

  :hover {
    box-shadow: 0px 0px 0px 1px var(--sub-color2);
    cursor: pointer;
  }
`;
