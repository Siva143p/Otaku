// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   Animes: [],
//   savedAnimes: JSON.parse(localStorage.getItem("SavedAnimes")) || [],
//   filterdAnimes: [],
//   lang: "all",
//   media: "all",
// };

// const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     filterAnime(state, action) {
//       if (action.payload !== "all") {
//         action.payload === "sub"
//           ? (state.filterdAnimes = state.Animes.filter((anime) => !anime.dub))
//           : (state.filterdAnimes = state.Animes.filter((anime) => anime.dub));

//         if (action.payload !== "all") {
//           action.payload === "series"
//             ? (state.filterdAnimes = state.filterdAnimes.filter(
//                 (anime) => anime.type !== "Movie",
//               ))
//             : (state.filterdAnimes = state.filterdAnimes.filter(
//                 (anime) => anime.type !== "Series",
//               ));
//         }
//       }
//     },
//   },
// });

// export const selectFilterLang = (state) => state.filter.lang;
// export const selectFilterMedia = (state) => state.filter.media;
// export const selectFilteredAnimes = (state) => state.filter.filterdAnimes;
// export const { filterAnime } = filterSlice.actions;
// export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Animes: [], // List of all animes
  filteredAnimes: [],
  page: "",
  lang: JSON.parse(localStorage.getItem("FilterObj"))?.lang || "all", // Default to 'all' if not in localStorage
  media: JSON.parse(localStorage.getItem("FilterObj"))?.media || "all", // Default to 'all' if not in localStorage
  SavedAnimesFiltered: [],
  PopularAnimesFiltered: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAnimes(state, action) {
      state.Animes = action.payload;
    },

    setFilteredAnimesForPage(state, action) {
      if (action.payload === "saved") {
        localStorage.setItem(
          "SavedAnimesFiltered",
          JSON.stringify(state.filteredAnimes),
        );
        state.SavedAnimesFiltered =
          JSON.parse(localStorage.getItem("SavedAnimesFiltered")) || [];
      } else {
        localStorage.setItem(
          "PopularAnimesFiltered",
          JSON.stringify(state.filteredAnimes),
        );
        state.PopularAnimesFiltered =
          JSON.parse(localStorage.getItem("PopularAnimesFiltered")) || [];
      }
    },

    setFilterKey(state, action) {
      const { lang, media } = action.payload;

      const obj = {
        lang: lang || state.lang,
        media: media || state.media,
        onlyFav: false, // Placeholder for future use
      };

      state.lang = obj.lang;
      state.media = obj.media;

      localStorage.setItem("FilterObj", JSON.stringify(obj));
    },

    filterAnime(state) {
      const { lang, media } = state;

      // Filter by language (sub or dub)
      state.filteredAnimes =
        lang !== "all"
          ? lang === "sub"
            ? state.Animes.filter((anime) => anime.dub || anime.sub) // Filter subbed content
            : state.Animes.filter((anime) => anime.dub) // Filter dubbed content
          : state.Animes;

      // Filter by media type (series or movie)
      state.filteredAnimes =
        media !== "all"
          ? media === "series"
            ? state.filteredAnimes.filter((anime) => anime.type !== "Movie")
            : state.filteredAnimes.filter((anime) => anime.type !== "Series")
          : state.filteredAnimes;
    },
  },
});

export const selectSavedAnimesFiltered = (state) =>
  state.filter.SavedAnimesFiltered;
export const selectPopularAnimesFiltered = (state) =>
  state.filter.PopularAnimesFiltered;
export const selectFilterLang = (state) => state.filter.lang;
export const selectFilterMedia = (state) => state.filter.media;
export const selectFilteredAnimes = (state) => state.filter.filteredAnimes;
export const {
  filterAnime,
  setFilterKey,
  setAnimes,
  setFilteredAnimesForPage,
} = filterSlice.actions;
export default filterSlice.reducer;
