import "../../layout/Header/Header.css";
import logoIcon from "../../assets/icons/logo.png";
import searchIcon from "../../assets/icons/search-icon.png";
import favoriteIcon from "../../assets/icons/favorite-icon.png";

import Wave from "../../components/elements/Wave/Wave.jsx";
import SearchBar from "../../components/elements/SearchBar/SearchBar.jsx";

function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row mb-10">
          <div className="nav-box ">
            <img src={logoIcon} width={40} className=" " />

            <button className="nav-button nav-main-button">
              <h1 className="nav-text">Главная</h1>
            </button>

            <button className="nav-button nav-second-button">
              <h1 className="nav-text text-borders">Фильмы</h1>
            </button>

            <button className="nav-button nav-second-button">
              <h1 className="nav-text ">Сериалы</h1>
            </button>
          </div>

          <div className="second-nav-box">
            <SearchBar></SearchBar>
            <button className="nav-button search-btn ">
              <img src={searchIcon} width={24} />
            </button>

            <div className="nav-line"></div>

            <button className="nav-button favorite-btn">
              <img src={favoriteIcon} width={24} />
            </button>
            <button className="nav-button nav-half-rounded">
              <h1 className="nav-text">Войти</h1>
            </button>
          </div>
        </nav>

        <Wave reversed={false}></Wave>
      </header>
    </>
  );
}

export default Header;
