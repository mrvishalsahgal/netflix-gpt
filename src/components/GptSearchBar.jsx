import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langFromStore = useSelector((store) => store.config.lang);
  console.log(langFromStore);
  return (
    <form className="w-full max-w-2xl flex gap-3 px-4">
      <input
        type="text"
        className="flex-1 px-4 py-3 rounded-lg text-white bg-black/40 focus:outline-none"
        placeholder={lang[langFromStore].gptSearchPlaceholder}
      />

      <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">
        {lang[langFromStore].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
