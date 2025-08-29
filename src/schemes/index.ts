import type { DemoForm } from "@/types/demo";
import * as yup from "yup";

yup.addMethod(yup.string, "containBox", function (errorMsg?: string) {
  return this.test("isBox", errorMsg || "It does not contain box", (value) => {
    if (!value) return true;
    return value.includes("box");
  });
});

export const schema: yup.ObjectSchema<DemoForm> = yup.object().shape({
  name: yup.string().containBox().required("Please input your name"),
  shape: yup.string().oneOf(["box", "sphere"]).required(),
  size: yup.number().default(0).required(),
});
