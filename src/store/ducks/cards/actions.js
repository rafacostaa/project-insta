import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  INCREMENT_BID,
} from "./actionTypes";

export function loadRequest() {
  return {
    type: LOAD_REQUEST,
  };
}
export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  };
}
export function loadFailure() {
  return {
    type: LOAD_FAILURE,
  };
}
export function incrementBid(id) {
  return {
    type: INCREMENT_BID,
    payload: id,
  };
}
