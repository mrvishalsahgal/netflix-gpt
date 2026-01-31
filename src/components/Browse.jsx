import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const isGptView = useSelector((store) => store.gpt.isGptView);

  useNowPlayMovie();
  usePopularMovie();
  useTrendingMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      {isGptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
