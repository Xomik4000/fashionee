import { useMemo } from "react";
import { PRODUCTS_PER_PAGE } from "../constants";
import useFilters from "./useFilters";
import useSorting from "./useSorting";
import usePagination from "./usePagination";

function useProductsView(products) {
  const {
    searchText,
    setSearchText,
    setAppliedFilters,
    filterOptions,
    filteredProducts,
    debouncedSearch,
    appliedFilters,
  } = useFilters(products);

  const { sortType, setSortType, sortedProducts } = useSorting(filteredProducts);

  const paginationResetKey = useMemo(
    () =>
      JSON.stringify({
        search: debouncedSearch,
        appliedFilters,
        sortType,
      }),
    [appliedFilters, debouncedSearch, sortType],
  );

  const { currentPage, totalPages, paginatedItems, onPageChange } =
    usePagination(sortedProducts, PRODUCTS_PER_PAGE, paginationResetKey);

  return {
    searchText,
    setSearchText,
    filterOptions,
    applyFilters: setAppliedFilters,
    sortType,
    setSortType,
    currentPage,
    totalPages,
    currentProducts: paginatedItems,
    totalCount: sortedProducts.length,
    onPageChange,
  };
}

export default useProductsView;