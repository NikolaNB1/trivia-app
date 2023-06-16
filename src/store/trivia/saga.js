import { put, takeLatest, call } from "redux-saga/effects";
import { dovuciTriviu, setTrivia } from "./slice";
import { getTrivia } from "../../service/TriviaService";

function* triviaHandler() {
  try {
    const { data } = yield call(getTrivia);
    yield put(setTrivia(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDovuciTriviu() {
  yield takeLatest(dovuciTriviu.type, triviaHandler);
}
