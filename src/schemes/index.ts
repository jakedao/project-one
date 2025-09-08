import type { DemoForm } from "@/types/demo";
import * as yup from "yup";

yup.addMethod(yup.string, "containBox", function (errorMsg?: string) {
  return this.test(
    "isBox",
    errorMsg || `Object name should contain "box"`,
    (value) => {
      if (!value) return true;
      return value.includes("box");
    }
  );
});

export const schema: yup.ObjectSchema<DemoForm> = yup.object().shape({
  name: yup.string().containBox().required("Please input your name"),
  shape: yup
    .string()
    .oneOf(["box", "sphere"])
    .required("Please a shape for the object"),
  size: yup.number().min(5, "Object size should be greater than 5").required(),
});
