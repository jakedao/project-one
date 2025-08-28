import { useLocation, useNavigate } from "react-router";
import "./LinkItem.scss";

type TOwnProps = {
  to: string;
  label: string;
};

const LinkItem = (props: TOwnProps) => {
  const { to, label } = props;
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
      <div className={`link__item${isCurrentPath ? "-selected" : ""}`}>
        {label}
      </div>
    </div>
  );
};
export default LinkItem;
