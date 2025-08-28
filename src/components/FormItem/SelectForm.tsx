import type { SelectField as SelectFieldProps } from "@/types";
import type { DemoForm } from "@/types/demo";
import { Controller, type Control } from "react-hook-form";
import { ErrorMessage, SelectField } from "../common";

type TOwnProps = SelectFieldProps & {
  name: keyof DemoForm;
  control: Control<DemoForm>;
};

const SelectForm = (props: TOwnProps) => {
  const { name, control, options } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <>
            <SelectField
              width="80%"
              options={options}
              onChange={field.onChange}
              value={field.value as string}
            />
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </>
        );
      }}
    />
  );
};
export default SelectForm;
