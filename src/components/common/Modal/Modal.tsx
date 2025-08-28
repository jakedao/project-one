import { useModal } from "@/hooks";
import Button from "../Button/Button";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import Text from "../Text/Text";
import "./Modal.scss";

const Modal = () => {
  const { open, onClose, content, onCancel, onConfirm, title, children } =
    useModal();

  if (!open) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={onClose} shouldListen={open}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__header">
            <Text size="title" fontWeight={600}>
              {title || "Are you sure ?"}
            </Text>
          </div>
          <div className="modal__body">
            {content}
            {children}
          </div>
          <div className="modal__footer">
            <Button variant="secondary" onClick={onCancel}>
              <Text size="text-lg">Cancel</Text>
            </Button>
            <Button onClick={onConfirm}>
              <Text size="text-lg">OK</Text>
            </Button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Modal;
