import { API } from "../shared/triviaApi";

export const getTrivia = (count = 30) => {
  return API.get(`/random?count=${count}`);
};

export const getCategories = (count = 10) => {
  return API.get(`/categories?count=${count}`);
};
