import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: false,
  notransfer: false,
  onetransfer: false,
  twotransfer: false,
  threetransfer: false,
};

function changeAllValues(state, bool) {
  const obj = {};
  Object.entries(state).map((el) => {
    const [key] = el;
    obj[key] = bool;
    return obj;
  });
  return { ...obj };
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    consol: (state, { payload }) => {
      if (payload === "all") {
        return state.all
          ? changeAllValues(state, false)
          : changeAllValues(state, true);
      }
      if (state.all) {
        return {
          ...state,
          all: false,
          [payload]: !state[payload],
        };
      }
      if (
        Object.entries(state).filter((el) => el[1] === true).length >= 3 &&
        !state[payload]
      ) {
        return changeAllValues(state, true);
      }
      state[payload] = !state[payload];
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
