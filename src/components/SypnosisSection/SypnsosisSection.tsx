import { Sypnosis } from "@/constants/Svgs/Sypnosis.svg";
import { lexend, playfairDisplay } from "@/fonts/fonts";
import React from "react";

const SypnsosisSection = () => {
  return (
    <div className="container mx-auto w-full p-4 md:px-8">
      <div
        className="relative flex flex-row items-center w-full min-h-[100vh] justify-evenly  "
        data-aos="fade-up"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly w-full">
          <img
            src="/assets/SectionImage.png"
            alt="Section Image"
            className="wd-full md:w-4/12 h-auto"
          />
          <div className="mt-8 md:mt-0 flex flex-col items-start w-full md:w-4/12 text-white">
            <p className={`${playfairDisplay.className} uppercase`}>
              The search of Amir begins after his sudden disappearance following
              a daring heist, leaving his lifelong companion Omar grappling with
              guilt and confusion. A malicious private detective looms overhead,
              revealing soul-shifting events, fueling Omar’s relentless quest
              for vengeance against those responsible.
            </p>
            <div
              className={`mt-4 flex flex-row items-center ${lexend.className}`}
            >
              <p className={`${lexend.className} font-semibold`}>SYPNOSIS</p>
              <Sypnosis className="w-4 h-auto ml-2" />
            </div>
            <div className="h-[2px] bg-white w-16 mt-2 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SypnsosisSection;
