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
        <iframe
          className="video"
          src="https://www.youtube.com/embed/WHUcHw7j2Mc?&autoplay=1&loop=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
        <div className="dark-magician-image-container"></div>
      </div>
      <BottomFiveBannerCards />
    </div>
  );
};

export default Banner;
