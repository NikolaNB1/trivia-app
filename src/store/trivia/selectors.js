const selectSetTrivia = (state) => {
  return state.trivia.value;
};
const selectSetCategory = (state) => state.trivia.categories;
const selectSetValue = (state) => state.trivia.vrednosti;

export { selectSetTrivia, selectSetCategory, selectSetValue };
