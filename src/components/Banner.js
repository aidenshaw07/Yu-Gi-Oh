import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./bannerStyle.scss";

const Banner = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  const renderTopFiveCardsData = data.map((item) => {
    if (
      item.name === "Right Arm of the Forbidden One" ||
      item.name === "Exodia the Forbidden One" ||
      item.name === "Left Leg of the Forbidden One" ||
      item.name === "Left Arm of the Forbidden One" ||
      item.name === "Right Leg of the Forbidden One"
    ) {
      return (
        <div className="map-banner-container">
          <img
            className="map-banner-img-container"
            src={item.card_images[0].image_url}
            alt={item.name}
          />
        </div>
      );
    }
  });

  const renderBottomFiveCardsData = data.map((item) => {
    if (
      item.name === "Dark Magician" ||
      item.name === "Blue-Eyes White Dragon" ||
      item.name === "Slifer the Sky Dragon" ||
      item.name === "The Winged Dragon of Ra" ||
      item.name === "Obelisk the Tormentor"
    ) {
      return (
        <div className="map-banner-container">
          <img
            className="map-banner-img-container"
            src={item.card_images[0].image_url}
            alt={item.name}
          />
        </div>
      );
    }
  });

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="banner-container">{renderTopFiveCardsData}</div>
      <ReactPlayer
        playing={true}
        muted={true}
        controls
        width
        url="https://www.youtube.com/watch?v=WHUcHw7j2Mc"
      />
      <div className="banner-container">{renderBottomFiveCardsData}</div>
    </div>
  );
};

export default Banner;
