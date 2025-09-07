type PageBtnProps = {
  currentPage: number | null;
  btnOrder: number;
  handlePageClick: (btnOrder: number) => void;
};
const PageBtn = ({ currentPage, btnOrder, handlePageClick }: PageBtnProps) => {
  const btnClass =
    "p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold";
  return (
    <button
      onClick={() => handlePageClick(btnOrder)}
      className={`${btnClass} ${
        currentPage === btnOrder
          ? "border-dark-primary text-dark-primary border-2 "
          : "border-black border-1"
      }`}
    >
      {btnOrder}
    </button>
  );
};

export default PageBtn;
