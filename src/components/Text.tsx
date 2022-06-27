import React, { ReactNode } from "react";

type PropTypes<C extends React.ElementType> = {
  as?: C;
  children: ReactNode;
} & React.ComponentProps<C>;

const Text = <C extends React.ElementType>({ as, children, ...rest }: PropTypes<C>) => {
  const Component = as || "span";
  return <Component {...rest}>{children}</Component>;
};

export default Text;
