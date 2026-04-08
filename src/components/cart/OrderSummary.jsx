import {
  NO_PROMO_DISCOUNT_LABEL,
  ORDER_DELIVERY_DATE,
} from "../../constants";

function OrderSummary({
  orderPrice,
  discountPercent,
  delivery,
  total,
  onCheckout,
}) {
  const formattedOrderPrice = orderPrice.toFixed(2);
  const formattedDelivery = delivery.toFixed(2);
  const formattedTotal = total.toFixed(2);
  const discountValue =
    discountPercent > 0
      ? `${discountPercent}%`
      : NO_PROMO_DISCOUNT_LABEL;

  return (
    <div className="order">
      <h3 className="title">Your Order</h3>
      <div className="order-price-wrapper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${formattedOrderPrice}</div>
        </div>
        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>{discountValue}</div>
        </div>
        <div className="price-row delimiter">
          <div className="name">
            Delivery <span className="additional">({ORDER_DELIVERY_DATE})</span>
          </div>
          <div className="price">${formattedDelivery}</div>
        </div>
        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price">${formattedTotal}</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button type="button" className="button" onClick={onCheckout}>
          Checkout
        </button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default OrderSummary;