import React from "react";
import styled from "styled-components";

function StockInfoSmall({ title, yearHigh, isHigh }) {
  return (
    <StockInfoContainer>
      <TextContainer>
        <strong>{title}</strong>
      </TextContainer>
      <TextContainer>
        {isHigh ? (
          <h1>
            <small>$</small>
            {parseFloat(yearHigh).toFixed(2)}
          </h1>
        ) : (
          <h2>
            <small>$</small>
            {parseFloat(yearHigh).toFixed(2)}
          </h2>
        )}
      </TextContainer>
    </StockInfoContainer>
  );
}

export default StockInfoSmall;

const StockInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 20px;
  background: var(--main-color2);
  border-radius: 10px;
  flex: 0 1 90px;
  margin: 25px;
  box-shadow: 0px 0px 4px 1px var(--sub-color1);
  transition: 0.2s;
  :hover {
    box-shadow: 0px 0px 4px 2px var(--sub-color1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  > strong {
    margin-left: 5px;
    margin-right: 5px;
  }
  > small {
    margin-left: 5px;
    margin-right: 5px;
  }
  > h1 {
    margin-left: 5px;
    margin-right: 5px;
    color: white;

    border-radius: 8px;
    padding: -7px;

    text-shadow: 0px 0px 20px #ffe699;
  }
  > h2 {
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    font-size: 32px;
    border-radius: 8px;
    padding: -7px;
    text-shadow: 0px 0px 20px #ff1a1a;
  }
`;
