"use client";
import Link from "next/link";
import PageBtn from "./NavBtn";
import { useSearchParams } from "next/navigation";

type NavButtonsProps = {
  currentPage: number;
  totalPages: number;
};

const NavButtons = ({ currentPage, totalPages }: NavButtonsProps) => {
  const searchParams = useSearchParams();

  const createNewPage = (pageNum: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNum));

    return `/?${params.toString()}`;
  };

  return (
    <div className="flex-center gap-5 w-fit  absolute left-1/2 -translate-x-1/2 -bottom-20">
      {totalPages > 0 && (
        <Link
          className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
            // this condition for disabling prevButton  when it
            currentPage <= totalPages && currentPage > 1
              ? "text-black"
              : "text-gray-400 pointer-events-none  "
          }`}
          href={createNewPage(currentPage - 1)}
        >
          {"<<"}
        </Link>
      )}
      {Array.from({ length: totalPages }).map((_, i) => {
        return <PageBtn key={i} btnOrder={i + 1} page={currentPage} />;
      })}
      {totalPages > 0 && (
        <Link
          className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
            totalPages && currentPage < totalPages
              ? "text-black"
              : "text-gray-400 pointer-events-none"
          }`}
          href={`${createNewPage(currentPage + 1)}`}
        >
          {">>"}
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
