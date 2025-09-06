"use client";
import { useRef, useState } from "react";
import TourCard from "./TourCard/TourCard";
import { TourSimple } from "@/Types/Types";

const GRID_ITEMS = 6;

const SelectedTravels = ({ travelItems }: { travelItems: TourSimple[] }) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const totalPages = useRef(Math.ceil(travelItems.length / GRID_ITEMS));

  const selectedList = travelItems.slice(
    (selectedPage - 1) * GRID_ITEMS,
    selectedPage * GRID_ITEMS
  );
  const handlePageClick = (btnPage: number) => {
    setSelectedPage(btnPage);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-6">
        {selectedList.length > 0 &&
          selectedList.map((currTour) => {
            return <TourCard key={currTour.id} tourElement={currTour} />;
          })}
      </div>
      <div className="flex-center gap-5 w-fit  mt-5 absolute left-1/2 -translate-x-1/2 bottom-4">
        {Array.from({ length: totalPages.current }).map((_, i) => {
          return (
            <PageBtn
              key={i}
              selectedPage={selectedPage}
              btnOrder={i + 1}
              handlePageClick={handlePageClick}
            />
          );
        })}
      </div>
    </>
  );
};

type PageBtnProps = {
  selectedPage: number | null;
  btnOrder: number;
  handlePageClick: (btnOrder: number) => void;
};
const PageBtn = ({ selectedPage, btnOrder, handlePageClick }: PageBtnProps) => {
  const btnClass =
    "p-3 flex-center cursor-pointer w-10 h-10 hover:bg-gray-200 transition duration-300 rounded-full text-base font-bold";
  return (
    <button
      onClick={() => handlePageClick(btnOrder)}
      className={`${btnClass} ${
        selectedPage === btnOrder
          ? "border-dark-primary text-dark-primary border-2 "
          : "border-black border-1"
      }`}
    >
      {btnOrder}
    </button>
  );
};

export default SelectedTravels;
