import { Delete } from "@/assets/icons";
import { useCart, useModal, useToast } from "@/hooks";
import type { ItemCart } from "@/types/listing";
import { currencyConverter } from "@/utils/common";
import { IconButton, Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemDesktop.scss";

const CartItemDesktop = (item: ItemCart) => {
  const { id, name, price, images, quantity } = item;
  const { removeItem, onUpdateQuantity } = useCart();
  const { onTriggerModal } = useModal();
  const { showToast } = useToast();

  const handleUpdateQuantity = (isAdd: boolean) => {
    onUpdateQuantity(id, isAdd);
  };

  const handleRemoveItem = () => {
    onTriggerModal &&
      onTriggerModal(
        "Are you sure",
        `${name} will be removed from your cart`,
        () => {
          removeItem(id);
          showToast("Item has been removed", "info");
        }
      );
  };

  return (
    <div className="cart-item">
      <div className="cart-item__section">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveItem();
          }}
        >
          <Delete size={24} />
        </IconButton>
        <div className="cart-item__image">
          <img src={images[0]} />
        </div>
        <Text size="title" fontWeight={800} maxLine={2}>
          {name}
        </Text>
      </div>
      <div className="cart-item__section">
        <QuantityController
          quantity={quantity}
          onChangeQuantity={handleUpdateQuantity}
        />
        <Text size="title" fontWeight={800} className="truncated">
          {currencyConverter(price)}
        </Text>
      </div>
    </div>
  );
};
export default CartItemDesktop;
