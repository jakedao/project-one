import type { Cart, ItemCart } from "@/types/listing";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

const useCart = create<Cart>((set, get) => {
  const { getCartItems, setCartItem } = useLocalStorage();
  return {
    items: getCartItems(),
    totalPrice: 0,
    completed: false,
    addItem: (item, isBuyNow) => {
      const currentItems = getCartItems();
      let newItems = { ...currentItems } as Record<string, ItemCart>;
      const selectedItem = currentItems[item.id];

      if (!isBuyNow) {
        newItems = {
          ...newItems,
          [item.id]: { ...item, quantity: (selectedItem?.quantity || 0) + 1 },
        };
      } else {
        newItems = { [item.id]: { ...item, quantity: 1 } };
      }

      setCartItem(newItems);
      set({ items: newItems });
    },
    onUpdateQuantity: (itemId, isAdd) => {
      const currentItems = get().items;
      currentItems[itemId].quantity =
        currentItems[itemId].quantity + (isAdd ? +1 : -1);

      set({ items: currentItems });
      setCartItem(currentItems);
    },
    removeItem: (itemId) => {
      const newItems = get().items;
      delete newItems[itemId];

      set({ items: newItems });
      setCartItem(newItems);
    },
    proceedOrder: () => set({ completed: true }),
  };
});

export default useCart;
