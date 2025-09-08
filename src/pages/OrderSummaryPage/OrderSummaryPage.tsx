import { useNavigate } from "react-router";

import ArrowLeft from "@/assets/icons/Previous";
import { CartItem } from "@/components";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { useCart, useScreenSize } from "@/hooks";
import { currencyConverter } from "@/utils/common";

import "./OrderSummaryPage.scss";

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const { getItemByUser } = useCart();
  const { isMobile } = useScreenSize();
  const items = getItemByUser();

  const subTotal = items
    .reduce((total, itemId) => total + itemId.quantity * itemId.price, 0)
    .toFixed(2);
  const shippingFee = 2;

  const renderItemCart = () => {
    return items.map((item) => <CartItem key={item.id} {...item} />);
  };

  const renderFinalization = () => {
    return (
      <>
        <div className="order__summary__total__section">
          <Text size="title">Sub Total</Text>
          <Text size="title" fontWeight={600} className="truncated">
            {currencyConverter(Number(subTotal))}
          </Text>
        </div>
        <div className="order__summary__total__section">
          <Text size="title">Shipping fee</Text>
          <Text size="title" fontWeight={600}>
            {currencyConverter(shippingFee)}
          </Text>
        </div>
        <div className="order__summary__total__section">
          <Text size="title">Total</Text>
          <Text size="title" fontWeight={600} className="truncated">
            {currencyConverter(Number(subTotal) + shippingFee)}
          </Text>
        </div>

        <Button width={380} height={40}>
          <Text align="center" size="title">
            Proceed to checkout
          </Text>
        </Button>
        <Button
          width={380}
          height={40}
          variant="secondary"
          className="back__btn"
          onClick={() => navigate(`/${ERoute.LISTING}`)}
        >
          <Text align="center" size="title">
            Return to listing
          </Text>
        </Button>
      </>
    );
  };

  return (
    <>
      {!isMobile && (
        <div
          className="return__listing"
          onClick={() => {
            navigate(`/${ERoute.LISTING}`);
          }}
        >
          <ArrowLeft size={24} />
          <Text color="primary" fontWeight={600} size="title">
            Return to listing
          </Text>
        </div>
      )}

      <div className="order__summary">
        <Text
          className="order__summary__title"
          align={isMobile ? "left" : "center"}
          fontWeight={600}
        >
          Order Summary
        </Text>
        <div className="order__summary__container">
          {!items.length ? (
            <Text color="primary" size="title" fontWeight={600}>
              There is no item in your cart
            </Text>
          ) : (
            <>
              <div className="order__summary__items">{renderItemCart()}</div>
              <div className="order__summary__total">
                {renderFinalization()}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default OrderSummaryPage;
