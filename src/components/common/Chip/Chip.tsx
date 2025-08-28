import { ClearIcon } from "@/assets/icons";
import type { IChip } from "@/types";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import "./Chip.scss";

const Chip = (props: IChip) => {
  const { children, startIcon, onDelete } = props;

  return (
    <div className="chip">
      {startIcon && <IconButton>{startIcon}</IconButton>}
      <Text size="text-lg">{children}</Text>
      {onDelete && (
        <IconButton onClick={onDelete}>
          <ClearIcon size={16} />
        </IconButton>
      )}
    </div>
  );
};

export default Chip;
