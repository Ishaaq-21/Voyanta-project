import MainButton from "@/component/atoms/MainButton";
import Link from "next/link";
import { JSX } from "react";

const LoginBtn = ({ small }: { small: boolean }): JSX.Element => {
  return (
    <Link href={"/sign-in"}>
      <MainButton buttonName="Login" small={small} />
    </Link>
  );
};
const SingUpBtn = ({ small }: { small: boolean }): JSX.Element => {
  return (
    <Link href={"/sign-up"}>
      <MainButton buttonName="Sign-up" small={small} />
    </Link>
  );
};

export { LoginBtn, SingUpBtn };
