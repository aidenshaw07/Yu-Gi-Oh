import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";
import "../styles/homeStyle.scss";
import SearchBar from "./SearchBar";
import Header from "./Header";

const Home = () => {
  const [searchedCardData, setSearchedCardData] = useState([]);
  const [searchCardName, setSearchCardName] = useState("");

  const fetchSearchedCardName = async () => {
    const response = await axios.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchCardName}`
    );
    // console.log(response.data.data);
    setSearchedCardData(response.data.data);
  };
  console.log(searchedCardData.length);

  const renderSearchedCardData = searchedCardData.map((card, i) => {
    if (
      searchedCardData[0]?.id === 97803170 ||
      searchedCardData[1]?.id === 98804359
    ) {
      return <div key={i}></div>;
    } else {
      return (
        <div key={i}>
          <h1>{card.name}</h1>
          <img src={card.card_images[0].image_url} alt={card.name} />
        </div>
      );
    }
  });

  useEffect(() => {
    fetchSearchedCardName();
  }, [searchCardName]);

  if (searchedCardData.length === 1) {
    return <div>{renderSearchedCardData}</div>;
  }

  return (
    <>
      <Header
        searchCardName={searchCardName}
        setSearchCardName={setSearchCardName}
      />
      <Banner />
      <div className="home-container">
        <Link className="link-content" to="/spell-cards">
          <h2>
            Spell <br /> Cards
          </h2>
        </Link>
        <Link className="link-content" to="/trap-cards">
          <h2>
            Trap <br /> Cards
          </h2>
        </Link>
        <Link className="link-content" to="/monster-cards">
          <h2>
            Monster <br /> Cards
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
