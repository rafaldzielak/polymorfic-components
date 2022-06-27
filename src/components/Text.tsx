import React, { ReactNode } from "react";

type PropTypes<C extends React.ElementType> = {
  as?: C;
  children: ReactNode;
} & React.ComponentProps<C>;

const Text = <C extends React.ElementType>({ as, children }: PropTypes<C>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
