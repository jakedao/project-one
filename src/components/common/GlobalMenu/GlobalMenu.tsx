import React from "react";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";

type MenuProps = {
  options: string[];
  parentPos?: { top: number; left: number };
  onClose: () => void;
};

const GlobalMenu: React.FC<MenuProps> = ({ options, parentPos, onClose }) => {
  if (!parentPos) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={onClose} shouldListen={Boolean(parentPos)}>
      <div>
        {parentPos && (
          <div
            style={{
              position: "absolute",
              top: parentPos.top + 30,
              left: parentPos.left - 70,
              background: "#fff",
              border: "1px solid #ccc",
              zIndex: 1000,
              minWidth: 120,
            }}
          >
            <ul style={{ margin: 0, padding: 8, listStyle: "none" }}>
              {options.map((opt) => (
                <li
                  key={opt}
                  style={{ padding: "4px 8px", cursor: "pointer" }}
                  onClick={onClose}
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default GlobalMenu;
