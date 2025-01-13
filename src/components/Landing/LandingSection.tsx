// import { lexend } from "@/fonts/fonts";
// import React from "react";

// const LandingSection = () => {
//   return (
//     <div className="container mx-auto w-full">
//       <div className="fixed flex flex-col items-center w-full bg-black min-h-[calc(100vh)] justify-center">
//         <img
//           src="/assets/logo-movie.png"
//           alt="movie logo"
//           className="w-4/12 h-auto"
//           //   data-aos="fade-up"
//         />
//         <button
//           //   data-aos="fade-up"
//           className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
//         >
//           WATCH TRAILER
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingSection;

"use client";
import { lexend } from "@/fonts/fonts";
import React, { useState, useRef } from "react";

const LandingSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
      videoRef.current?.play(); // Play the video when dialog opens
    }, 100); // Small delay for smoother experience
  };

  const handleCloseDialog = () => {
    console.log("first");
    videoRef.current?.pause(); // Pause the video when dialog closes
    // videoRef?.current.currentTime = 0; // Reset the video to the beginning
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto w-full">
      {/* Landing Section */}
      <div className="fixed flex flex-col items-center w-full bg-black min-h-[calc(100vh)] justify-center">
        <img
          src="/assets/logo-movie.png"
          alt="movie logo"
          className="w-4/12 h-auto"
        />
        <button
          onClick={handleOpenDialog}
          className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
        >
          WATCH TRAILER
        </button>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-3 right-3 text-black bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-black hover:text-white transition duration-300 z-50"
            >
              X
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              muted
              poster="/assets/thumbnail.png"
            >
              <source src="/assets/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingSection;
