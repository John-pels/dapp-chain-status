import { all } from "redux-saga/effects";
import rootChainSaga from "./chain";

export function* rootSaga() {
  yield all([rootChainSaga()]);
}
