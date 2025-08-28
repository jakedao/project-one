import ArrowRight from "@/assets/icons/Next";
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

  const renderBreadscrumb = () => {
    return BREADSCRUMB.map((br, index) => {
      if (!br) return;
      const notLastIndex = index < BREADSCRUMB.length - 1;

      return (
        <div className="breadscrumb__item" key={br.to}>
          <LinkItem to={br.to} label={br.label} />
          {notLastIndex && <ArrowRight size={24} />}
        </div>
      );
    });
  };

  return <div className="breadscrumb">{renderBreadscrumb()}</div>;
};
export default Breadscrum;
