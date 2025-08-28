import { ERoute } from "@/configs/router";
import { useLocalStorage } from "@/hooks";
import useDrawer from "@/hooks/useDrawer";
import { combineClassNames } from "@/utils/common";
import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import Breadscrum from "./Breadscrumb/Breadscrumb";
import Header from "./Header/Header";
import { Drawer, Modal, Toast } from "./common";

type TOwnProps = {
  children?: ReactNode;
};

const ProtectedLayout = (props: TOwnProps) => {
  const { children } = props;
  const { open } = useDrawer();
  const location = useLocation();
  const navigate = useNavigate();

  const { getAcessInfo } = useLocalStorage();
  const userInfo = getAcessInfo();

  useEffect(() => {
    // Auto redirect into Home Page
    if (userInfo && location.pathname.split("/")[1] === "") {
      navigate("/" + ERoute.HOME);
    }
  }, [location]);

  return (
    <>
      <Header />
      <div
        className={combineClassNames(
          "main__body",
          open ? "--drawer-opened" : ""
        )}
      >
        <Breadscrum />
        {children}
        <Toast />
      </div>
      <Modal />
      <Drawer />
    </>
  );
};

export default ProtectedLayout;
