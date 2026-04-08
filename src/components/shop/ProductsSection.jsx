import ProductCard from "./ProductCard";
import Sort from "./Sort";
import Pagination from "./Pagination";

function ProductsSection({
  products,
  totalCount,
  sortType,
  onSortChange,
  currentPage,
  totalPages,
  onPageChange,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
}) {
  return (
    <div className="products-wrapper">
      <div className="sort-and-count">
        <p className="products-count">
          There are <span className="bold">{totalCount}</span> products in this
          category
        </p>

        <Sort value={sortType} onChange={onSortChange} />
      </div>

      <div className="products">
        {products.length === 0 && (
          <p className="no-products">No products found</p>
        )}

        {products.map((p) => {
          const qty = cart[p.id] || 0;

          return (
            <ProductCard
              key={p.id}
              product={p}
              isFavorite={favorites.includes(p.id)}
              onToggleFavorite={() => toggleFavorite(p.id)}
              qty={qty}
              onAddToCart={() => addToCart(p.id)}
              onDecreaseCart={() => decreaseCart(p.id)}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ProductsSection;
