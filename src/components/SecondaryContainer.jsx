import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-48 pl-2 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movie"} movies={movies.popularMovies} />
        <MovieList title={"Trending Movie"} movies={movies.trendingMovies} />
        <MovieList title={"Upcoming Movie"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
