import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const serviceListSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    serviceListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    serviceListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    serviceListSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { serviceListRequest, serviceListFailure, serviceListSuccess } =
  serviceListSlice.actions;

export default serviceListSlice.reducer;
