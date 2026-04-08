import { useState } from "react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { PAGES } from "./constants";
import { PRODUCTS } from "./data/products";
import useCart from "./hooks/useCart";
import useFavorites from "./hooks/useFavorites";

function App() {
  const [page, setPage] = useState(PAGES.SHOP);

  const { favorites, toggleFavorite } = useFavorites();
  const { cart, addToCart, decreaseCart, removeFromCart, cartCount } =
    useCart();

  const goToShop = () => setPage(PAGES.SHOP);
  const goToCart = () => setPage(PAGES.CART);

  return (
    <>
      {page === PAGES.SHOP ? (
        <Shop
          page={page}
          goToShop={goToShop}
          goToCart={goToCart}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          cartCount={cartCount}
        />
      ) : (
        <Cart
          page={page}
          goToShop={goToShop}
          goToCart={goToCart}
          favorites={favorites}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          removeFromCart={removeFromCart}
          cartCount={cartCount}
          products={PRODUCTS}
        />
      )}
    </>
  );
}

export default App;
