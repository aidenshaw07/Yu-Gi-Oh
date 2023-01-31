import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOverlay } from "../shared/Loading";
import "../styles/bannerStyle.scss";

const TopFiveBannerCards = () => {
  const [exodiaTheForbiddenOneData, setExodiaTheForbiddenOneData] = useState(
    []
  );
  const [rightArmOfTheForbiddenOneData, setRightArmOfTheForbiddenOneData] =
    useState([]);
  const [leftArmOfTheForbiddenOneData, setLeftArmOfTheForbiddenOneData] =
    useState([]);
  const [rightLegOfTheForbiddenOneData, setRightLegOfTheForbiddenOneData] =
    useState([]);
  const [leftLegOfTheForbiddenOneData, setLeftLegOfTheForbiddenOneData] =
    useState([]);
  const [loading, setLoading] = useState(true);

  const getExodiaTheForbiddenOneData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Exodia%20the%20Forbidden%20One"
      );
      setExodiaTheForbiddenOneData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getRightArmOfTheForbiddenOneData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Right%20Arm%20Of%20The%20Forbidden%20One"
      );
      setRightArmOfTheForbiddenOneData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getLeftArmOfTheForbiddenOneData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Left%20Arm%20Of%20The%20Forbidden%20One"
      );
      setLeftArmOfTheForbiddenOneData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getRightLegOfTheForbiddenOneData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Right%20Leg%20Of%20The%20Forbidden%20One"
      );
      setRightLegOfTheForbiddenOneData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getLeftLegOfTheForbiddenOneData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Left%20Leg%20Of%20The%20Forbidden%20One"
      );
      setLeftLegOfTheForbiddenOneData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const exodiaTheForbiddenOne =
    exodiaTheForbiddenOneData[0]?.card_images[0].image_url;
  const rightArmOfTheForbiddenOne =
    rightArmOfTheForbiddenOneData[0]?.card_images[0].image_url;
  const leftArmOfTheForbiddenOne =
    leftArmOfTheForbiddenOneData[0]?.card_images[0].image_url;
  const rightLegOfTheForbiddenOne =
    rightLegOfTheForbiddenOneData[0]?.card_images[0].image_url;
  const leftLegOfTheForbiddenOne =
    leftLegOfTheForbiddenOneData[0]?.card_images[0].image_url;

  useEffect(() => {
    getExodiaTheForbiddenOneData();
    getRightArmOfTheForbiddenOneData();
    getLeftArmOfTheForbiddenOneData();
    getRightLegOfTheForbiddenOneData();
    getLeftLegOfTheForbiddenOneData();
  }, []);

  if (loading) return <LoadingOverlay show={loading} />;

  return (
    <div className="banner-container">
      <img
        className="banner-img-container"
        src={rightLegOfTheForbiddenOne}
        alt="Right Leg Of The Forbidden One"
      />
      <img
        className="banner-img-container"
        src={rightArmOfTheForbiddenOne}
        alt="Right Arm Of The Forbidden One"
      />
      <img
        className="banner-img-container"
        src={exodiaTheForbiddenOne}
        alt="Exodia The Forbidden One"
      />
      <img
        className="banner-img-container"
        src={leftArmOfTheForbiddenOne}
        alt="Left Arm Of The Forbidden One"
      />
      <img
        className="banner-img-container"
        src={leftLegOfTheForbiddenOne}
        alt="Left Leg Of The Forbidden One"
      />
    </div>
  );
};

export default TopFiveBannerCards;
