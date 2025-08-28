import "./ErrorMessage.scss";

type TOwnProps = {
  message: string;
};

const ErrorMessage = (props: TOwnProps) => {
  const { message } = props;
  return <div className="error__message">{message}</div>;
};

export default ErrorMessage;
