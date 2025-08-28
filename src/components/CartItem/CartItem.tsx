import { useScreenSize } from "@/hooks";
import type { ItemCart } from "@/types/listing";
import CartItemDesktop from "./CartItemDesktop";
import CartItemMobile from "./CartItemMobile";

const CartItem = (item: ItemCart) => {
  const { isMobile } = useScreenSize();

  return isMobile ? (
    <CartItemMobile {...item} />
  ) : (
    <CartItemDesktop {...item} />
  );
};

export default CartItem;
