import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    shares: sharesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})
export default store;
