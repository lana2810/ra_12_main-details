import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
  loading: true,
  error: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    serviceRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    serviceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    serviceSuccess: (state, action) => {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { serviceRequest, serviceFailure, serviceSuccess } =
  serviceSlice.actions;

export const selectService = (state) => state.service;

export default serviceSlice.reducer;
