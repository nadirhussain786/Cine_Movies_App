import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MoviesApi } from "./Services/MoviesApi";

export const store = configureStore({
  reducer: {
    [MoviesApi.reducerPath]: MoviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});
setupListeners(store.dispatch);
