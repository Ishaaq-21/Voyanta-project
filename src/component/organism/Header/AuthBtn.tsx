import MainButton from "@/component/atoms/MainButton";
import Link from "next/link";
import { JSX } from "react";

const LoginBtn = (): JSX.Element => {
  return (
    <Link href={"/sign-in"}>
      <MainButton buttonName="Login" />
    </Link>
  );
};
const SingUpBtn = (): JSX.Element => {
  return (
    <Link href={"/sign-up"}>
      <MainButton buttonName="Sign-up" />
    </Link>
  );
};

export { LoginBtn, SingUpBtn };
