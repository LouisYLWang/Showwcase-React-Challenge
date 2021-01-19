import { applyMiddleware, createStore, Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { DispatchType, EducationAction, EducationState } from "../types/Education";
import { reducer } from "./reducer";

export const store: Store<EducationState, EducationAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))

