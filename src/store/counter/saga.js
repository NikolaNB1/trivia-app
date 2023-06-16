import { put, takeLatest } from "redux-saga/effects";
import { performCounterReset, reset } from "./slice";

function* counterHandler() {
  try {
    yield put(reset());
  } catch (error) {
    console.log(error);
  }
}

export function* watchResetCounter() {
  yield takeLatest(performCounterReset.type, counterHandler);
}
