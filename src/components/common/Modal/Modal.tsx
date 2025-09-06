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
            <Text size="title" fontWeight={600} align="center">
              {title || "Are you sure ?"}
            </Text>
          </div>
          <div className="modal__body">
            {content}
            {children}
          </div>
          <div className="modal__footer">
            <Button
              variant="secondary"
              onClick={onCancel}
              width={130}
              height={30}
            >
              <Text size="text-lg" align="center">
                Cancel
              </Text>
            </Button>
            <Button onClick={onConfirm} width={130} height={30}>
              <Text size="text-lg" align="center">
                OK
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Modal;
