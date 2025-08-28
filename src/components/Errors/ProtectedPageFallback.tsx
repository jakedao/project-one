import { useNavigate } from "react-router";
import { Button, Text } from "../common";
import "./ProtectedPageFallback.scss";

const ProtectedPageFallback = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="protected__page">
      <Text size="title" align="center">
        {
          "We’re sorry, the page isn’t loading as expected. Please refresh the page or check back shortly."
        }
      </Text>
      <Button onClick={handleToHome} width={250} variant="secondary">
        <Text size="title" align="center">
          Back to Home
        </Text>
      </Button>
    </div>
  );
};

export default ProtectedPageFallback;
