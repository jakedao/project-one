import type { Menu as MenuProps } from "@/types";
import { forwardRef } from "react";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import Text from "../Text/Text";
import "./Menu.scss";
import MenuItem from "./MenuItem";

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    open,
    onClose,
    options,
    onSelectValue,
    disabledValues,
    selectedValue,
    targetPos,
  } = props;

  if (!open) {
    return null;
  }

  const onSelect = (value: string | number) => {
    onSelectValue(value);
    onClose();
  };

  const maxLeft =
    (targetPos?.left || 0) < 150
      ? targetPos?.left
      : (targetPos?.left || 0) - 150;

  return (
    <ClickAwayListener onClickAway={onClose} shouldListen={open}>
      <div
        className="menu"
        ref={ref}
        style={{
          top: (targetPos?.top || 0) + 30,
          left: maxLeft,
        }}
      >
        {options.map((o) => (
          <MenuItem
            onClick={() => onSelect(o.value)}
            disabled={disabledValues?.includes(o.value.toString()) || false}
            selected={selectedValue === o.value}
          >
            <Text size="title">{o.label}</Text>
          </MenuItem>
        ))}
      </div>
    </ClickAwayListener>
  );
});

export default Menu;
