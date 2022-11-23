import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { useGetSearchedCardsData } from "../shared/useGetSearchedCardsData";
import "../styles/homeStyle.scss";
import { renderSearchedCardData } from "../utils/renderSearchedCardData";
import Footer from "../components/Footer";

const Home = () => {
  const {
    data: searchedCardData,
    isLoading,
    error,
  } = useGetSearchedCardsData();

  const searchedCard = renderSearchedCardData(searchedCardData);

  return (
    <>
      {searchedCard.length === 1 ? searchedCard : <Banner />}
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
      <Footer />
    </>
  );
};

export default Home;
