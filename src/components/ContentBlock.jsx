import points from "../assets/icons/points-content.svg";
import { PAGES } from "../constants";

function ContentBlock({ title, page, goToShop, goToCart }) {
  return (
    <section className="container-content">
      <div className="container-content-left">
        <div className="content-icons">
          <img className="content-photo" src={points} alt="content-icons" />
        </div>
        <h1 className="title">{title}</h1>
        <div className="content-item">
          <div className="content-menu-items">
            <div className="menu-item-content">
              <div className="vertical-line"></div>
            </div>
            <div className="menu-item-content">Home</div>
            <div
              className={
                page === PAGES.SHOP
                  ? "menu-item-content active"
                  : "menu-item-content"
              }
              onClick={goToShop}
              style={{ cursor: "pointer" }}
            >
              Shop
            </div>
            <div
              className={
                page === PAGES.CART
                  ? "menu-item-content active"
                  : "menu-item-content"
              }
              onClick={goToCart}
              style={{ cursor: "pointer" }}
            >
              Cart
            </div>
          </div>
        </div>
        <div className="content-line"></div>
      </div>
      <div className="container-content-right"></div>
    </section>
  );
}

export default ContentBlock;
