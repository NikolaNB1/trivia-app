import { API } from "../shared/chuckApi";

export const getJoke = (category) => {
  if (!category) {
    return API.get("/random");
  } else return API.get(`random?category=${category}`);
};

export const getCategories = () => {
  return API.get("/categories");
};
