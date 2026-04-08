import { useMemo } from "react";
import { LS_KEYS } from "../constants";
import useLocalStorage from "./useLocalStorage";

function useCart() {
  const [cart, setCart] = useLocalStorage(LS_KEYS.CART, {});

  const addToCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      next[id] = (next[id] || 0) + 1;
      return next;
    });
  };

  const decreaseCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };

      if (!next[id]) return next;

      next[id] = next[id] - 1;

      if (next[id] <= 0) {
        delete next[id];
      }

      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const cartCount = useMemo(() => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }, [cart]);

  return {
    cart,
    addToCart,
    decreaseCart,
    removeFromCart,
    cartCount,
  };
}

export default useCart;