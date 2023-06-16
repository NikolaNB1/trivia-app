import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  dovuciSalu: () => {},
  dovuciKategorije: () => {},
};

export const chuckSlice = createSlice({
  name: "jokes",
  initialState: {
    value: [],
    categories: [],
  },
  reducers: {
    setJokes: (state, action) => {
      state.value = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performCounterReset,
  setJokes,
  dovuciSalu,
  setCategories,
  dovuciKategorije,
} = chuckSlice.actions;

export default chuckSlice.reducer;
