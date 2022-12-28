import React from "react";
import ReactPlayer from "react-player";
import TopFiveBannerCards from "../shared/TopFiveBannerCards";
import BottomFiveBannerCards from "../shared/BottomFiveBannerCards";

const Banner = () => {
  return (
    <div>
      <TopFiveBannerCards />
      <ReactPlayer
        className="video"
        playing={true}
        muted={true}
        loop={true}
        controls
        width="100%"
        url="https://www.youtube.com/watch?v=WHUcHw7j2Mc"
      />
      <BottomFiveBannerCards />
    </div>
  );
};

export default Banner;
