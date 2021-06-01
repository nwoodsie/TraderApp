import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from '../store/watchlistSlice'

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer
  }
});
