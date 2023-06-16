const selectSetTrivia = (state) => {
  return state.trivia.value;
};
const selectSetCategory = (state) => state.trivia.categories;

export { selectSetTrivia, selectSetCategory };
