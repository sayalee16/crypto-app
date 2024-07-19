import { createSlice} from "@reduxjs/toolkit";

const fetchInfoSlice = createSlice({
  name: "fetchInfo",
  initialState: {
    fetchDone: false,//false = PENDING, true: DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      return state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      return state.currentlyFetching = false;
    },
  },
});

export const fetchInfoActions = fetchInfoSlice.actions;
export default fetchInfoSlice;