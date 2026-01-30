import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
const Browse = () => {
  useNowPlayMovie();
  usePopularMovie();
  useTrendingMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
