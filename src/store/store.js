import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter.slice";
import sortSlice from "./sort.slice";
import { ticketsApi } from "./ticket.slice";

// import ticketSlice from "./ticket.slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    sort: sortSlice,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketsApi.middleware),
});

store.subscribe(() => {
  console.log(store.getState());
});
