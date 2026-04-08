import Header from "../components/Header";
import ContentBlock from "../components/ContentBlock";
import Footer from "../components/Footer";
import CartShowcase from "../components/cart/CartShowcase.jsx";

function Cart({
  page,
  goToShop,
  goToCart,
  favorites,
  cart,
  addToCart,
  decreaseCart,
  removeFromCart,
  cartCount,
  products,
}) {
  return (
    <>
      <Header goToCart={goToCart} favorites={favorites} cartCount={cartCount} />
      <main>
        <ContentBlock
          title="Cart"
          page={page}
          goToShop={goToShop}
          goToCart={goToCart}
        />
        <CartShowcase
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          removeFromCart={removeFromCart}
          products={products}
        />
      </main>

      <div className="advertising-line"></div>
      <Footer />
    </>
  );
}

export default Cart;
