import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { serviceEpic, serviceListEpic } from "../epics";
import serviceListReducer from "../slices/serviceListSlice";
import serviceReducer from "../slices/serviceSlice";

const epic = combineEpics(serviceEpic, serviceListEpic);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    serviceList: serviceListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

epicMiddleware.run(epic);
