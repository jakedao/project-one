import type { User, UserInfo } from "@/types/user";
import { create } from "zustand";

const useAuth = create<User>((set, _) => ({
  setInfo: (arg: UserInfo) => {
    set({ info: arg });
  },
}));

export default useAuth;
