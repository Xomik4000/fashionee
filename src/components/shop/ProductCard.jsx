import heartEmpty from "../../assets/icons/favorites.svg";
import heartFilled from "../../assets/icons/favorites-filled.svg";

function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  qty,
  onAddToCart,
  onDecreaseCart,
}) {
  return (
    <div className="product">
      <div className="photo">
        <img className="product-img" src={product.image} alt={product.name} />
        <div className="top-bar">
          <div className="labels">
            {product.isSale && <p className="label sale">Sale</p>}
            {product.isNew && <p className="label new">New</p>}
          </div>

          <button
            type="button"
            className={isFavorite ? "favorites-btn active" : "favorites-btn"}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            aria-label="toggle favorite"
          >
            <img src={isFavorite ? heartFilled : heartEmpty} alt="favorites" />
          </button>
        </div>
      </div>
      <div className="info">
        <p className="name">{product.name}</p>
        <div className="price">
          <div className="current-price">${product.price}</div>
          <div className="old-price">${product.oldPrice}</div>
        </div>
        <div className="cart-ui">
          {qty === 0 ? (
            <button type="button" className="buy-btn" onClick={onAddToCart}>
              Buy
            </button>
          ) : (
            <div className="buy-controls">
              <button
                type="button"
                className="count-btn"
                onClick={onDecreaseCart}
              >
                -
              </button>
              <span className="count">{qty}</span>
              <button type="button" className="count-btn" onClick={onAddToCart}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
