import Image from "next/image";
import mainLogo from "../../../public/logo-amber.png";
import MainButton from "../atoms/MainButton";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import Container from "./Container";

const Header = () => {
  return (
    <header className="h-24 bg-gray-500">
      <Container flex={true} className="justify-between items-center">
        <Link href={"/"} className="relative w-44 md:w-60 h-10 md:h-12 ">
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
      </Container>
    </header>
  );
};
export default Header;
