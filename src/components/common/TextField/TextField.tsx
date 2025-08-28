import { combineClassNames } from "@/utils/common";
import { forwardRef, type InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./TextField.scss";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: React.ReactNode;
  disabled?: boolean;
  errorText?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    startIcon,
    disabled = false,
    placeholder = "",
    errorText = "",
    width,
    ...rest
  } = props;

  const disabledClass = disabled ? "--disabled" : "";
  const errorClass = errorText ? "--error" : "";

  return (
    <div className="container">
      <div
        className={combineClassNames(
          "text-field__wrapper",
          disabledClass,
          errorClass
        )}
        style={{ width: width }}
      >
        {startIcon ? startIcon : null}
        <input
          ref={ref}
          placeholder={placeholder}
          {...rest}
          disabled={disabled}
          className={combineClassNames(
            "text-field",
            startIcon ? "--with-icon" : "",
            disabledClass,
            errorClass
          )}
        />
      </div>
      {errorText && <ErrorMessage message={errorText} />}
    </div>
  );
});

export default TextField;
