import ArrowRight from "@/assets/icons/Next";
import { ERoute } from "@/configs/router";
import { PRODUCTS } from "@/constants/data";
import { upperCase } from "@/utils/common";
import { useLocation } from "react-router";
import { LinkItem } from "../common";
import "./Breadscrumb.scss";

const Breadscrum = () => {
  const location = useLocation();

  const BREADSCRUMB = location.pathname
    .split("/")
    .map((p) => {
      if (p === "home") return;
      return {
        to: p ? p : "home",
        label: p ? upperCase(p) : "Home",
      };
    })
    .filter(Boolean);

  const lastRoute = [...BREADSCRUMB].pop();

  const renderBreadscrumb = () => {
    const isProductDetails =
      BREADSCRUMB[1]?.to === ERoute.LISTING && BREADSCRUMB.length === 3;

    return BREADSCRUMB.map((br, index) => {
      if (!br) return;

      const isLastIndex = index === BREADSCRUMB.length - 1;
      const shouldRenderProductName = isProductDetails && isLastIndex;

      // Validating route
      const isValidRoute = Object.values(ERoute).includes(br.to as ERoute);
      if (!isValidRoute && !isProductDetails) return null;

      return (
        <div
          className={`breadscrumb__item ${isLastIndex ? "disabled" : ""}`}
          key={br.to}
        >
          <LinkItem
            selected={shouldRenderProductName}
            to={br.to}
            label={
              (shouldRenderProductName &&
                PRODUCTS.find((p) => p.id === br.to)?.name) ||
              br.label
            }
          />
          {!isLastIndex && isValidRoute && <ArrowRight size={24} />}
        </div>
      );
    });
  };

  if (BREADSCRUMB.length <= 1 || lastRoute?.to === ERoute.CHECKOUT) return;

  return <div className="breadscrumb">{renderBreadscrumb()}</div>;
};

export default Breadscrum;
