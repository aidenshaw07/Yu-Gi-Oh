import React from "react";
import ReactPlayer from "react-player";
import TopFiveBannerCards from "../shared/TopFiveBannerCards";
import BottomFiveBannerCards from "../shared/BottomFiveBannerCards";

const Banner = () => {
  return (
    <div>
      <TopFiveBannerCards />
      <div className="video-container">
        <div className="blue-eyes-image-container"></div>
        <ReactPlayer
          className="video"
          playing={true}
          muted={true}
          loop={true}
          controls
          url="https://www.youtube.com/watch?v=WHUcHw7j2Mc"
        />
        <div className="dark-magician-image-container"></div>
      </div>
      <BottomFiveBannerCards />
    </div>
  );
};

export default Banner;
