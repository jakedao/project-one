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
    maximumSignificantDigits: 10,
    style: "currency",
    currency: "USD",
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
