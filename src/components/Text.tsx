import React, { FC, ReactNode } from "react";

interface PropTypes {
  as?: any;
  children: ReactNode;
}

const Text: FC<PropTypes> = ({ as, children }) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
