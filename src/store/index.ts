import { applyMiddleware, Store } from "redux";
import { legacy_createStore as createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import logger from "redux-logger";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "@src/store/reducer";
import { rootSaga } from "./saga";

const isDevelopmentMode: boolean =
  process.env.NODE_ENV === "production" ? false : true;

const sagaMiddleware = createSagaMiddleware();
const isServer = typeof window === "undefined";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  } else {
    const store: any = createStore(
      rootReducer,
      bindMiddleware([sagaMiddleware])
    );

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const wrapper = createWrapper(makeStore, { debug: isDevelopmentMode });
