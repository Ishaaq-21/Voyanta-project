import PageBtn from "./NavBtn";

type NavButtonsProps = {
  selectedPage: number;
  setSelectedPage: (pageNum: number) => void;
  totalPages: number;
};

const NavButtons = ({
  selectedPage,
  setSelectedPage,
  totalPages,
}: NavButtonsProps) => {
  const handlePageClick = (btnPage: number) => {
    setSelectedPage(btnPage);
  };
  return (
    <div className="flex-center gap-5 w-fit  absolute left-1/2 -translate-x-1/2 bottom-4">
      <button
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          selectedPage <= totalPages && selectedPage > 1
            ? "text-black"
            : "text-gray-400"
        }`}
        onClick={() => setSelectedPage(selectedPage - 1)}
        disabled={!(selectedPage <= totalPages && selectedPage > 1)}
      >
        {"<<"}
      </button>
      {Array.from({ length: totalPages }).map((_, i) => {
        return (
          <PageBtn
            key={i}
            selectedPage={selectedPage}
            btnOrder={i + 1}
            handlePageClick={handlePageClick}
          />
        );
      })}
      <button
        className={`p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold ${
          selectedPage < totalPages ? "text-black" : "text-gray-400"
        }`}
        onClick={() => setSelectedPage(selectedPage + 1)}
        disabled={!(selectedPage < totalPages)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default NavButtons;
