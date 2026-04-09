import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const PRODUCT_NAME = "Spray wrap skirt";
const PRODUCT_PRICE = "$35.99";
const ORDER_PRICE_ONE_ITEM = "$35.99";
const ORDER_PRICE_TWO_ITEMS = "$71.98";
const DELIVERY_PRICE = "$15.00";
const TOTAL_ONE_ITEM = "$50.99";
const TOTAL_TWO_ITEMS = "$86.98";

function getShopProductCard(productName) {
  const productTitle = screen.getByText(productName);
  const card = productTitle.closest(".product");

  if (!card) {
    throw new Error(`Shop product card not found for "${productName}"`);
  }

  return card;
}

function getCartProductCard(productName) {
  const productTitle = screen.getByText(productName);
  const card = productTitle.closest(".product");

  if (!card) {
    throw new Error(`Cart product card not found for "${productName}"`);
  }

  return card;
}

function getCartButton() {
  const cartIcon = screen.getByAltText("cart");
  const cartButton = cartIcon.closest(".header-icon");

  if (!cartButton) {
    throw new Error("Cart button not found");
  }

  return cartButton;
}

function getOrderSummary() {
  const orderHeading = screen.getByRole("heading", { name: /your order/i });
  const orderSummary = orderHeading.closest(".order");

  if (!orderSummary) {
    throw new Error("Order summary block not found");
  }

  return orderSummary;
}

async function addProductFromShop(user, productName) {
  const card = getShopProductCard(productName);
  const buyButton = within(card).getByRole("button", { name: /buy/i });

  await user.click(buyButton);
}

async function openCart(user) {
  await user.click(getCartButton());
}

describe("App integration - critical e-commerce flow", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it("adds a product from Shop, updates the cart counter and shows correct order totals in Cart", async () => {
    const user = userEvent.setup();

    render(<App />);

    await addProductFromShop(user, PRODUCT_NAME);

    expect(within(getCartButton()).getByText("1")).toBeInTheDocument();

    await openCart(user);

    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_NAME)).toBeInTheDocument();

    const orderSummary = getOrderSummary();

    expect(
      within(orderSummary).getByText(ORDER_PRICE_ONE_ITEM),
    ).toBeInTheDocument();
    expect(within(orderSummary).getByText(DELIVERY_PRICE)).toBeInTheDocument();
    expect(within(orderSummary).getByText(TOTAL_ONE_ITEM)).toBeInTheDocument();
  });

  it("changes quantity in Cart and recalculates order totals", async () => {
    const user = userEvent.setup();

    render(<App />);

    await addProductFromShop(user, PRODUCT_NAME);
    await openCart(user);

    let cartItem = getCartProductCard(PRODUCT_NAME);

    expect(within(cartItem).getAllByText(PRODUCT_PRICE)).toHaveLength(2);
    expect(within(cartItem).getByText("1")).toBeInTheDocument();

    await user.click(within(cartItem).getByText("+"));

    expect(within(getCartButton()).getByText("2")).toBeInTheDocument();

    cartItem = getCartProductCard(PRODUCT_NAME);
    expect(within(cartItem).getByText("2")).toBeInTheDocument();

    const orderSummary = getOrderSummary();

    expect(
      within(orderSummary).getByText(ORDER_PRICE_TWO_ITEMS),
    ).toBeInTheDocument();
    expect(within(orderSummary).getByText(DELIVERY_PRICE)).toBeInTheDocument();
    expect(within(orderSummary).getByText(TOTAL_TWO_ITEMS)).toBeInTheDocument();
  });

  it("removes the last product from Cart and resets totals for an empty cart", async () => {
    const user = userEvent.setup();

    render(<App />);

    await addProductFromShop(user, PRODUCT_NAME);
    await openCart(user);

    const orderSummaryBeforeRemove = getOrderSummary();

    expect(
      within(orderSummaryBeforeRemove).getByText(TOTAL_ONE_ITEM),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /remove product/i }));

    expect(screen.getByText("Корзина пустая")).toBeInTheDocument();

    const orderSummaryAfterRemove = getOrderSummary();

    expect(within(orderSummaryAfterRemove).getAllByText("$0.00")).toHaveLength(
      3,
    );
  });
});
