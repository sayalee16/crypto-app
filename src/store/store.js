
import { configureStore} from "@reduxjs/toolkit";
import fetchInfoSlice from "./fetchInfoSlice";
//import { cryptoApi } from "../services/cryptoApi";

const store = configureStore({
  reducer: {
    fetchInfo: fetchInfoSlice.reducer,
  },
});

export default store;
