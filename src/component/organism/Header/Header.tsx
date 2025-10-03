import Image from "next/image";
import mainLogo from "../../../../public/logo-amber.png";
import Link from "next/link";
import Container from "../../molecules/Container";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import MobileNav from "./MobNav";
import NavBar from "./Nav";
import MainButton from "@/component/atoms/MainButton";
import CustomSignOut from "@/component/atoms/CustomSignOut";
const Header = () => {
  return (
    <header className="h-20 bg-gray-500 relative z-50">
      <Container flex={true} className="justify-between items-center">
        <Link href={"/"} className="relative w-40 md:w-52 h-10 md:h-12 ">
          <Image
            src={mainLogo}
            fill={true}
            className="object-cover"
            alt="Voyanta Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        <div className="register">
          <SignedOut>
            <NavBar />
            <MobileNav />
          </SignedOut>
          <SignedIn>
            <MainButton as={Link} href={"/dashboard/user-profile"} small={true}>
              Profile
            </MainButton>
            <CustomSignOut />
          </SignedIn>
        </div>
      </Container>
    </header>
  );
};
export default Header;
