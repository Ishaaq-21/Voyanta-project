import Image from "next/image";
import mainLogo from "../../../public/logo-amber.png";
import MainButton from "./Reusable-UI/Button";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-24 bg-gray-500">
      <div className="container h-full mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link href={"/"} className="relative w-42 md:w-60 h-10 md:h-12">
          <Image
            src={mainLogo}
            fill={true}
            className="object-cover"
            alt="main Logo"
          />
        </Link>
        <div className="hidden md:block register flex items-center justify-center">
          <MainButton buttonName="Login" />
          <MainButton buttonName="Sign-up" />
        </div>
        <FaUser className="block md:hidden h-8 w-8 text-primary" />
      </div>
    </header>
  );
};
export default Header;
