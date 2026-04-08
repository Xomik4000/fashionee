import { useMemo } from "react";
import {
  DELIVERY_PRICE,
  PROMO_CODE,
  PROMO_DISCOUNT_PERCENT,
  PROMO_DISCOUNT_RATE,
} from "../constants";

function useCartSummary(cartItems, isPromoApplied) {
  const orderPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  }, [cartItems]);

  const summary = useMemo(() => {
    const isCartEmpty = cartItems.length === 0;
    const discountPercent = isPromoApplied ? PROMO_DISCOUNT_PERCENT : 0;
    const discountAmount = isPromoApplied
      ? orderPrice * PROMO_DISCOUNT_RATE
      : 0;
    const delivery = isCartEmpty ? 0 : DELIVERY_PRICE;
    const total = isCartEmpty ? 0 : orderPrice - discountAmount + delivery;

    const checkoutData = {
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.product?.name,
        price: item.product?.price,
        quantity: item.qty,
        total: item.total,
      })),
      promoCode: isPromoApplied ? PROMO_CODE : null,
      discountPercent,
      orderPrice,
      delivery,
      total,
    };

    return {
      discountPercent,
      discountAmount,
      delivery,
      total,
      checkoutData,
    };
  }, [cartItems, isPromoApplied, orderPrice]);

  return {
    orderPrice,
    ...summary,
  };
}

export default useCartSummary;