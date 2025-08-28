import { Checkbox as CheckboxIcon } from "@/assets/icons";
import type { Checkbox as CheckboxProps } from "@/types";

import Text from "../Text/Text";
import "./Checkbox.scss";

const Checkbox = (props: CheckboxProps) => {
  const { checked = false, disabled, onChange, children } = props;

  const checkedClass = checked ? "checked" : "";
  const disabledClass = disabled ? "disabled" : "";

  return (
    <div
      className={`checkbox-wrapper ${checkedClass} ${disabledClass}`}
      onClick={onChange}
    >
      <CheckboxIcon size={24} checked={checked} />
      <Text size="text-lg">{children}</Text>
    </div>
  );
};
export default Checkbox;
