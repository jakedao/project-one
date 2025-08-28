import type { DemoForm } from "@/types/demo";
import { ObjectSchema, number, object, string } from "yup";

export const schema: ObjectSchema<DemoForm> = object().shape({
  name: string().required("Please input your name"),
  shape: string().oneOf(["box", "sphere"]).required(),
  size: number().default(0).required(),
});
