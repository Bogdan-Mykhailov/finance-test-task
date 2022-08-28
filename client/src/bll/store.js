import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { sharesReducer } from "./shares-reducer";

const store = configureStore({
  reducer: {
    shares: sharesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(thunk)
});
export default store;
