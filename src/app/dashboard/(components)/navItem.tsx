"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icons";

const NavItem = ({ icon, label, href = "" }) => {
  const currPathName = usePathname();

  return (
    <li className="w-full">
      <Link
        href={`/dashboard/${href}`}
        className={`flex items-center space-x-4 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out ${
          currPathName.includes(href)
            ? "bg-gray-900/50 border-l-4 border-amber-400 text-white"
            : ""
        }`}
      >
        <Icon name={icon} className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
