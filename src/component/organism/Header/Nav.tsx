import { JSX } from "react";
import { LoginBtn, SingUpBtn } from "./AuthBtn";

const Nav = (): JSX.Element => {
  return (
    <div className="hidden md:block register">
      <LoginBtn small={true} />
      <SingUpBtn small={true} />
    </div>
  );
};
export default Nav;
