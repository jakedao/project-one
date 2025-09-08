import { forwardRef } from "react";

import type { Menu as MenuProps } from "@/types";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import Text from "../Text/Text";
import MenuItem from "./MenuItem";

import "./Menu.scss";

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
    <div
      className="menu"
      ref={ref}
      style={{
        top: (targetPos?.top || 0) + 40,
        left: maxLeft,
      }}
    >
      <ClickAwayListener onClickAway={onClose} shouldListen={open}>
        {options.map((o) => (
          <MenuItem
            onClick={() => onSelect(o.value)}
            disabled={disabledValues?.includes(o.value.toString()) || false}
            selected={selectedValue === o.value}
          >
            <Text size="title" className="truncated">
              {o.label}
            </Text>
          </MenuItem>
        ))}
      </ClickAwayListener>
    </div>
  );
});

export default Menu;
