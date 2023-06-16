import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {},
  dovuciSalu: () => {},
};

export const chuckSlice = createSlice({
  name: "jokes",
  initialState: {
    value: {},
  },
  reducers: {
    setJokes: (state, action) => {
      state.value = action.payload;
    },
    ...middlewareActions,
  },
});

export const { performCounterReset, setJokes, dovuciSalu } = chuckSlice.actions;

export default chuckSlice.reducer;
