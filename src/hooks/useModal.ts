import type { Modal } from "@/types";
import { create } from "zustand";

const useModal = create<Modal>((set, _) => ({
  open: false,
  title: "",
  content: "",
  confirmCallback: undefined,
  onTriggerModal: (
    title: string,
    content?: string,
    confirmCallback?: () => void
  ) => {
    set({ open: true, title, content, confirmCallback });
  },
  onClose: () => set({ open: false }),
  onConfirm: () => {
    set((state) => {
      state.confirmCallback && state.confirmCallback();
      return { open: false };
    });
  },
  onCancel: () => {
    set({ open: false });
  },
}));

export default useModal;
