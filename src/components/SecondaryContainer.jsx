import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black">
      <div className="-mt-48 pl-2 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MovieList title={"Popular Movie"} movies={movies.addPopularMovies} />
        <MovieList title={"Trending Movie"} movies={movies.addTrendingMovies} />
        <MovieList title={"Upcoming Movie"} movies={movies.addUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
