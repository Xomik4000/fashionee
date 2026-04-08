import Header from "../components/Header";
import ContentBlock from "../components/ContentBlock";
import Showcase from "../components/shop/Showcase.jsx";
import Footer from "../components/Footer";

function Shop({
  page,
  goToShop,
  goToCart,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
  cartCount,
}) {
  return (
    <>
      <Header goToCart={goToCart} favorites={favorites} cartCount={cartCount} />
      <main>
        <ContentBlock
          page={page}
          title="Shop"
          goToShop={goToShop}
          goToCart={goToCart}
        />
        <Showcase
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
        />
      </main>

      <div className="advertising-line"></div>

      <Footer />
    </>
  );
}

export default Shop;
