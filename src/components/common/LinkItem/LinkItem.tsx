import { useLocation, useNavigate } from "react-router";
import "./LinkItem.scss";

type TOwnProps = {
  to: string;
  label: string;
  selected?: boolean;
};

const LinkItem = (props: TOwnProps) => {
  const { to, label, selected } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPath = location.pathname === "/" + to;

  return (
    <div
      className="link"
      onClick={() => {
        navigate(to);
      }}
    >
      <div
        className={`link__item${selected || isCurrentPath ? "-selected" : ""}`}
      >
        {label}
      </div>
    </div>
  );
};
export default LinkItem;
