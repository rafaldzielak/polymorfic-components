import React, { ReactNode } from "react";

type Rainbow = "red" | "orage" | "yellow" | "green" | "blue" | "indigo" | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, Props> = keyof (Props & AsProp<C>);

type PolymorficComponentProps<C extends React.ElementType, Props = {}> = Props &
  AsProp<C> &
  React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = {
  color?: Rainbow;
};

const Text = <C extends React.ElementType = "span">({
  children,
  as,
  style,
  color,
  ...props
}: PolymorficComponentProps<C, TextProps>) => {
  const Component = as || "span";

  const styles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...styles} {...props}>
      {children}
    </Component>
  );
};

export default Text;
