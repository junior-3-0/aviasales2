import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: true,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    change: (state, { payload }) => {
      state.tabs = payload;
    },
  },
});

export default sortSlice.reducer;
export const sortAction = sortSlice.actions;
