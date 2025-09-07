import PageBtn from "./NavBtn";

type NavButtonsProps = {
  currentPage: number;
  setCurrentPage: (pageNum: number) => void;
  totalPages: number;
};

const NavButtons = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: NavButtonsProps) => {
  const handlePageClick = (btnPage: number) => {
    setCurrentPage(btnPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex-center gap-5 w-fit  absolute left-1/2 -translate-x-1/2 bottom-4">
      <button
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          // this condition for disabling prevButton  when it
          currentPage <= totalPages && currentPage > 1
            ? "text-black"
            : "text-gray-400"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={!(currentPage <= totalPages && currentPage > 1)}
      >
        {"<<"}
      </button>
      {Array.from({ length: totalPages }).map((_, i) => {
        return (
          <PageBtn
            key={i}
            currentPage={currentPage}
            btnOrder={i + 1}
            handlePageClick={handlePageClick}
          />
        );
      })}
      <button
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          currentPage < totalPages ? "text-black" : "text-gray-400"
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={!(currentPage < totalPages)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default NavButtons;
