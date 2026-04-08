import { CART_EMPTY_TEXT } from "../../constants";
import CartProductItem from "./CartProductItem";

function CartProductList({
  items,
  addToCart,
  decreaseCart,
  removeFromCart,
}) {
  if (items.length === 0) {
    return <div className="product-list">{CART_EMPTY_TEXT}</div>;
  }

  return (
    <div className="product-list">
      {items.map(({ id, qty, product }) => {
        if (!product) return null;

        return (
          <CartProductItem
            key={id}
            product={product}
            qty={qty}
            onPlus={() => addToCart(id)}
            onMinus={() => decreaseCart(id)}
            onRemove={() => removeFromCart(id)}
          />
        );
      })}
    </div>
  );
}

export default CartProductList;
