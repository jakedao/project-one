import { NAVIGATIONS } from "@/configs/router";
import { LinkItem } from "../common";
import "./Navigation.scss";

type TOwnProps = {};

const Navigation = (props: TOwnProps) => {
  const {} = props;

  return (
    <div className="navigation">
      {NAVIGATIONS.map((nav, index) => (
        <div className="navigation__item" key={index}>
          <LinkItem key={nav.to} to={nav.to} label={nav.label} />
          {index !== NAVIGATIONS.length - 1 && (
            <span className="separator">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
