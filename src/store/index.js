import { configureStore } from "@reduxjs/toolkit";
import chuckSlice from "./chuck/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import triviaSlice from "./trivia/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    chuck: chuckSlice,
    trivia: triviaSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
export default store;
