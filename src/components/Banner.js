import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../styles/bannerStyle.scss";

const Banner = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
    );
    setData(response.data.data);
  };

  const renderTopFiveCardsData = data
    .filter(
      (item) =>
        item.name === "Right Arm of the Forbidden One" ||
        item.name === "Left Leg of the Forbidden One" ||
        item.name === "Left Arm of the Forbidden One" ||
        item.name === "Exodia the Forbidden One" ||
        item.name === "Right Leg of the Forbidden One"
    )
    .map((item, i) => {
      return (
        <div key={i} className="map-banner-container">
          <img
            className="map-banner-img-container"
            src={item.card_images[0].image_url}
            alt={item.name}
          />
        </div>
      );
    });

  const renderBottomFiveCardsData = data
    .filter(
      (item) =>
        item.name === "Dark Magician" ||
        item.name === "Blue-Eyes White Dragon" ||
        item.name === "Red-Eyes Black Dragon" ||
        item.name === "Dark Paladin" ||
        item.name === "Dark Magician Girl"
    )
    .map((item, i) => {
      return (
        <div key={i} className="map-banner-container">
          <img
            className="map-banner-img-container"
            src={item.card_images[0].image_url}
            alt={item.name}
          />
        </div>
      );
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
        loop={true}
        controls
        width="100%"
        url="https://www.youtube.com/watch?v=WHUcHw7j2Mc"
      />
      <div className="banner-container">{renderBottomFiveCardsData}</div>
    </div>
  );
};

export default Banner;
