import type { DemoForm } from "@/types/demo";
import { Controller, type Control } from "react-hook-form";
import { Slider, Text } from "../common";

type TOwnProps = {
  name: keyof DemoForm;
  control: Control<DemoForm>;
  title?: String;
};

const SliderField = (props: TOwnProps) => {
  const { name, control, title } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            }}
          >
            {title && (
              <Text size="title" fontWeight={600}>
                {title}
              </Text>
            )}
            <Slider value={Number(field.value)} onChange={field.onChange} />
          </div>
        );
      }}
    />
  );
};

export default SliderField;
