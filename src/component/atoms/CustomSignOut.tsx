"use client";
import { useClerk } from "@clerk/nextjs";
import MainButton from "./MainButton";

const CustomSignOut = () => {
  const { signOut } = useClerk();
  return (
    <MainButton small={true} onClick={() => signOut()}>
      Sign Out
    </MainButton>
  );
};

export default CustomSignOut;
