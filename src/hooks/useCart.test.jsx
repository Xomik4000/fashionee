import { act, renderHook, waitFor } from "@testing-library/react";
import useCart from "./useCart";
import { LS_KEYS } from "../constants";

describe("useCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds items, updates quantity, removes item at zero and syncs cart to localStorage", async () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(1);
      result.current.addToCart(1);
      result.current.addToCart(2);
    });

    expect(result.current.cart).toEqual({ 1: 2, 2: 1 });
    expect(result.current.cartCount).toBe(3);

    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem(LS_KEYS.CART))).toEqual({
        1: 2,
        2: 1,
      });
    });

    act(() => {
      result.current.decreaseCart(1);
    });

    expect(result.current.cart).toEqual({ 1: 1, 2: 1 });
    expect(result.current.cartCount).toBe(2);

    act(() => {
      result.current.decreaseCart(1);
    });

    expect(result.current.cart).toEqual({ 2: 1 });
    expect(result.current.cartCount).toBe(1);

    act(() => {
      result.current.removeFromCart(2);
    });

    expect(result.current.cart).toEqual({});
    expect(result.current.cartCount).toBe(0);

    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem(LS_KEYS.CART))).toEqual({});
    });
  });
});