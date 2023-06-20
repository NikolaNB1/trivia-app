import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  dovuciTriviu: () => {},
  dovuciTriviaKategorije: () => {},
  dovuciTriviaValue: () => {},
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    value: [],
    categories: [],
    vrednosti: [],
  },
  reducers: {
    setTrivia: (state, action) => {
      state.value = action.payload;
    },
    setTriviaCategory: (state, action) => {
      state.categories = action.payload;
    },
    setTriviaValue: (state, action) => {
      state.vrednosti = action.payload;
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
  dovuciTriviaValue,
  setTriviaValue,
} = triviaSlice.actions;

export default triviaSlice.reducer;
