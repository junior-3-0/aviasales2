import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketsApi = createApi({
  reducerPath: "ticketsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aviasales-test-api.kata.academy/",
  }),
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => ({
        url: "tickets?searchId=383998ef4bf50e01b077a6badfca1016",
        headers: {
          searchId: "383998ef4bf50e01b077a6badfca1016",
        },
      }),
    }),
  }),
});

export const { useGetTicketsQuery } = ticketsApi;

/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      price: 87960,
      carrier: "U6",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2024-07-05T05:30:15.649Z",
          duration: 921,
          stops: ["JNB", "DEL"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2025-06-20T07:12:05.776Z",
          duration: 1136,
          stops: ["JNB", "HKG", "IST"],
        },
      ],
    },
    {
      price: 86750,
      carrier: "W6",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2025-04-25T15:13:37.579Z",
          duration: 1400,
          stops: ["DXB", "DXB", "DOH"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2025-07-17T07:59:21.826Z",
          duration: 896,
          stops: ["HKG"],
        },
      ],
    },
    {
      price: 90090,
      carrier: "U6",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2024-09-05T16:13:35.920Z",
          duration: 1071,
          stops: ["JNB"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2025-08-23T22:57:21.659Z",
          duration: 1207,
          stops: ["HKG", "DOH", "DOH"],
        },
      ],
    },
    {
      price: 31740,
      carrier: "S7",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2025-04-07T03:42:03.841Z",
          duration: 821,
          stops: [],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2026-02-26T09:05:03.561Z",
          duration: 1055,
          stops: ["DOH", "DEL"],
        },
      ],
    },
    {
      price: 72580,
      carrier: "S7",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2025-05-27T05:43:35.262Z",
          duration: 779,
          stops: [],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2026-04-28T18:58:42.742Z",
          duration: 1009,
          stops: ["HKG"],
        },
      ],
    },
  ],
};

export const fetchTicket = createAsyncThunk(
  "ticket/fetchTicket",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://aviasales-test-api.kata.academy/ttickets?searchId=3084b4287af82a3fc0e7c84b154a0e94"
      );
      if (!response.ok) {
        throw new Error("ServerError");
      }
      const data = response.json();
      return data;
    } catch (e) {
      return rejectWithValue(error.message);
    }
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTicket.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      console.log(action.payload);
      state.list = [
        action.payload.tickets[0],
        action.payload.tickets[1],
        action.payload.tickets[2],
        action.payload.tickets[3],
        action.payload.tickets[4],
      ];
    });
    builder.addCase(fetchTicket.rejected, (state, action) => {
      state.loginErrorMessage = action.error.message;
    });
  },
});

export default ticketSlice.reducer;
export const ticketAction = ticketSlice.actions;
 */
