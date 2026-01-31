import React from "react";
import GptSearchBar from "./GptSearchBar";
import GetMovieSuggestion from "./GetMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <img
        src={BG_URL}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-32">
        <GptSearchBar />
        <GetMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
