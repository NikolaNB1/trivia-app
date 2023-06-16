import { API } from "../shared/api";

export const getJoke = () => {
  return API.get("/random");
};
