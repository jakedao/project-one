import { Checked } from "@/assets/icons";
import ArrowRight from "@/assets/icons/Next";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { useCart } from "@/hooks";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import "./PaymentSuccessPage.scss";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const { completed } = useCart();
  const location = useLocation();

  useEffect(() => {
    // Prevent user access this page by entering the URL
    if (completed && !location.state?.completed) {
      navigate(`/${ERoute.LISTING}`);
    }
  }, [completed]);

  return (
    <div className="success__payment">
      <div className="success__payment__heading">
        <Checked size={40} />
        <Text variant="h5" color="primary" align="center">
          Payment successful
        </Text>
      </div>
      <Button
        width={260}
        height={40}
        onClick={() => navigate(`/${ERoute.LISTING}`)}
      >
        <Text size="title" align="center">
          Continue shopping
        </Text>
        <ArrowRight color="#d9d4c8" size={24} />
      </Button>
    </div>
  );
};

export default PaymentSuccessPage;
