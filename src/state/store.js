import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import quoteReducer from "./quote/quoteSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quoteReducer,
  },
});

export default store;
