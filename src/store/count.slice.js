import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 5,
  },
  reducers: {
    increment: (state) => {
      const newCount = state.count + 5;
      state.count = newCount;
    },
    reset: (state) => {
      state.count = 5;
    },
  },
});

export default countSlice.reducer;
export const countAction = countSlice.actions;
