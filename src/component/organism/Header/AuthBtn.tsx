import MainButton from "@/component/atoms/MainButton";
import clsx from "clsx";
import Link from "next/link";
import { JSX } from "react";

//pirmary-btn (-small) are custom classes defined in the global.css @layer component
const LoginBtn = ({ small }: { small: boolean }): JSX.Element => {
  return (
    <MainButton as={Link} href={"/sign-in"} small={small}>
      Login
    </MainButton>
  );
};
const SingUpBtn = ({ small }: { small: boolean }): JSX.Element => {
  return (
    <MainButton as={Link} href={"/sign-up"} small={small}>
      Sign Up
    </MainButton>
  );
};

export { LoginBtn, SingUpBtn };
