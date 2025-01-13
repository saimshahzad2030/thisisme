// import { playfairDisplay } from "@/fonts/fonts";
// import React from "react";

// const PictureSection = () => {
//   return (
//     <div className="container px-auto w-full p-4 md:px-8 overflow-y-hidden">
//       <div
//         className="relative flex flex-col items-center w-full min-h-[100vh]  pt-12  "
//         data-aos="fade-up"
//       >
//         {/* Overlay */}

//         {/* Content */}
//         <div
//           className={`capitalize relative z-10 flex flex-col items-center w-full text-center justify-center ${playfairDisplay.className}`}
//         >
//           <div className="text-[60px] sm:text-[120px] flex flex-col items-center justify-center w-10/12 h-[80vh] text-black bg-gray-400 bg-opacity-55 ">
//             Picture
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PictureSection;

import { playfairDisplay } from "@/fonts/fonts";
import React, { useRef, useState } from "react";

const PictureSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const current = videoRef.current?.currentTime || 0;
    const duration = videoRef.current?.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <div className="container px-auto w-full p-4 md:px-8 overflow-y-hidden">
      <div
        className="relative flex flex-col items-center w-full min-h-[40vh] sm:min-h-[100vh] pt-12"
        data-aos="fade-up"
      >
        {/* Content */}
        <div
          className={`capitalize relative z-10 flex flex-col items-center w-full text-center justify-center ${playfairDisplay.className}`}
        >
          {/* Video Wrapper */}
          <div className="relative flex items-center justify-center w-11/12 h-auto bg-gray-400 bg-opacity-55">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              poster="/assets/thumbnail.png"
              onTimeUpdate={handleTimeUpdate}
            >
              <source src="/assets/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Progress Bar */}
            {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
              <div
                className="h-full bg-red-600"
                style={{ width: `${progress}%` }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
