import type { CustomSearchParams } from "@/types/listing";

// CSS utilities to attached the based class into new class - Used for BEM Convention
export const combineClassNames = (
  basedClass: string,
  ...otherArgs: (string | undefined)[]
) => {
  const combined = otherArgs
    .filter(Boolean)
    .map((arg) => basedClass + arg)
    .join(" ");

  return basedClass + ` ${combined}`;
};

export const checkDisabled = (disabled: boolean) => {
  return disabled ? "disabled" : "";
};

export const currencyConverter = (price: number) => {
  return Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 5,
    style: "currency",
    currency: "USD",
    notation: "compact",
  }).format(price);
};

export const getOrinalRoute = (fullPath: string) => {
  const pathArr = fullPath.split("/");
  if (!pathArr.length) return "/";
  return pathArr[1];
};

export const upperCase = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

// Pipeline to transform
export const sanitizedSearchParams = (
  current: URLSearchParams,
  params: CustomSearchParams
): URLSearchParams => {
  const parsedSearchURL = new URLSearchParams({ ...current, ...params });

  const minVal = Number(parsedSearchURL.get("min"));
  const maxVal = Number(parsedSearchURL.get("max"));
  const flavors = parsedSearchURL.get("flavor") || "";

  if (minVal < 0 || minVal > maxVal) {
    parsedSearchURL.set("min", "0");
  }

  if (maxVal > 100 || minVal > maxVal) {
    parsedSearchURL.set("max", "100");
  }

  /** Flavor validations will remove INVALID value. There are 2 cases:
   * undefined
   * Value not belong to any Filter Flavor
   * **/

  if (flavors === "undefined" || !["milk", "dark", "mixed"].includes(flavors)) {
    parsedSearchURL.delete("flavor");
  }

  if (parsedSearchURL.get("keyword") === "undefined") {
    parsedSearchURL.delete("keyword");
  }

  return parsedSearchURL;
};
