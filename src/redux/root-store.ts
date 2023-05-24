import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
  combineReducers,
  Reducer,
  CombinedState,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import { State } from "./types";

const myMiddleware: Middleware = (store) => (next) => (action) => {
  // const { type } = action;

  next(action);
  // * do something here after action is done
};

const middlewares = [myMiddleware];

const noLogAction: Array<string> = [];
// * redux logger
const logger = createLogger({
  predicate: (getState, action) => !noLogAction.includes(action.type),
  duration: true,
  collapsed: true,
});

// * only dev env will shows redux log
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const combinedReducers = combineReducers({
  root: reducers,
});

const rootReducer = combinedReducers as Reducer<
  CombinedState<{ root: State }>,
  any
>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
