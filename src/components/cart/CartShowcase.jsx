import CartProductList from "./CartProductList";
import OrderSummary from "./OrderSummary";
import PromoCodeBlock from "./PromoCodeBlock";
import usePromoCode from "../../hooks/usePromoCode";
import useCartItems from "../../hooks/useCartItems";
import useCartSummary from "../../hooks/useCartSummary";

function CartShowcase({
  cart,
  addToCart,
  decreaseCart,
  removeFromCart,
  products,
}) {
  const { promoCode, setPromoCode, isPromoApplied, applyPromoCode } =
    usePromoCode();

  const cartItems = useCartItems(cart, products);

  const { orderPrice, discountPercent, delivery, total, checkoutData } =
    useCartSummary(cartItems, isPromoApplied);

  const handleCheckout = () => {
    console.log(checkoutData);
  };

  return (
    <section className="container">
      <div className="cart">
        <div className="order-wrapper">
          <CartProductList
            items={cartItems}
            addToCart={addToCart}
            decreaseCart={decreaseCart}
            removeFromCart={removeFromCart}
          />
          <OrderSummary
            orderPrice={orderPrice}
            discountPercent={discountPercent}
            delivery={delivery}
            total={total}
            onCheckout={handleCheckout}
          />
        </div>

        <PromoCodeBlock
          promoCode={promoCode}
          onPromoCodeChange={setPromoCode}
          onApplyPromo={applyPromoCode}
        />
      </div>
    </section>
  );
}

export default CartShowcase;