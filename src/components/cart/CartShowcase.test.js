import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartShowcase from "./CartShowcase";

const products = [
  {
    id: 1,
    name: "Winter Coat",
    price: 100,
    oldPrice: 140,
    image: "/coat.jpg",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 50,
    oldPrice: 70,
    image: "/bag.jpg",
  },
];

const cartHandlers = {
  addToCart: jest.fn(),
  decreaseCart: jest.fn(),
  removeFromCart: jest.fn(),
};

describe("CartShowcase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows correct order totals and applies promo code from the cart UI", async () => {
    const user = userEvent.setup();

    render(
      <CartShowcase
        cart={{ 1: 2, 2: 1 }}
        products={products}
        {...cartHandlers}
      />
    );

    expect(screen.getByText("$250.00")).toBeTruthy();
    expect(screen.getByText(/^No$/)).toBeTruthy();
    expect(screen.getByText("$15.00")).toBeTruthy();
    expect(screen.getByText("$265.00")).toBeTruthy();

    const promoInput = screen.getByPlaceholderText(/enter promo code/i);
    await user.type(promoInput, "  ILoVeReAcT  ");

    const promoBlock = promoInput.closest(".promo-code-wrapper");
    if (!promoBlock) {
      throw new Error("Promo block not found");
    }

    await user.click(within(promoBlock).getByRole("button"));

    expect(screen.getByText("10%")).toBeTruthy();
    expect(screen.getByText("$240.00")).toBeTruthy();
  });

  it("keeps delivery and total at 0 for an empty cart, even after valid promo application", async () => {
    const user = userEvent.setup();

    render(
      <CartShowcase
        cart={{}}
        products={products}
        {...cartHandlers}
      />
    );

    expect(screen.getByText("Корзина пустая")).toBeTruthy();
    expect(screen.getAllByText("$0.00")).toHaveLength(3);

    const promoInput = screen.getByPlaceholderText(/enter promo code/i);
    await user.type(promoInput, "ilovereact");

    const promoBlock = promoInput.closest(".promo-code-wrapper");
    if (!promoBlock) {
      throw new Error("Promo block not found");
    }

    await user.click(within(promoBlock).getByRole("button"));

    expect(screen.getByText("10%")).toBeTruthy();
    expect(screen.getAllByText("$0.00")).toHaveLength(3);
  });
});