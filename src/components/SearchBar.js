import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/searchBarStyle.scss";

const SearchBar = ({ searchCardName, setSearchCardName }) => {
  // const [searchCardName, setSearchCardName] = useState("");

  // const fetchSearchedCardName = async () => {
  //   const response = await axios.get(
  //     `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchCardName}`
  //   );
  //   // console.log(response.data.data);
  //   setSearchedCardData(response.data.data);
  // };
  // console.log(searchedCardData.length);

  // const renderSearchedCardData = searchedCardData.map((card, i) => {
  //   if (
  //     searchedCardData[0]?.id === 97803170 ||
  //     searchedCardData[1]?.id === 98804359
  //   ) {
  //     return <div key={i}></div>;
  //   } else {
  //     return (
  //       <div key={i}>
  //         <h1>{card.name}</h1>
  //         <img src={card.card_images[0].image_url} alt={card.name} />
  //       </div>
  //     );
  //   }
  // });

  // useEffect(() => {
  //   fetchSearchedCardName();
  // }, [searchCardName]);

  return (
    <div className="searchbar-container-asd">
      <input
        type="text"
        className="searchbar-input"
        value={searchCardName}
        onChange={(event) => setSearchCardName(event.target.value)}
        placeholder="Search For A Card"
      />
    </div>
  );
};

export default SearchBar;
