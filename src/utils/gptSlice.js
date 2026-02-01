import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptView: false,
    movieNames: null,
    movieData: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGptView = !state.isGptView;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieData } = action.payload;
      state.movieNames = movieNames;
      state.movieData = movieData;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
