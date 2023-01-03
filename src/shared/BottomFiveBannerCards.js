import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOverlay } from "../shared/Loading";

const TopFiveBannerCards = () => {
  const [blueEyesWhiteDragonData, setBlueEyesWhiteDragonData] = useState([]);
  const [darkMagicianData, setDarkMagicianData] = useState([]);
  const [redEyesBlackDragonData, setRedEyesBlackDragonData] = useState([]);
  const [blueEyesUltimateDragonData, setBlueEyesUltimateDragonData] = useState(
    []
  );
  const [darkPaladinData, setDarkPaladinData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlueEyesWhiteDragonData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Blue-eyes%20White%20Dragon"
      );
      setBlueEyesWhiteDragonData(
        response.data.data[0].card_images[0].image_url
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDarkMagicianData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician"
      );
      setDarkMagicianData(response.data.data[0].card_images[0].image_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getRedEyesBlackDragonData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=red-eyes%20black%20dragon"
      );
      setRedEyesBlackDragonData(response.data.data[0].card_images[0].image_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getBlueEyesUltimateDragonData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=blue-eyes%20ultimate%20dragon"
      );
      setBlueEyesUltimateDragonData(
        response.data.data[0].card_images[0].image_url
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDarkPaladinData = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=dark%20paladin"
      );
      setDarkPaladinData(response.data.data[0].card_images[0].image_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const blueEyesWhiteDragon = blueEyesWhiteDragonData;
  const darkMagician = darkMagicianData;
  const redEyesBlackDragon = redEyesBlackDragonData;
  const blueEyesUltimateDragon = blueEyesUltimateDragonData;
  const darkPaladin = darkPaladinData;

  useEffect(() => {
    getBlueEyesWhiteDragonData();
    getDarkMagicianData();
    getRedEyesBlackDragonData();
    getBlueEyesUltimateDragonData();
    getDarkPaladinData();
  }, []);

  if (loading) return <LoadingOverlay show={loading} />;

  return (
    <div className="banner-container">
      <div className="banner-child-container">
        <img
          className="banner-img-container"
          src={blueEyesWhiteDragon}
          alt="Blue Eyes White Dragon"
        />
        <img
          className="banner-img-container"
          src={blueEyesUltimateDragon}
          alt="Blue Eyes Ultimate Dragon"
        />
        <img
          className="banner-img-container"
          src={redEyesBlackDragon}
          alt="Red Eyes Black Dragon"
        />
        <img
          className="banner-img-container"
          src={darkPaladin}
          alt="Dark Paladin"
        />
        <img
          className="banner-img-container"
          src={darkMagician}
          alt="Dark Magician"
        />
      </div>
    </div>
  );
};

export default TopFiveBannerCards;
