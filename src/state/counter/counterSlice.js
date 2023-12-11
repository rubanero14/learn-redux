import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// Creating counter slice which contains reducers and other params inside the object we passing into createSlice()
const counterSlice = createSlice({
  name: "Counter", // namespace for this slice
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value < 1 ? 0 : state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value < 1 ? 0 : (state.value -= action.payload);
    },
  },
});

// exporting redcures as action for components usage
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

// exporting this main reducer for store usage
export default counterSlice.reducer;
