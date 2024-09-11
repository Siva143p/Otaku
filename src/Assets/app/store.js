import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "../features/saveAnime/savedSlice";
import likeReducer from "../features/saveAnime/likeSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    saved: savedReducer,
    like: likeReducer,
    filter: filterReducer,
  },
});
