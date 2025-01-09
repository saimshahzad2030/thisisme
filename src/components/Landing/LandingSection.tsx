import { lexend } from "@/fonts/fonts";
import React from "react";

const LandingSection = () => {
  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-col items-center w-full bg-black min-h-[calc(100vh)] justify-center">
        <img
          src="/assets/logo-movie.png"
          alt="movie logo"
          className="w-4/12 h-auto"
          //   data-aos="fade-up"
        />
        <button
          //   data-aos="fade-up"
          className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
        >
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
};

export default LandingSection;
