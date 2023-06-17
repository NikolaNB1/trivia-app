import { put, takeLatest, call } from "redux-saga/effects";
import {
  dovuciTriviaKategorije,
  dovuciTriviu,
  setTrivia,
  setTriviaCategory,
} from "./slice";
import { getTrivia, getTriviaCategories } from "../../service/TriviaService";

function* triviaHandler(action) {
  try {
    const { data } = yield call(getTrivia, action.payload);
    yield put(setTrivia(data));
  } catch (error) {
    console.log(error);
  }
}

function* triviaCategoryHandler() {
  try {
    const { data } = yield call(getTriviaCategories);
    yield put(setTriviaCategory(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDovuciTriviu() {
  yield takeLatest(dovuciTriviu.type, triviaHandler);
}

export function* watchDovuciTriviaKategorije() {
  yield takeLatest(dovuciTriviaKategorije.type, triviaCategoryHandler);
}
