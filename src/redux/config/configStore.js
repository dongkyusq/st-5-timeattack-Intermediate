// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
import { combineReducers, createStore } from "redux";
import calculator from "../slices/calculatorSlice";

const rootReducer = combineReducers({
  calculator,
});

const store = createStore(rootReducer);
export default store;
