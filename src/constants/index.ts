import type {
  ChocolateFlavor,
  CustomSearchParams,
  FilterParams,
} from "@/types/listing";

export const NULLISH_PAGE = "...";

export const LOCAL_STORAGE_KEYS = {
  ACCESS_INFO: "accessInfo",
  CART_ITEMS: "cartItems",
};

export const RANGE_GAP = 10;

export const DEFAULT_SEARCH_PARAMS = {
  page: 1,
  limit: 5,
  flavor: "milk",
  min: 0,
  max: 100,
} as CustomSearchParams;

export const DEFAULT_FILTER = {
  flavor: [],
  ranges: {
    min: 0,
    max: 100,
  },
} as FilterParams;

export const FLAVOR_CHECKBOXES = [
  { label: "Milk", value: "milk" },
  { label: "Dark", value: "dark" },
  { label: "Buttersweet", value: "mixed" },
] as Array<{ label: string; value: ChocolateFlavor }>;
