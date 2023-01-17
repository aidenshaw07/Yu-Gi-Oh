import "../styles/searchBarStyle.scss";
import { useStore } from "../zustand/Store";

const SearchBar = () => {
  
  const setFieldState = useStore((cardInfo) => cardInfo.setFieldState);

  return (
    <form
    //!Quoc was here
      onSubmit={(event) => {
        event.preventDefault();
        setFieldState("searchedCardName", event.target[0].value);
      }}
      className="searchbar-container"
    >
      <input
        type="text"
        className="searchbar-input-area"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Search For A Card")}
        placeholder="Search For A Card"
      />

    </form>
  );
};

export default SearchBar;
