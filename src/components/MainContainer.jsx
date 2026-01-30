import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.addNowPlayingMovies);

  if (!movies || movies.length === 0) return null; // early return handling

  const mainMovies = movies[1];

  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
