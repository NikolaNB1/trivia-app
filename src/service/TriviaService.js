import { API } from "../shared/triviaApi";

export const getTrivia = (category, count = 30) => {
  if (!category) {
    return API.get(`/random?count=${count}`);
  } else {
    return API.get(`/clues?category=${category}`);
  }
};

export const getTriviaCategories = (count = 10) => {
  return API.get(`/categories?count=${count}`);
};

export const getTriviaValues = (value) => {
  return API.get(`/clues?value=${value}`);
};
