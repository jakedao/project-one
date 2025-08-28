import type { Drawer } from "@/types";
import { create } from "zustand";

const useDrawer = create<Drawer>((set, _) => ({
  open: false,
  onTriggerDrawer: ({ component }) => {
    set({ open: true, component });
  },
  onClose: () => set({ open: false }),
}));

export default useDrawer;
