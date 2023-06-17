import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  dovuciTriviu: () => {},
  dovuciTriviaKategorije: () => {},
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
    setTriviaCategory: (state, action) => {
      state.categories = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performCounterReset,
  setTrivia,
  dovuciTriviu,
  setTriviaCategory,
  dovuciTriviaKategorije,
} = triviaSlice.actions;

export default triviaSlice.reducer;
