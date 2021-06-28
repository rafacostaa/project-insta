import { call, put } from "redux-saga/effects";
import api from "../../../service/api";
import { loadSuccess, loadFailure } from "./actions";

export default function* load() {
  try {
    const response = yield call(api.get);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
