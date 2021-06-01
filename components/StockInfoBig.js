import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToList, removeFromList } from "../store/watchlistSlice";
import swal from "@sweetalert/with-react";

function StockInfoBig({
  asxCode,
  price,
  percentage,
  yearHigh,
  yearLow,
  high,
  low,
  companyName,
  addToWatchlistButton,
}) {
  const dispatch = useDispatch();
  const asxWatchlist = useSelector((state) => state.watchlist.watchlist);
  const addToWatchlist = () =>
    !asxWatchlist.includes(asxCode)
      ? dispatch(addToList(asxCode))
      : swal({
          text: "That Stock is already in the watchlist!",
          icon: "error",
        });
  const removeFromWatchlist = () => {
    swal("Are you sure you want to remove item from the watchlist?", {
      buttons: {
        cancel: "Cancel",
        Remove: {
          text: "Remove",
          value: "Remove",
        },
      },
    })
    .then((value) => {
      switch (value) {
     
        case "Cancel":
          break;
        
        case "Remove":
          dispatch(removeFromList(asxCode));
          swal("Successfully Removed from Watchlist!");
          break;

        default:
          break;
      }
    });
    /* if (
      window.confirm(
        "Are you sure you want to Remove this stock from the Watchlist?"
      )
    ) */
      
  };

  return (
    <>
      {!asxWatchlist.includes(asxCode) ? (
        <StockInfoContainer
          onClick={addToWatchlistButton ? addToWatchlist : removeFromWatchlist}
        >
          <TextContainerTop>
            <strong>{asxCode}</strong> <small>${yearHigh}</small>
            <small>${yearLow}</small> <small>${high}</small>{" "}
            <small>${low}</small>
            <small>${price}</small>
          </TextContainerTop>
          <TextContainerBottom>
            <small>{companyName}</small>
            <vl />
            {percentage.includes("+") ? (
              <green>{percentage}</green>
            ) : percentage.includes("-") ? (
              <red>{percentage}</red>
            ) : (
              <white>{percentage}</white>
            )}
          </TextContainerBottom>
        </StockInfoContainer>
      ) : (
        <StockInfoContainerHighlight
          onClick={addToWatchlistButton ? addToWatchlist : removeFromWatchlist}
        >
          <TextContainerTop>
            <strong>{asxCode}</strong> <small>${yearHigh}</small>
            <small>${yearLow}</small> <small>${high}</small>{" "}
            <small>${low}</small>
            <small>${price}</small>
          </TextContainerTop>
          <TextContainerBottom>
            <small>{companyName}</small>
            <vl />
            {percentage.includes("+") ? (
              <green>{percentage}</green>
            ) : percentage.includes("-") ? (
              <red>{percentage}</red>
            ) : (
              <white>{percentage}</white>
            )}
          </TextContainerBottom>
        </StockInfoContainerHighlight>
      )}
    </>
  );
}

export default StockInfoBig;

const StockInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: var(--main-color1);
  border-radius: 10px;
  height: 50px;
  margin: 5px;
  box-shadow: 0px 0px 4px 2px var(--main-shadow);
  transition: 0.2s;
  :hover {
    box-shadow: 0px 0px 2px 2px var(--main-shadow);
    cursor: pointer;
    border-radius: 0;
  }
`;

const StockInfoContainerHighlight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: var(--main-color1);
  border-radius: 10px;
  height: 50px;
  margin: 5px;
  box-shadow: 0px 0px 4px 0px var(--sub-color1);
  transition: 0.2s;
  :hover {
    box-shadow: 0px 0px 2px 1px var(--sub-color2);
    border-radius: 0;
    cursor: pointer;
  }
`;

const TextContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;

  > strong {
    margin-left: 5px;
    margin-right: 5px;
    flex: 0.166;
  }
  > small {
    text-align: right;
    margin-left: 5px;
    margin-right: 5px;
    flex: 0.1666;
    border-left: 2px solid var(--main-shadow);
    padding: 1px;
  }
`;

const TextContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  }

  > small {
    margin-left: 5px;
    margin-right: 5px;
  }
  > green {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bolder;
    color: white;
    background: rgba(255, 230, 153, 0.6);
    border-radius: 8px;
    padding: 1px;
    box-shadow: 0px 0px 4px 1px lime;
  }

  > red {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bolder;
    color: white;
    background: rgba(255, 0, 0, 0.7);
    border-radius: 8px;
    padding: 1px;
    box-shadow: 0px 0px 4px 1px #ff1a1a;
  }
  > white {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bolder;
    color: white;
    background: var(--main-color2);
    padding: 1px;
    border-radius: 8px;
    padding: 1px;
    box-shadow: 0px 0px 4px 2px var(--main-color2);
  }
`;
