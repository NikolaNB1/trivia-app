import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {},
  reducers: {
    ...middlewareActions,
  },
});

export const { performCounterReset } = counterSlice.actions;

export default counterSlice.reducer;
