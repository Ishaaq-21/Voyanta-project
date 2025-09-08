"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PageBtnProps = {
  btnOrder: number;
  page: number;
};
const PageBtn = ({ btnOrder, page }: PageBtnProps) => {
  const btnClass =
    "p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-400 transition duration-300 rounded-full text-base font-bold";
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const params = new URLSearchParams(query);

  params.delete("page");
  return (
    <Link
      className={`${btnClass} ${
        page === btnOrder
          ? "border-dark-primary text-dark-primary border-2 "
          : "border-black border-1"
      }`}
      href={`/?page=${btnOrder}${
        params.toString() != "" ? `&${params.toString()}` : ""
      }`}
    >
      {btnOrder}
    </Link>
  );
};

export default PageBtn;
