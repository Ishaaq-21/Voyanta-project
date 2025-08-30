import Image from "next/image";
import { JSX } from "react";
import mainLogo from "../../../public/logo-amber.png";
import Container from "./Container";
import Link from "next/link";

const footLinks = [
  { label: "About us", href: "https://isaaq-hk.is-a.dev/" },
  { label: "Contact", href: "/" },
  { label: "Become A Guide", href: "/" },
];
const Footer = (): JSX.Element => {
  return (
    <footer className="md:h-24 bg-gray-500 ">
      <Container
        flex={true}
        className="flex-col gap-y-3 md:gap-y-0 py-3 md:py-0 md:flex-row  justify-between items-center"
      >
        <div className="main-logo ">
          <div className=" relative w-44 md:w-60 h-10 md:h-12">
            <Image
              src={mainLogo}
              fill={true}
              className="object-cover"
              alt="main Logo"
            />
          </div>
        </div>
        <div className="sub-info">
          <ul className="links mb-3 flex justify-center md:justify-start items-center gap-x-6">
            {" "}
            {footLinks.map((link) => {
              return (
                <Link
                  className="font-semibold text-sm text-white hover:text-primary transition duration-300"
                  key={link.label}
                  href={link.href}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>
          <div className="text-sm  text-white/80 text-center">
            © 2025 Voyanta. All rights reserved. Created by Isaac Hk
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
