import { MinusOutlined, PlusOutlined } from "@/assets/icons";
import { IconButton, Text } from "../common";
import "./QuantityController.scss";

type TOwnProps = {
  quantity: number;
  onChangeQuantity: (isAdd: boolean) => void;
};

const QuantityController = (props: TOwnProps) => {
  const { quantity, onChangeQuantity } = props;
  return (
    <div className="quantity-controller">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onChangeQuantity(true);
        }}
      >
        <PlusOutlined size={24} />
      </IconButton>
      <Text size="title" fontWeight={600}>
        {quantity}
      </Text>
      <IconButton
        className={quantity === 1 ? "disabled" : ""}
        onClick={(e) => {
          e.stopPropagation();
          onChangeQuantity(false);
        }}
      >
        <MinusOutlined size={24} />
      </IconButton>
    </div>
  );
};
export default QuantityController;
