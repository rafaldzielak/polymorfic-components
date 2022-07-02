import React, { ReactNode } from "react";

type Rainbow = "red" | "orage" | "yellow" | "green" | "blue" | "indigo" | "violet";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow;
} & Omit<React.ComponentPropsWithoutRef<C>, "color">;

type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

const Text = <C extends React.ElementType = "span">({ children, as, style, color, ...props }: Props<C>) => {
  const Component = as || "span";

  const styles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...styles} {...props}>
      {children}
    </Component>
  );
};

export default Text;
