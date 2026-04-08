import SideBar from "./SideBar";
import ProductsSection from "./ProductsSection";
import { PRODUCTS } from "../../data/products";
import useProductsView from "../../hooks/useProductsView";

function Showcase({
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
}) {
  const {
    searchText,
    setSearchText,
    filterOptions,
    applyFilters,
    sortType,
    setSortType,
    currentPage,
    totalPages,
    currentProducts,
    totalCount,
    onPageChange,
  } = useProductsView(PRODUCTS);

  return (
    <section className="container">
      <div className="shop">
        <SideBar
          searchText={searchText}
          onSearchChange={setSearchText}
          filterOptions={filterOptions}
          onApply={applyFilters}
        />
        <ProductsSection
          products={currentProducts}
          totalCount={totalCount}
          sortType={sortType}
          onSortChange={setSortType}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
        />
      </div>
    </section>
  );
}

export default Showcase;