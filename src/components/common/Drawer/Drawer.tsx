import { useDrawer } from "@/hooks";
import { combineClassNames } from "@/utils/common";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import "./Drawer.scss";

const Drawer = () => {
  const { open, onClose, component } = useDrawer();

  if (!open) return;

  return (
    <div className={combineClassNames("drawer__wrapper")}>
      <div className={combineClassNames("drawer")}>
        <ClickAwayListener onClickAway={onClose} shouldListen={open}>
          {component}
        </ClickAwayListener>
      </div>
    </div>
  );
};
export default Drawer;
