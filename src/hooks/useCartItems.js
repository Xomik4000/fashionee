import { useMemo } from "react";

function useCartItems(cart, products) {
  const cartItems = useMemo(() => {
    return Object.entries(cart).map(([id, qty]) => {
      const numericId = Number(id);
      const product = products.find((item) => item.id === numericId);

      return {
        id: numericId,
        qty,
        product,
        total: product ? product.price * qty : 0,
      };
    });
  }, [cart, products]);

  return cartItems;
}

export default useCartItems;