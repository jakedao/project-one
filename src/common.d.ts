import * as yup from "yup";

declare module "yup" {
  interface StringSchema extends yup.StringSchema {
    containBox(arg?: string): StringSchema;
  }
}
