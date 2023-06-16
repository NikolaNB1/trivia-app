import { put, takeLatest, call } from "redux-saga/effects";
import { dovuciKategorije, dovuciSalu, setCategories, setJokes } from "./slice";
import { getCategories, getJoke } from "../../service/ChuckService";

function* chuckHandler(action) {
  try {
    const { data } = yield call(getJoke, action.payload);
    console.log(data);
    yield put(setJokes(data));
  } catch (error) {
    console.log(error);
  }
}

function* categoriesHandler() {
  try {
    const { data } = yield call(getCategories);
    yield put(setCategories(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDovuciSalu() {
  yield takeLatest(dovuciSalu.type, chuckHandler);
}

export function* watchDovuciKategorije() {
  yield takeLatest(dovuciKategorije.type, categoriesHandler);
}
