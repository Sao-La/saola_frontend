import { createStore } from "redux";

import createRootReducer from "reducers";

const store = createStore(
  createRootReducer(),
);

export default store;
