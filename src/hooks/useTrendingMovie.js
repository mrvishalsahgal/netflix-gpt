import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovie = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      options,
    );

    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};
export default useTrendingMovie;
