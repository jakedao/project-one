import DissasitfiedIcon from "@/assets/icons/DissastifyIcon";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { useScreenSize } from "@/hooks";
import { useNavigate } from "react-router";
import "./NotAllowPage.scss";

const NotAllowPage = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const handleRedirectToLogin = () => {
    navigate(`/${ERoute.LOGIN}`);
  };

  return (
    <div className="not__allow">
      <div className="not__allow__title">
        <DissasitfiedIcon size={50} />
        <Text variant="h5" color="primary" align={isMobile ? "center" : "left"}>
          Not allow to access this page
        </Text>
      </div>
      <div className="not__allow__login__section">
        <Text size="title" fontWeight={600}>
          You already had an account ?
        </Text>
        <Button width={180} height={40} onClick={handleRedirectToLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};
export default NotAllowPage;
