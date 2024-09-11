import { createSlice } from "@reduxjs/toolkit";
import { getSavedAnimes, saveHandler } from "./saveApi";

const initialState = {
  savedAnimes: await getSavedAnimes("WatchList", "66e181f173f79fe09d22f09b"),
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addAnime(state, action) {
      state.savedAnimes.push(action.payload);
      saveHandler(action.payload._id, "WatchList", "66e181f173f79fe09d22f09b");
    },

    removeAnime(state, action) {
      state.savedAnimes = state.savedAnimes.filter(
        (anime) => anime._id !== action.payload._id,
      );
      saveHandler(action.payload._id, "WatchList", "66e181f173f79fe09d22f09b");
    },
  },
});

export const isAnimeExists = (state, animeId) =>
  state.saved.savedAnimes.some((anime) => anime.id === animeId);

export const selectSavedAnimes = (state) => state.saved.savedAnimes;
export const { addAnime, removeAnime } = savedSlice.actions;
export default savedSlice.reducer;
