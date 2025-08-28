import type { ReactNode } from "react";
import { Toast } from "./common";

type TOwnProps = { children: ReactNode };

const PublicLayout = (props: TOwnProps) => {
  const { children } = props;
  return (
    <>
      {children}
      <Toast />
    </>
  );
};

export default PublicLayout;
