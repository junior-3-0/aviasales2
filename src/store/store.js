import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter.slice";
import sortSlice from "./sort.slice";
import listSlice from "./list.slice";
import countSlice from "./count.slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    sort: sortSlice,
    list: listSlice,
    count: countSlice,
  },
});
