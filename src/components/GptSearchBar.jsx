import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import ai from "../utils/geminiai";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langFromStore = useSelector((store) => store.config.lang);

  // TMBD movie search
  const movieSearchTMBD = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system. Suggest movies based on the following query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, separated by commas.";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    console.log(response.text);

    const geminiResults = response.text.split(",");
    console.log(geminiResults);

    const data = await Promise.all(
      geminiResults.map((movie) => movieSearchTMBD(movie)),
    );

    dispatch(addGptMovieResult({ movieNames: geminiResults, movieData: data }));
  };
  return (
    <form
      className=" md:w-full max-w-2xl flex gap-3 px-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className="flex-1 px-4 py-3 rounded-lg text-white bg-black/40 focus:outline-none"
        placeholder={lang[langFromStore].gptSearchPlaceholder}
      />

      <button
        onClick={handleGptSearch}
        className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
      >
        {lang[langFromStore].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
