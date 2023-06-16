import { put, takeLatest, call } from "redux-saga/effects";
import { dovuciSalu, performCounterReset, setJokes } from "./slice";
import { getJoke } from "../../service/ChuckService";

function* counterHandler() {
  try {
    const { data } = yield call(getJoke);
    yield put(setJokes(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchResetCounter() {
  yield takeLatest(performCounterReset.type, counterHandler);
}
export function* watchDovuciSalu() {
  yield takeLatest(dovuciSalu.type, counterHandler);
}
