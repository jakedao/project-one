import { DissasitifiedIcon } from "@/assets/icons";
import { Text } from "../common";
import "./ErrorComponent.scss";

type TOwnProps = {
  text: string;
};

const ErrorComponent = (props: TOwnProps) => {
  const { text } = props;

  return (
    <div className="error__component__wrapper">
      <DissasitifiedIcon size={50} />
      <Text variant="h5">{text}</Text>
    </div>
  );
};

export default ErrorComponent;
