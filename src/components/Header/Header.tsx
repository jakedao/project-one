import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { Chocolate, HamburgerMenu, ShoppingCart } from "@/assets/icons";
import { ERoute, NAVIGATIONS } from "@/configs/router";
import { useCart, useScreenSize } from "@/hooks";
import { getOrinalRoute } from "@/utils/common";
import { IconButton, Menu } from "../common";
import Navigation from "../Navigation/Navigation";
import UserMenu from "./UserMenu";

import "./Header.scss";

const Header = () => {
  const [isShowMenu, toggleMenu] = useState<boolean>(false);
  const [hamburgerPos, setHamburgerPos] = useState<{
    top: number;
    left: number;
  }>();

  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useCart();
  const { isMobile } = useScreenSize();
  const mobileSvgSize = isMobile ? 32 : 40;

  const onNavigate = (value: string) => {
    navigate("/" + value);
  };

  const onOpenHambergurMenu = (e: React.MouseEvent) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setHamburgerPos({ top: rect.top, left: rect.left });
    toggleMenu(true);
  };

  const onCloseMenu = () => {
    toggleMenu(false);
    setHamburgerPos(undefined);
  };

  return (
    <>
      <div className="header">
        <div className="hamburger-menu" onClick={onOpenHambergurMenu}>
          <HamburgerMenu size={mobileSvgSize} />
        </div>

        {/* App LOGO */}
        <IconButton
          onClick={() => navigate("/" + ERoute.HOME)}
          className="main__logo"
        >
          <Chocolate size={mobileSvgSize} />
        </IconButton>

        <Navigation />
        <div className="header__right">
          <IconButton
            onClick={() => {
              navigate("/" + ERoute.CHECKOUT);
            }}
          >
            <ShoppingCart
              hasItem={Object.keys(items).length > 0}
              size={mobileSvgSize}
            />
          </IconButton>
          <UserMenu />
        </div>
      </div>

      <Menu
        open={isShowMenu}
        options={NAVIGATIONS.map((nav) => ({ ...nav, value: nav.to }))}
        selectedValue={getOrinalRoute(location.pathname)}
        targetPos={hamburgerPos}
        onClose={onCloseMenu}
        onSelectValue={(value) => {
          onNavigate(value.toString());
        }}
      />
    </>
  );
};

export default Header;
