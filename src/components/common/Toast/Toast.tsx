import { ErrorIcon } from "@/assets/icons";
import useToast from "@/hooks/useToast";
import { combineClassNames } from "@/utils/common";
import Text from "../Text/Text";
import "./Toast.scss";

const Toast = () => {
  const { message, type } = useToast();

  const toastTypeMapper = {
    success: "--success",
    error: "--error",
    info: "--info",
  };

  return (
    <div
      className={combineClassNames(
        "toast",
        toastTypeMapper[type],
        message ? "--show" : ""
      )}
    >
      <ErrorIcon size={24} />
      <Text size="text-lg">{message}</Text>
    </div>
  );
};

export default Toast;
