import type { ButtonVariant } from "@/types";
import { combineClassNames } from "@/utils/common";
import type { ComponentProps, ReactNode } from "react";
import Text from "../Text/Text";
import "./Button.scss";

type TOwnProps = ComponentProps<"div"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  width?: number;
  height?: number;
};

const Button = (props: TOwnProps) => {
  const {
    children,
    variant = "primary",
    onClick,
    disabled = false,
    width,
    height,
    ...rest
  } = props;

  const variantMapper = {
    primary: "--primary",
    secondary: "--secondary",
  };

  return (
    <div
      {...rest}
      className={
        combineClassNames(
          "button",
          variantMapper[variant],
          disabled ? "--disabled" : undefined
        ) + ` ${props.className || ""} `
      }
      style={{ width: width || "fit-content", height: height || "auto" }}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Text size="title">{children}</Text>
      ) : (
        children
      )}
    </div>
  );
};
export default Button;
