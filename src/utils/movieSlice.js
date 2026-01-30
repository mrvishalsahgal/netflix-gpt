import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    addNowPlayingMovies: [],
    addPopularMovies: [],
    addTrendingMovies: [],
    addUpcomingMovies: [],
    movieTrailer: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.addTrendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addMovieTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
