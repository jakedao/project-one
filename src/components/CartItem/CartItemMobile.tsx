import { Delete } from "@/assets/icons";
import { useCart, useModal, useToast } from "@/hooks";
import type { ItemCart } from "@/types/listing";
import { currencyConverter } from "@/utils/common";
import { IconButton, Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemMobile.scss";

const CartItemMobile = (item: ItemCart) => {
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
    <div className="cart-item-wrapper">
      <div className="cart-item__image">
        <img src={images[0]} />
      </div>
      <div className="cart-item__desc">
        <div className="cart-item__desc__main">
          <Text size="text-lg" fontWeight={600} className="truncated">
            {name}
          </Text>
          <Text
            className="cart-item__desc__pricing"
            size="title"
            fontWeight={600}
          >
            {currencyConverter(price)}
          </Text>
        </div>
        <div className="cart-item__controller">
          <QuantityController
            quantity={quantity}
            onChangeQuantity={handleUpdateQuantity}
          />
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveItem();
            }}
          >
            <Delete size={24} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default CartItemMobile;
