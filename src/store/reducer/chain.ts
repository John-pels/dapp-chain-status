import { Reducer } from "redux";
import { chainActions, chainState, ChainStatusTypes } from "../types";

const INITIAL_STATE: chainState = {
  allchainNetworks: [],
};

const chainReducer: Reducer<chainState, chainActions> = (
  state: chainState = INITIAL_STATE,
  action: chainActions
): chainState => {
  switch (action.type) {
    case ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS: {
      return {
        ...state,
        allchainNetworks: action.payload,
      };
    }

    default:
      return state;
  }
};

export { chainReducer };
