"use client";
import { JSX, useState } from "react";
import { FaUser } from "react-icons/fa";
import { LoginBtn, SingUpBtn } from "./AuthBtn";

const MobileNav = (): JSX.Element => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsNavOpened(false);
    }
  };
  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsNavOpened(true)}
        className="text-amber-400"
        aria-label="Open user menu"
        aria-expanded={isNavOpened}
      >
        <FaUser className="h-7 w-7" />
      </button>
      {isNavOpened && <LoginOverLay handleClose={handleClose} />}
    </div>
  );
};

const LoginOverLay = ({
  handleClose,
}: {
  handleClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <div
    onClick={handleClose}
    className="fixed w-full h-full inset-0 bg-black/90 z-40 flex-col gap-y-3 flex-center"
    aria-label="Overlay"
    aria-labelledby="overlay-title"
    aria-modal="true"
    role="dialog"
  >
    <LoginBtn small={false} />
    <SingUpBtn small={false} />
  </div>
);

export default MobileNav;
