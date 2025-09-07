"use client";
import { useRef, useState } from "react";
import TourCard from "../TourCard/TourCard";
import { TourSimple } from "@/Types/Types";
import NavButtons from "./NavigationButtons";

const GRID_ITEMS = 6;

const PaginatedTravelCards = ({
  travelItems,
}: {
  travelItems: TourSimple[];
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = useRef(Math.ceil(travelItems.length / GRID_ITEMS));

  const selectedList = travelItems.slice(
    (currentPage - 1) * GRID_ITEMS,
    currentPage * GRID_ITEMS
  );

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8 place-items-center mb-8">
        {selectedList.length > 0 &&
          selectedList.map((currTour) => {
            return <TourCard key={currTour.id} tourElement={currTour} />;
          })}
      </div>
      <NavButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages.current}
      />
    </>
  );
};

export default PaginatedTravelCards;
