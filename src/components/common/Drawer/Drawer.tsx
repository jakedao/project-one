import { useDrawer } from "@/hooks";
import { combineClassNames } from "@/utils/common";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import "./Drawer.scss";

const Drawer = () => {
  const { open, onClose, component } = useDrawer();

  const openClass = open ? "--open" : "";

  return (
    <div className={combineClassNames("drawer__wrapper", openClass)}>
      <div className={combineClassNames("drawer", openClass)}>
        <ClickAwayListener onClickAway={onClose} shouldListen={open}>
          {component}
        </ClickAwayListener>
      </div>
    </div>
  );
};
export default Drawer;
