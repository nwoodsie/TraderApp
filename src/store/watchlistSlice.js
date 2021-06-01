import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
  stockSymbol: [],
  data: [
    {
      title: "GME",
      companyName: "GameStop Corp.",
      price: 158.36,
      percentage: "-11.90%",
      yearHigh: 483.7,
      yearLow: 3.49,
      high: 25.05,
      low: 25.5,
    },
    {
      title: "ZIP",
      companyName: "Zip Co Ltd.",
      price: 8.29,
      percentage: "+0.01%",
      yearHigh: 14.53,
      yearLow: 1.81,
      high: 8.51,
      low: 8.22,
    },
    {
      title: "AMC",
      companyName: "AMC Entertainment Holdings Inc.",
      price: 9.42,
      percentage: "-3.78%",
      yearHigh: 20.36,
      yearLow: 1.91,
      high: 9.74,
      low: 9.24,
    },
    {
      title: "FFG",
      companyName: "Fatfish Group Limited (FFG.AX)",
      price: 0.12,
      percentage: "0.00%",
      yearHigh: 0.43,
      yearLow: 0.006,
      high: 0.14,
      low: 0.12,
    },
    {
      title: "VML",
      companyName: "Vital Metals Limited.",
      price: 0.073,
      percentage: "-6.41%",
      yearHigh: 0.09,
      yearLow: 0.007,
      high: 0.77,
      low: 0.7,
    },
    {
      title: "IBM",
      companyName: "International Business Machines Corporation.",
      price: 143.74,
      percentage: "-0.05%",
      yearHigh: 148.38,
      yearLow: 101.89,
      high: 143.75,
      low: 143.74,
    },
  ],
  loading: "idle",
  error: null,
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeFromList: (state, action) => {
      const newWatchlist = state.watchlist.filter(
        (asx) => asx !== action.payload
      );
      return {
        ...state,
        watchlist: newWatchlist,
      };
    },
    setSymbol: (state, action) => {
      return {
        ...state,
        stockSymbol: action.payload,
      };
    },
  },
});

const { actions, reducer } = watchlistSlice;

export const { addToList, removeFromList, setSymbol } = actions;

export default reducer;
