import { ClearIcon } from "@/assets/icons";
import type { IChip } from "@/types";
import { forwardRef } from "react";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import "./Chip.scss";

const Chip = forwardRef<HTMLDivElement, IChip>((props, ref) => {
  const { children, startIcon, onDelete } = props;

  return (
    <div className="chip" ref={ref}>
      {startIcon && <IconButton>{startIcon}</IconButton>}
      <Text size="text-lg">{children}</Text>
      {onDelete && (
        <IconButton onClick={onDelete}>
          <ClearIcon size={16} />
        </IconButton>
      )}
    </div>
  );
});

export default Chip;
