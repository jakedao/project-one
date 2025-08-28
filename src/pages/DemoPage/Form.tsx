import { Text } from "@/components/common";
import { InputField, SelectForm, SliderField } from "@/components/FormItem";
import type { DemoForm } from "@/types/demo";
import { useFormContext } from "react-hook-form";

const SHAPE_OPTIONS = [
  { value: "box", label: "Box" },
  { value: "sphere", label: "Sphere" },
];

const Form = () => {
  const { control } = useFormContext<DemoForm>();

  return (
    <>
      <Text variant="h5">Form Controller</Text>
      <div className="demo__page__section__item">
        <InputField
          width="80%"
          name="name"
          control={control}
          placeholder="Object name"
        />

        <SelectForm name="shape" control={control} options={SHAPE_OPTIONS} />
        <SliderField control={control} name="size" title="Object sizing" />
      </div>
    </>
  );
};

export default Form;
