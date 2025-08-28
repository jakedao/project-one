import type { InputHTMLAttributes, ReactNode } from "react";
import "./IconButton.scss";

type TOwnProps = InputHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const IconButton = (props: TOwnProps) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className={`icon-button ${rest.className || ""}`}>
      {children}
    </div>
  );
};
export default IconButton;
