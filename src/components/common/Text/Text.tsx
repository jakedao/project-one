import type { Text as TextProps } from "@/types";
import { combineClassNames } from "@/utils/common";
import "./Text.scss";

const Text = (props: TextProps) => {
  const {
    children,
    className,
    size = "text-md",
    variant,
    fontWeight = 400,
    align,
    color,
    maxLine,
  } = props;

  const sizeMapper = {
    title: "--title",
    "text-lg": "--lg",
    "text-md": "--md",
    "text-sm": "--sm",
  };

  const variantMapping = () => {
    if (variant === "h1") {
      return <h1>{children}</h1>;
    }

    if (variant === "h2") {
      return <h2>{children}</h2>;
    }

    if (variant === "h3") {
      return <h3>{children}</h3>;
    }
    if (variant === "h4") {
      return <h4>{children}</h4>;
    }
    if (variant === "h5") {
      return <h5>{children}</h5>;
    }

    if (variant === "p") {
      return <p>{children}</p>;
    }

    return children;
  };

  return (
    <div
      style={{
        fontWeight,
        textAlign: align || "inherit",
        color,
        ...(maxLine && {
          WebkitLineClamp: maxLine.toString(),
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }),
      }}
      className={`${className || ""} ${combineClassNames(
        "text",
        sizeMapper[size]
      )}`}
    >
      {variantMapping()}
    </div>
  );
};
export default Text;
