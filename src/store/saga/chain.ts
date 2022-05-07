import { all, call, put, takeLatest } from "redux-saga/effects";
import { action as typesafeAction } from "typesafe-actions";
import { chainService } from "../../services/chain";
import { ChainStatusTypes } from "../types";
import { AnyAction } from "redux";

function* getAllChainsTask(action: AnyAction): any {
  const { meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(chainService.getAllChains);
    if (response && response.data) {
      yield put(
        typesafeAction(
          ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS,
          Object.values(response?.data)
        )
      );
      onSuccess?.();
    }
  } catch (error) {
    onError?.();
    console.log(error);
  }
}

function* actionWatcher() {
  yield takeLatest(
    ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST,
    getAllChainsTask
  );
}

export default function* rootChainSaga() {
  yield all([actionWatcher()]);
}
