import { useState } from "react";
import { PROMO_CODE } from "../constants";

function usePromoCode() {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const applyPromoCode = () => {
    setIsPromoApplied(promoCode.trim().toLowerCase() === PROMO_CODE);
  };

  return {
    promoCode,
    setPromoCode,
    isPromoApplied,
    applyPromoCode,
  };
}

export default usePromoCode;