import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GetMovieSuggestion = () => {
  const { movieNames, movieData } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-[95%] md:w-[90%] bg-black/60 rounded-lg p-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieData[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GetMovieSuggestion;
