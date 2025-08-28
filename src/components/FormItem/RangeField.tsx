import type { RangeParams } from "@/types/listing";
import { Controller, type Control } from "react-hook-form";
import { RangeSlider, Text } from "../common";

type TOwnProps = {
  name: string;
  control: Control<any>;
};

const RangeField = (props: TOwnProps) => {
  const { name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <>
            <RangeSlider
              ranges={field.value as RangeParams}
              onUpdateRange={field.onChange}
            />
            {
              <Text size="text-lg" color="#792e29" fontWeight={800}>
                {fieldState.error?.message}
              </Text>
            }
          </>
        );
      }}
    />
  );
};

export default RangeField;
