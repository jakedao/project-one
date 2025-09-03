import { ERoute } from "@/configs/router";
import useAuth from "@/hooks/useAuth";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { ProtectedPaggeFallback, PublicPageFallback } from "./Errors";
import ErrorWrapper from "./Errors/ErrorWrapper";
import ProtectedLayout from "./ProtectedLayout";
import PublicLayout from "./PublicLayout";

const AppLayout = () => {
  const { setInfo } = useAuth();
  const { getAcessInfo } = useLocalStorage();
  const navigate = useNavigate();
  const accessInfo = getAcessInfo();
  const location = useLocation();

  useEffect(() => {
    const accessInfo = getAcessInfo();

    if (accessInfo) {
      setInfo(accessInfo);
      return;
    }

    if (location.pathname.split("/")[1] === "login") return;

    navigate(`/${ERoute.NOT_ALLOW}`);
  }, []);

  return (
    <>
      {accessInfo ? (
        <ProtectedLayout>
          <ErrorWrapper fallback={<ProtectedPaggeFallback />}>
            <Outlet />
          </ErrorWrapper>
        </ProtectedLayout>
      ) : (
        <ErrorWrapper fallback={<PublicPageFallback />}>
          <PublicLayout>
            <Outlet />
          </PublicLayout>
        </ErrorWrapper>
      )}
    </>
  );
};

export default AppLayout;
