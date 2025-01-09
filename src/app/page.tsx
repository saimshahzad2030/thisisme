"use client";

import CastSection from "@/components/Cast/CastSection";
import LandingSection from "@/components/Landing/LandingSection";
import Navbar from "@/components/Navbar/Navbar";
import PictureSection from "@/components/PictureSection/PictureSection";
import SypnsosisSection from "@/components/SypnosisSection/SypnsosisSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="bg-black w-full">
        <LandingSection />
      </div>
      <div
        className="w-full flex flex-col items-center  bg-repeat-y bg-center relative"
        style={{ backgroundImage: "url(/assets/bg.png)" }}
      >
        <div className="top-0 absolute inset-0 bg-black opacity-80"></div>
        <SypnsosisSection />
        <CastSection />
        <PictureSection />
      </div>
    </div>
  );
}
