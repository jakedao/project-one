import { Checked } from "@/assets/icons";
import { combineClassNames } from "@/utils/common";
import "./MenuItem.scss";

type TOwnProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  hasIcon?: boolean;
  onClick?: () => void;
};

const MenuItem = (props: TOwnProps) => {
  const {
    children,
    onClick,
    disabled = false,
    selected = false,
    hasIcon = false,
  } = props;

  const disabledClass = disabled ? "--disabled" : "";
  const selectedClass = selected ? "--selected" : "";
  const shouldHaveIcon = selected && hasIcon;

  return (
    <div
      className={combineClassNames("menu-item", disabledClass, selectedClass)}
      onClick={onClick}
    >
      {children}
      {shouldHaveIcon && <Checked size={24} />}
    </div>
  );
};
export default MenuItem;
