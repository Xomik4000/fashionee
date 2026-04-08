export const LS_KEYS = {
  FAVORITES: "favorites",
  CART: "cart",
};

export const PAGES = {
  SHOP: "shop",
  CART: "cart",
};

export const CATEGORY_ALL = "All";

export const DEFAULT_FILTERS = {
  category: CATEGORY_ALL,
  priceMin: "",
  priceMax: "",
  colors: [],
};

export function createFiltersState() {
  return {
    ...DEFAULT_FILTERS,
    colors: [...DEFAULT_FILTERS.colors],
  };
}

export const DEFAULT_PAGE = 1;
export const PRODUCTS_PER_PAGE = 6;
export const SEARCH_DEBOUNCE_DELAY = 400;

export const SORT_VALUES = {
  RELEVANCE: "relevance",
  NAME_ASC: "name-asc",
  NAME_DESC: "name-desc",
  PRICE_ASC: "price-asc",
  PRICE_DESC: "price-desc",
};

export const DEFAULT_SORT = SORT_VALUES.RELEVANCE;

export const SORT_OPTIONS = [
  {
    value: SORT_VALUES.RELEVANCE,
    label: "By relevance",
  },
  {
    value: SORT_VALUES.NAME_ASC,
    label: "By name (A-Z)",
  },
  {
    value: SORT_VALUES.NAME_DESC,
    label: "By name (Z-A)",
  },
  {
    value: SORT_VALUES.PRICE_ASC,
    label: "By price (low to high)",
  },
  {
    value: SORT_VALUES.PRICE_DESC,
    label: "By price (high to low)",
  },
];

export const PROMO_CODE = "ilovereact";
export const PROMO_DISCOUNT_PERCENT = 10;
export const PROMO_DISCOUNT_RATE = PROMO_DISCOUNT_PERCENT / 100;
export const DELIVERY_PRICE = 15;

export const PROMO_SECTION_TITLE = "You Have A Promo Code?";
export const PROMO_SECTION_DESCRIPTION =
  "To receive up-to-date promotional codes, subscribe to us on social networks.";
export const PROMO_INPUT_PLACEHOLDER = "Enter promo code";

export const ORDER_DELIVERY_DATE = "Aug 02 at 16:00";
export const NO_PROMO_DISCOUNT_LABEL = "No";
export const CART_EMPTY_TEXT = "Корзина пустая";

export const REVIEWED_PRODUCT_IDS = [6, 5, 1];