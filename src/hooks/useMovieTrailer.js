import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useMovieTrailer = ({ videoId }) => {
  const dispatcher = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      options,
    );
    const response = await data.json();

    const trailer = response.results.find((video) => video.type === "Trailer");

    dispatcher(addMovieTrailer(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMoviesData();
  }, []);
};

export default useMovieTrailer;
