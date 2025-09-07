import Link from "next/link";
import PageBtn from "./NavBtn";

type NavButtonsProps = {
  currentPage: number;
  totalPages: number;
};

const NavButtons = ({ currentPage, totalPages }: NavButtonsProps) => {
  return (
    <div className="flex-center gap-5 w-fit  absolute left-1/2 -translate-x-1/2 bottom-4">
      <Link
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          // this condition for disabling prevButton  when it
          currentPage <= totalPages && currentPage > 1
            ? "text-black"
            : "text-gray-400 pointer-events-none  "
        }`}
        href={`/?page=${currentPage - 1}`}
      >
        {"<<"}
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => {
        return <PageBtn key={i} btnOrder={i + 1} page={currentPage} />;
      })}
      <Link
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          currentPage < totalPages
            ? "text-black"
            : "text-gray-400 pointer-events-none"
        }`}
        href={`/?page=${currentPage + 1}`}
      >
        {">>"}
      </Link>
    </div>
  );
};

export default NavButtons;
