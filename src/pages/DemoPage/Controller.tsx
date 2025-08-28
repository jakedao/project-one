import { ArrowDown, ArrowUp } from "@/assets/icons";
import ArrowRight from "@/assets/icons/Next";
import ArrowLeft from "@/assets/icons/Previous";
import { IconButton } from "@/components/common";

import type { TNavigator } from "@/types/demo";
import "./Controller.scss";

type TOwnProps = {
  handler: (arg: TNavigator) => void;
};

const Controller = (props: TOwnProps) => {
  return (
    <div className="controller">
      <div className="controller__first">
        <IconButton onClick={() => props.handler("left")}>
          <ArrowLeft size={24} />
        </IconButton>
        <IconButton onClick={() => props.handler("right")}>
          <ArrowRight size={24} />
        </IconButton>
      </div>
      <div className="controller__second">
        <IconButton onClick={() => props.handler("up")}>
          <ArrowUp size={24} />
        </IconButton>
        <IconButton onClick={() => props.handler("down")}>
          <ArrowDown size={24} />
        </IconButton>
      </div>
    </div>
  );
};

export default Controller;
