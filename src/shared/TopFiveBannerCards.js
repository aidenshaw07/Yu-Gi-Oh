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
      setExodiaTheForbiddenOneData(
        response.data.data[0].card_images[0].image_url
      );
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
      setRightArmOfTheForbiddenOneData(
        response.data.data[0].card_images[0].image_url
      );
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
      setLeftArmOfTheForbiddenOneData(
        response.data.data[0].card_images[0].image_url
      );
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
      setRightLegOfTheForbiddenOneData(
        response.data.data[0].card_images[0].image_url
      );
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
      setLeftLegOfTheForbiddenOneData(
        response.data.data[0].card_images[0].image_url
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const exodiaTheForbiddenOne = exodiaTheForbiddenOneData;
  const rightArmOfTheForbiddenOne = rightArmOfTheForbiddenOneData;
  const leftArmOfTheForbiddenOne = leftArmOfTheForbiddenOneData;
  const rightLegOfTheForbiddenOne = rightLegOfTheForbiddenOneData;
  const leftLegOfTheForbiddenOne = leftLegOfTheForbiddenOneData;

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
        alt="asd"
      />
      <img
        className="banner-img-container"
        src={rightArmOfTheForbiddenOne}
        alt="asd"
      />
      <img
        className="banner-img-container"
        src={exodiaTheForbiddenOne}
        alt="asd"
      />
      <img
        className="banner-img-container"
        src={leftArmOfTheForbiddenOne}
        alt="asd"
      />
      <img
        className="banner-img-container"
        src={leftLegOfTheForbiddenOne}
        alt="asd"
      />
    </div>
  );
};

export default TopFiveBannerCards;
