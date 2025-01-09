import { playfairDisplay } from "@/fonts/fonts";
import React from "react";

const PictureSection = () => {
  return (
    <div className="container px-auto w-full p-4 md:px-8 overflow-y-hidden">
      <div
        className="relative flex flex-col items-center w-full min-h-[100vh]  pt-12  "
        data-aos="fade-up"
      >
        {/* Overlay */}

        {/* Content */}
        <div
          className={`capitalize relative z-10 flex flex-col items-center w-full text-center justify-center ${playfairDisplay.className}`}
        >
          <div className="text-[60px] sm:text-[120px] flex flex-col items-center justify-center w-10/12 h-[80vh] text-black bg-gray-400 bg-opacity-55 ">
            Picture
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
