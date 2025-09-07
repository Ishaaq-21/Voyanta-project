import Link from "next/link";

type PageBtnProps = {
  btnOrder: number;
  page: number;
};
const PageBtn = ({ btnOrder, page }: PageBtnProps) => {
  const btnClass =
    "p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold";

  return (
    <Link
      className={`${btnClass} ${
        page === btnOrder
          ? "border-dark-primary text-dark-primary border-2 "
          : "border-black border-1"
      }`}
      href={`/?page=${btnOrder}`}
    >
      {btnOrder}
    </Link>
  );
};

export default PageBtn;
