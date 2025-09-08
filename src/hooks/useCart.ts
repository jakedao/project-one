import type { Cart, ItemCart } from "@/types/listing";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import useLocalStorage from "./useLocalStorage";

// Will be remove when persist store work smoothly

// const useCart = create<Cart>((set, get) => {
//   const { getCartItems, setCartItem } = useLocalStorage();
//   return {
//     items: getCartItems(),
//     totalPrice: 0,
//     completed: false,
//     addItem: (item, isBuyNow) => {
//       const currentItems = getCartItems();
//       let newItems: ItemCart[];

//       if (!isBuyNow) {
//         const isExisted = currentItems.find((c) => c.id === item.id);

//         // Case item existed
//         if (isExisted) {
//           newItems = currentItems.map((c) => {
//             if (c.id === item.id) {
//               return { ...c, quantity: c.quantity + 1 };
//             }
//             return c;
//           });
//         } else {
//           newItems = [...currentItems, { ...item, quantity: 1 }];
//         }
//       } else {
//         newItems = [{ ...item, quantity: 1 }];
//       }

//       setCartItem(newItems);
//       set({ items: newItems });
//     },

//     onUpdateQuantity: (itemId, isAdd) => {
//       const currentItems = get().items;
//       const newItems = [...currentItems].map((c) => {
//         if (c.id === itemId) {
//           return { ...c, quantity: c.quantity + (isAdd ? +1 : -1) };
//         }
//         return c;
//       });

//       set({ items: newItems });

//       setCartItem(currentItems);
//     },

//     removeItem: (itemId) => {
//       const newItems = get().items;
//       const remainedItems = newItems.filter((i) => i.id !== itemId);

//       set({ items: remainedItems });
//       setCartItem(remainedItems);
//     },
//     proceedOrder: () => set({ completed: true }),
//   };
// });

const useCart = create<Cart>()(
  persist(
    (set, get) => {
      return {
        items: [],
        totalPrice: 0,
        completed: false,
        addItem: (item, isBuyNow) => {
          const { getAcessInfo } = useLocalStorage();
          const currentUserId = getAcessInfo()?.name || ""; // User must be logged to use this hook
          const currentItems = get().items;
          let newItems: ItemCart[];

          if (!isBuyNow) {
            const isExisted = currentItems.find((c) => c.id === item.id);

            // Case item existed
            if (isExisted) {
              newItems = currentItems.map((c) => {
                if (c.id === item.id) {
                  return { ...c, quantity: c.quantity + 1 };
                }
                return c;
              });
            } else {
              newItems = [
                ...currentItems,
                { ...item, quantity: 1, userId: currentUserId },
              ];
            }
          } else {
            newItems = [{ ...item, quantity: 1, userId: currentUserId }];
          }

          set({ items: newItems });
        },

        onUpdateQuantity: (itemId, isAdd) => {
          const currentItems = get().items;
          const newItems = [...currentItems].map((c) => {
            if (c.id === itemId) {
              return { ...c, quantity: c.quantity + (isAdd ? +1 : -1) };
            }
            return c;
          });

          set({ items: newItems });
        },

        removeItem: (itemId) => {
          const newItems = get().items;
          const remainedItems = newItems.filter((i) => i.id !== itemId);

          set({ items: remainedItems });
        },
        proceedOrder: () => set({ completed: true }),
        getItemByUser: () => {
          const { getAcessInfo } = useLocalStorage();
          const currentUserId = getAcessInfo()?.name || ""; // User must be logged to use this hook
          return get().items.filter((i) => i.userId === currentUserId);
        },
      };
    },
    {
      name: "cartItems",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
