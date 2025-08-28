import { ERoute } from "@/configs/router";
import { useNavigate } from "react-router";
import { Button, Text } from "../common";
import "./PublicPageFallback.scss";

const PublicPageFallback = () => {
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/" + ERoute.LOGIN, { replace: true });
  };

  return (
    <div className="public__page">
      <Text size="title" align="center">
        {
          "We’re sorry, the page isn’t loading as expected. If you have an account, you can sign in below."
        }
      </Text>
      <Button onClick={handleToLogin} width={250} variant="secondary">
        <Text size="title" align="center">
          Back to login
        </Text>
      </Button>
    </div>
  );
};

export default PublicPageFallback;
