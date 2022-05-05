import { combineReducers } from "redux";
import { chainReducer } from "./chain";

export const rootReducer = combineReducers({
  chains: chainReducer,
});
