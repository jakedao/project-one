import { LOCAL_STORAGE_KEYS } from "@/constants";
import type { ItemCart } from "@/types/listing";
import type { UserInfo } from "@/types/user";

const useLocalStorage = () => {
  const getAcessInfo = () => {
    const info = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_INFO);
    if (info) {
      return JSON.parse(info) as UserInfo;
    }
    return undefined;
  };

  const setAccessInfo = (arg: UserInfo) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_INFO, JSON.stringify(arg));
  };

  const setCartItem = (arg: Record<string, ItemCart>) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CART_ITEMS, JSON.stringify(arg));
  };

  const getCartItems = () => {
    const items = localStorage.getItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    if (items) {
      return JSON.parse(items) as Record<string, ItemCart>;
    }
    return {};
  };

  return { setAccessInfo, getAcessInfo, setCartItem, getCartItems };
};

export default useLocalStorage;
