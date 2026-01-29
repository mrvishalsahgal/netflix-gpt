
import Header from './Header'
import useNowPlayMovie from '../hooks/useNowPlayMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
 
  useNowPlayMovie();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse