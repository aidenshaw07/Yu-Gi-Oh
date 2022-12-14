import "../styles/searchBarStyle.scss";
import { useStore } from "../zustand/Store";

const SearchBar = () => {
  const state = useStore((cardName) => cardName);
  const setFieldState = useStore((cardInfo) => cardInfo.setFieldState);

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input-area"
        value={state.searchedCardName}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = "Search For A Card")
        }
        onChange={(event) =>
          setFieldState("searchedCardName", event.target.value)
        }
        placeholder="Search For A Card"
      />
    </div>
  );
};

export default SearchBar;
