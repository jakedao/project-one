import { DissasitifiedIcon } from "@/assets/icons";
import { Text } from "../common";
import "./NotFound.scss";

const NotAllowed = () => {
  return (
    <div className="error-component__wrapper">
      <DissasitifiedIcon size={50} />
      <Text variant="h5">Page is not available</Text>
    </div>
  );
};

export default NotAllowed;
