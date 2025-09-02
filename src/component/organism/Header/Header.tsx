import Image from "next/image";
import mainLogo from "../../../../public/logo-amber.png";
import Link from "next/link";
import Container from "../../molecules/Container";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobNav";
import NavBar from "./Nav";
const Header = () => {
  return (
    <header className="h-20 bg-gray-500">
      <Container flex={true} className="justify-between items-center">
        <Link href={"/"} className="relative w-40 md:w-52 h-10 md:h-12 ">
          <Image
            src={mainLogo}
            fill={true}
            className="object-cover"
            alt="Voyanta Logo"
          />
        </Link>
        <div className="register">
          <SignedOut>
            <NavBar />
            <MobileNav />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Container>
    </header>
  );
};
export default Header;
