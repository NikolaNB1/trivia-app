const selectSetJokes = (state) => {
  return state.chuck.value;
};
const selectSetCategories = (state) => state.chuck.categories;

export { selectSetJokes, selectSetCategories };
