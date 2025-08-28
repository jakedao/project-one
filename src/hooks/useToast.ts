import type { Toast } from "@/types";
import { create } from "zustand";

const useToast = create<Toast>((set, _) => ({
  message: "",
  type: "info",
  duration: 3000,
  showToast: (
    message: string,
    type: "success" | "error" | "info",
    duration = 2000
  ) => {
    set({ message, type, duration });
    setTimeout(() => {
      set({ message: "", type: "info", duration: 3000 });
    }, duration);
  },
}));

export default useToast;
