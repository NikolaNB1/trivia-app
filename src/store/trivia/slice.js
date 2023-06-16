import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  dovuciTriviu: () => {},
  dovuciKategorije: () => {},
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    value: [],
    categories: [],
  },
  reducers: {
    setTrivia: (state, action) => {
      state.value = action.payload;
    },
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performCounterReset,
  setTrivia,
  dovuciTriviu,
  setCategory,
  dovuciKategorije,
} = triviaSlice.actions;

export default triviaSlice.reducer;
