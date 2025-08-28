import { AvatarBadge } from "@/assets/icons";
import { ERoute } from "@/configs/router";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import type { MenuPosition } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router";
import { IconButton, Menu } from "../common";

const MENU_ITEMS = [
  { value: 1, label: "Info" },
  { value: 2, label: "Sign out" },
];

const UserMenu = () => {
  const navigate = useNavigate();
  const [menuPos, setMenuPos] = useState<MenuPosition>();

  const handleSelect = (value: number | string) => {
    if (Number(value) === 1) return;

    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_INFO);

    navigate(ERoute.LOGIN);
  };

  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          const rect = e.currentTarget.getBoundingClientRect();
          setMenuPos({ top: rect.top, left: rect.left });
        }}
      >
        <AvatarBadge size={32} />
      </IconButton>
      <Menu
        open={Boolean(menuPos)}
        onClose={() => {
          setMenuPos(undefined);
        }}
        disabledValues={["1"]}
        onSelectValue={handleSelect}
        targetPos={menuPos}
        options={MENU_ITEMS}
      />
    </>
  );
};

export default UserMenu;
