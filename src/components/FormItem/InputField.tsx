import type { TextField as TextFieldProps } from "@/types";
import type { DemoForm } from "@/types/demo";
import { Controller, type Control } from "react-hook-form";
import { TextField } from "../common";

type TOwnProps = TextFieldProps & {
  name: keyof DemoForm;
  control: Control<DemoForm>;
};

const InputField = (props: TOwnProps) => {
  const { name, control, ...inputProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...inputProps}
          value={field.value as string}
          onChange={field.onChange}
          errorText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default InputField;
