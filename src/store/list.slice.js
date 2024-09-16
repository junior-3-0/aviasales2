import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const searchId = "389a51b316d644b26ab6cfe64d0595b1";

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
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

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    loginErrorMessage: "",
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.loading = false;
      state.list = action.payload.tickets;
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      state.loading = false;
      state.loginErrorMessage = action.error.message;
    });
  },
});

export default listSlice.reducer;
export const listAction = listSlice.actions;
