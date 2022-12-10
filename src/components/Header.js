import { Link, useLocation } from "react-router-dom";
import "../styles/headerStyle.scss";
import yugiohlogo from "../assets/yugiohlogo.svg";
import SearchBar from "./SearchBar";
import { useStore } from "../zustand/Store";

const Header = () => {
  const location = useLocation();
  const setFieldState = useStore((cardInfo) => cardInfo.setFieldState);
  return (
    <div className="header-container">
      <div className="header-child-container1">
        <Link to="/">
          <img
            onClick={() => setFieldState("searchedCardName", "")}
            className="header-img"
            src={yugiohlogo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-child-container2">{location.pathname === "/" && <SearchBar />}</div>
      <div className="header-child-container3">
        <Link to="/">
          <div
            onClick={() => setFieldState("searchedCardName", "")}
            className="header-text-area"
          >
            Home
          </div>
        </Link>
        <Link to="/how-to-play">
          <div
            onClick={() => setFieldState("searchedCardName", "")}
            className="header-text-area"
          >
            How To Play!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
