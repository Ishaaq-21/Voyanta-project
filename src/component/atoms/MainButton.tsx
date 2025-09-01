import clsx from "clsx";
import React, { Children, JSX } from "react";

type MainButtonBaseProps = {
  children: React.ReactNode;
  small?: boolean;
  className?: string;
};
type MainButtonProps<C extends React.ElementType> = MainButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<C>, keyof MainButtonBaseProps> & {
    as?: C;
  };

const MainButton = <C extends React.ElementType>({
  children,
  small,
  className,
  as,
  ...props
}: MainButtonProps<C>): JSX.Element => {
  const Component = as || "button";
  const btnClass = clsx(
    "inline-flex-center",
    {
      "primary-btn-small": small,
      "primary-btn": !small,
    },
    className
  );
  return (
    <Component className={btnClass} {...props}>
      {children}
    </Component>
  );
};

export default MainButton;
