import { useState } from "react";
import { createFiltersState } from "../constants";

function useFilterDraft() {
  const [draft, setDraft] = useState(createFiltersState);

  const setCategory = (category) => {
    setDraft((prev) => ({
      ...prev,
      category,
    }));
  };

  const setPriceMin = (priceMin) => {
    setDraft((prev) => ({
      ...prev,
      priceMin,
    }));
  };

  const setPriceMax = (priceMax) => {
    setDraft((prev) => ({
      ...prev,
      priceMax,
    }));
  };

  const toggleColor = (color) => {
    setDraft((prev) => {
      const hasColor = prev.colors.includes(color);

      return {
        ...prev,
        colors: hasColor
          ? prev.colors.filter((item) => item !== color)
          : [...prev.colors, color],
      };
    });
  };

  return {
    draft,
    setCategory,
    setPriceMin,
    setPriceMax,
    toggleColor,
  };
}

export default useFilterDraft;