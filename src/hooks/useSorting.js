import { useMemo, useState } from "react";
import { DEFAULT_SORT, SORT_VALUES } from "../constants";

function sortProducts(products, sortType) {
  const sortedProducts = [...products];

  switch (sortType) {
    case SORT_VALUES.NAME_ASC:
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SORT_VALUES.NAME_DESC:
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case SORT_VALUES.PRICE_ASC:
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case SORT_VALUES.PRICE_DESC:
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return sortedProducts;
}

function useSorting(products) {
  const [sortType, setSortType] = useState(DEFAULT_SORT);

  const sortedProducts = useMemo(
    () => sortProducts(products, sortType),
    [products, sortType],
  );

  return {
    sortType,
    setSortType,
    sortedProducts,
  };
}

export default useSorting;