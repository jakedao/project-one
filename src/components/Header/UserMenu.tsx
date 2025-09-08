import { AvatarBadge } from "@/assets/icons";
import { ERoute } from "@/configs/router";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import { useLocalStorage, useScreenSize } from "@/hooks";
import type { MenuPosition } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router";
import { IconButton, Menu } from "../common";

const UserMenu = () => {
  const { getAcessInfo } = useLocalStorage();
  const navigate = useNavigate();
  const [menuPos, setMenuPos] = useState<MenuPosition>();
  const { isMobile } = useScreenSize();

  const currentUser = getAcessInfo()!.name;

  const MENU_ITEMS = [
    { value: 1, label: `Hello, ${currentUser}` },
    { value: 2, label: "Sign out" },
  ];

  const handleSelect = (value: number | string) => {
    if (Number(value) === 1) return;

    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_INFO);

    navigate(`/${ERoute.LOGIN}`);
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
        <AvatarBadge size={isMobile ? 32 : 40} />
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
