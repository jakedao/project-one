import ArrowLeft from "@/assets/icons/Previous";
import { CartItem } from "@/components";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { useCart, useScreenSize } from "@/hooks";
import { currencyConverter } from "@/utils/common";
import { useNavigate } from "react-router";
import "./OrderSummaryPage.scss";

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const { isMobile } = useScreenSize();
  const cartItems = Object.keys(items).map((itemId) => items[itemId]);

  const subTotal = Object.keys(items)
    .reduce(
      (total, itemId) => total + items[itemId].quantity * items[itemId].price,
      0
    )
    .toFixed(2);
  const shippingFee = 2;

  const renderItemCart = () => {
    return cartItems.map((item) => <CartItem key={item.id} {...item} />);
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
          <Text color="#792e29" fontWeight={600}>
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
          {!cartItems.length ? (
            <Text size="title">There is no item in your cart</Text>
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
