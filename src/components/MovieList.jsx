import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  if (!movies) return;
  return (
    <div className="p-2">
      <h1 className="text-white font-bold text-xl px-2">{title}</h1>
      <div className="flex overflow-x-scroll  scroll-smooth">
        <div className="flex no-scrollbar">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
