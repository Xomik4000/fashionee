function CartProductItem({ product, qty, onPlus, onMinus, onRemove }) {
  const total = (product.price * qty).toFixed(2);

  return (
    <div className='product'>
      <div className='photo'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info'>
        <h5 className='title'>{product.name}</h5>
        <div className='price-wrapper'>
          <div className='price-and-quantity'>
            <div className='price'>
              <div className='old-price'>${product.oldPrice}</div>
              <div className='current-price'>${product.price}</div>
            </div>
            <div className='quantity'>
              <div
                className='count-button'
                onClick={onMinus}
                style={{ cursor: "pointer" }}
              >
                -
              </div>
              <div className='count'>{qty}</div>
              <div
                className='count-button'
                onClick={onPlus}
                style={{ cursor: "pointer" }}
              >
                +
              </div>
            </div>
          </div>
          <div className='total-price'>${total}</div>
        </div>
        <button
          type='button'
          className='close'
          onClick={onRemove}
          aria-label='Remove product'
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default CartProductItem;
