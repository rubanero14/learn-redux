import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: null,
};

// Creating counter slice which contains reducers and other params inside the object we passing into createSlice()
const quotesSlice = createSlice({
  name: "Quotes", // namespace for this slice
  initialState,
  extraReducers: (builder) => {
    builder.addCase(quotesAsync.fulfilled, (state) => {
      state.value = fetchQuotesJSON();
    });
  },
});

const fetchQuotesJSON = async () => {
  try {
    const result = await axios.get("https://dummyjson.com/quotes");
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

// exporting redcures as action for components usage
export const quotesAsync = createAsyncThunk(
  "quotes/fetchQuotes",
  fetchQuotesJSON
);

// exporting this main reducer for store usage
export default quotesSlice.reducer;
