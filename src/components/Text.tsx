import React, { forwardRef, ReactElement, ReactNode } from "react";

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

type Props<C extends React.ElementType, P> = PolymorficComponentProps<C, P>;

type PolymorficRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

type PolymorficComponentPropsWithRef<C extends React.ElementType, P> = PolymorficComponentProps<C, P> & {
  ref?: PolymorficRef<C>;
};

type TextComponent = <C extends React.ElementType>(
  props: PolymorficComponentPropsWithRef<C, TextProps>
) => ReactElement | null;

const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    { children, as, style, color, ...props }: Props<C, TextProps>,
    ref?: PolymorficRef<C>
  ) => {
    const Component = as || "span";

    const styles = color ? { style: { ...style, color } } : {};
    return (
      <Component {...styles} {...props} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Text;
