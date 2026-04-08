import { useMemo, useState } from "react";
import {
  CATEGORY_ALL,
  SEARCH_DEBOUNCE_DELAY,
  createFiltersState,
} from "../constants";
import useDebouncedValue from "./useDebouncedValue";

function getFilterOptions(products) {
  const categories = [CATEGORY_ALL];
  const colors = [];
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  for (const product of products) {
    if (Array.isArray(product.categories)) {
      for (const category of product.categories) {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      }
    }

    if (product.color && !colors.includes(product.color)) {
      colors.push(product.color);
    }

    if (typeof product.price === "number") {
      if (product.price < minPrice) {
        minPrice = product.price;
      }

      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    }
  }

  return {
    categories,
    colors,
    minPrice: Number.isFinite(minPrice) ? minPrice : 0,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : 0,
  };
}

function useFilters(products) {
  const [searchText, setSearchText] = useState("");
  const [appliedFilters, setAppliedFilters] = useState(createFiltersState);

  const debouncedSearch = useDebouncedValue(searchText, SEARCH_DEBOUNCE_DELAY);

  const filterOptions = useMemo(() => getFilterOptions(products), [products]);

  const filteredProducts = useMemo(() => {
    const search = debouncedSearch.trim().toLowerCase();

    return products.filter((product) => {
      if (search && !(product.name || "").toLowerCase().includes(search)) {
        return false;
      }

      if (
        appliedFilters.category !== CATEGORY_ALL &&
        !product.categories?.includes(appliedFilters.category)
      ) {
        return false;
      }

      if (
        appliedFilters.colors.length > 0 &&
        !appliedFilters.colors.includes(product.color)
      ) {
        return false;
      }

      const price = Number(product.price) || 0;

      if (
        appliedFilters.priceMin !== "" &&
        price < Number(appliedFilters.priceMin)
      ) {
        return false;
      }

      if (
        appliedFilters.priceMax !== "" &&
        price > Number(appliedFilters.priceMax)
      ) {
        return false;
      }

      return true;
    });
  }, [appliedFilters, debouncedSearch, products]);

  return {
    searchText,
    setSearchText,
    appliedFilters,
    setAppliedFilters,
    filterOptions,
    filteredProducts,
    debouncedSearch,
  };
}

export default useFilters;