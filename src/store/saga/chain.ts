import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { action as typesafeAction } from "typesafe-actions";
import { RootState } from "..";
import { chainService } from "../../services/chain";
import { ChainStatusTypes } from "../types";
import { AnyAction } from "redux";

function* getAllChainsTask(action: AnyAction): any {
  const { meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(chainService.getAllChains);
    if (response && response.data) {
      const chains = (state: RootState) => state.chains;
      const allChains: ReturnType<typeof chains> = yield select(chains);
      yield put(
        typesafeAction(
          ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS,
          response?.data || allChains
        )
      );
      onSuccess?.();
    }
  } catch (error) {
    onError();
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
