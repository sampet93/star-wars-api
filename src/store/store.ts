import swapiSlice from "./features/swapi/swapiSlice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: swapiSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
