import logo from "../assets/icons/logo.svg";
import searchIcon from "../assets/icons/search.svg";
import profileIcon from "../assets/icons/profile.svg";
import favoritesIcon from "../assets/icons/favorites.svg";
import cartIcon from "../assets/icons/cart.svg";
import arrow from "../assets/icons/arrow.svg";
import arrowPink from "../assets/icons/arrow-pink.svg";

function Header({ goToCart, favorites, cartCount }) {
  return (
    <header className="header">
      <div className="left-side">
        <div className="logo-container">
          <div className="burger-menu">
            <input
              type="checkbox"
              id="burger-checkbox"
              className="burger-checkbox"
            />
            <label className="burger" htmlFor="burger-checkbox"></label>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <span>Home</span>
          </div>
          <div className="menu-item">
            <span>Pages</span>
            <img src={arrow} alt="arrow" className="arrow-default" />
            <img src={arrowPink} alt="arrow-pink" className="arrow-hover" />
          </div>
          <div className="menu-item active">
            <span>Shop</span>
            <img src={arrow} alt="arrow" className="arrow-default" />
            <img src={arrowPink} alt="arrow-pink" className="arrow-hover" />
          </div>
          <div className="menu-item">
            <span>Blog</span>
          </div>
          <div className="menu-item">
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="header-icon">
          <img src={searchIcon} alt="search" />
        </div>
        <div className="header-icon">
          <img src={profileIcon} alt="profile" />
        </div>
        <div className="header-icon">
          <img src={favoritesIcon} alt="favorites" />
          {favorites.length > 0 && (
            <div className="counter">{favorites.length}</div>
          )}
        </div>
        <div
          className="header-icon"
          onClick={goToCart}
          style={{ cursor: "pointer" }}
        >
          <img src={cartIcon} alt="cart" />
          {cartCount > 0 && <div className="counter">{cartCount}</div>}
        </div>
      </div>
    </header>
  );
}

export default Header;
