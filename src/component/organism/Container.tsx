import clsx from "clsx";
import React, { JSX } from "react";

type ContainerProps = {
  flex?: boolean;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
};
const Container = ({
  flex = false,
  centered = false,
  className,
  children,
}: ContainerProps): JSX.Element => {
  return (
    <div
      className={clsx("container h-full mx-auto px-6 md:px-8", className, {
        flex: flex,
        "justify-center items-center": flex && centered,
      })}
    >
      {children}
    </div>
  );
};
export default Container;
