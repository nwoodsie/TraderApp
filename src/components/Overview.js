import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StockInfoSmall from "./StockInfoSmall";
import Media from "react-media";

function Overview({ stockSymbol }) {

  const initialState = {
    description: [],
    Symbol: [],
    Name: [],
    yearLow: [],
    yearHigh: [],
  };

  const [overview, setOverview] = useState(initialState);

  useEffect(() => {
    /* const API_KEY = "885JA3LVHG0EWHB4";
    let API_Call = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY}`; */
    let API_Call = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`;

    async function fetchOverview() {
      const response = await fetch(API_Call);
      const data = await response.json();
      setOverview({
        description: data.Description,
        Symbol: data.Symbol,
        Name: data.Name,
        yearHigh: data["52WeekHigh"],
        yearLow: data["52WeekLow"],
      });
      console.log(data);
    }
    fetchOverview();
  }, [stockSymbol]);

  return (
    <OverviewContainer>
      <TextContainer>
        <h1>{overview.Name}</h1>
        <Media
          query="(min-width: 700px)"
          render={() => <p>{overview.description}</p>}
        />
      </TextContainer>
      <StatsContainer>
        <StockInfoSmall
          title={"52WeekHigh"}
          yearHigh={overview.yearHigh}
          isHigh={true}
        />
        <StockInfoSmall
          title={"52WeekLow"}
          yearHigh={overview.yearLow}
          isHigh={false}
        />
      </StatsContainer>
    </OverviewContainer>
  );
}

export default Overview;

const OverviewContainer = styled.div`
  display: flex;
  color: var(--sub-color2);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--sub-color2);
  padding: 15px;
  > p {
    word-wrap: break-word;
    text-align: justify;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
