import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useProductsView from "./useProductsView";
import { createFiltersState, SEARCH_DEBOUNCE_DELAY } from "../constants";

const products = [
  {
    id: 1,
    name: "Black Coat",
    price: 120,
    oldPrice: 150,
    categories: ["Outerwear"],
    color: "Black",
    image: "/black-coat.jpg",
  },
  {
    id: 2,
    name: "Red Dress",
    price: 80,
    oldPrice: 100,
    categories: ["Dresses"],
    color: "Red",
    image: "/red-dress.jpg",
  },
  {
    id: 3,
    name: "Blue Jeans",
    price: 60,
    oldPrice: 75,
    categories: ["Bottoms"],
    color: "Blue",
    image: "/blue-jeans.jpg",
  },
  {
    id: 4,
    name: "Black Jacket",
    price: 90,
    oldPrice: 120,
    categories: ["Outerwear"],
    color: "Black",
    image: "/black-jacket.jpg",
  },
  {
    id: 5,
    name: "Green Shirt",
    price: 40,
    oldPrice: 55,
    categories: ["Tops"],
    color: "Green",
    image: "/green-shirt.jpg",
  },
  {
    id: 6,
    name: "White Sneakers",
    price: 70,
    oldPrice: 95,
    categories: ["Shoes"],
    color: "White",
    image: "/white-sneakers.jpg",
  },
  {
    id: 7,
    name: "Black Boots",
    price: 110,
    oldPrice: 140,
    categories: ["Shoes"],
    color: "Black",
    image: "/black-boots.jpg",
  },
];

describe("useProductsView - filtering", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("filters products by search text only after debounce", () => {
    const { result } = renderHook(() => useProductsView(products));

    expect(result.current.totalCount).toBe(7);
    expect(result.current.currentProducts.map((p) => p.name)).toEqual([
      "Black Coat",
      "Red Dress",
      "Blue Jeans",
      "Black Jacket",
      "Green Shirt",
      "White Sneakers",
    ]);

    act(() => {
      result.current.setSearchText("  dReSs  ");
    });

    // До debounce список ещё не должен измениться
    expect(result.current.totalCount).toBe(7);

    act(() => {
      vi.advanceTimersByTime(SEARCH_DEBOUNCE_DELAY);
    });

    expect(result.current.totalCount).toBe(1);
    expect(result.current.currentProducts.map((p) => p.name)).toEqual([
      "Red Dress",
    ]);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.currentPage).toBe(1);
  });

  it("applies category, color and price filters together", () => {
    const { result } = renderHook(() => useProductsView(products));

    act(() => {
      result.current.applyFilters({
        ...createFiltersState(),
        category: "Outerwear",
        colors: ["Black"],
        priceMin: "100",
        priceMax: "130",
      });
    });

    expect(result.current.totalCount).toBe(1);
    expect(result.current.currentProducts).toHaveLength(1);
    expect(result.current.currentProducts[0].name).toBe("Black Coat");
    expect(result.current.currentProducts[0].price).toBe(120);
  });

  it("resets pagination to the first page when filters reduce the result set", () => {
    const { result } = renderHook(() => useProductsView(products));

    expect(result.current.totalPages).toBe(2);
    expect(result.current.currentPage).toBe(1);

    act(() => {
      result.current.onPageChange(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentProducts.map((p) => p.name)).toEqual([
      "Black Boots",
    ]);

    act(() => {
      result.current.applyFilters({
        ...createFiltersState(),
        category: "Shoes",
        colors: ["Black"],
        priceMin: "",
        priceMax: "",
      });
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.totalCount).toBe(1);
    expect(result.current.currentProducts.map((p) => p.name)).toEqual([
      "Black Boots",
    ]);
  });
});