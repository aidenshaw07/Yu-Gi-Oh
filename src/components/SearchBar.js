import React from "react";
import "../styles/searchBarStyle.scss";
import { useStore } from "../zustand/Store";

const SearchBar = () => {
  const state = useStore((cardName) => cardName);
  const setFieldState = useStore((cardInfo) => cardInfo.setFieldState);

  return (
    <div className="searchbar-container-asd">
      <input
        type="text"
        className="searchbar-input"
        value={state.searchedCardName}
        onChange={(event) =>
          setFieldState("searchedCardName", event.target.value)
        }
        placeholder="Search For A Card"
      />
    </div>
  );
};

export default SearchBar;
