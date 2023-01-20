import {legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerFunction } from "./Home/home.reducer";


const root = combineReducers({
  data:reducerFunction
});

export const store = legacy_createStore(root, applyMiddleware(thunk));