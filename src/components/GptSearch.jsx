import React from "react";
import GptSearchBar from "./GptSearchBar";
import GetMovieSuggestion from "./GetMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-full ">
        <img
          src={BG_URL}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="pt-[45%]  md:pt-[10%]  flex flex-col items-center">
        <GptSearchBar />
        <GetMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
