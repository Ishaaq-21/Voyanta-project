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
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const totalPages = useRef(Math.ceil(travelItems.length / GRID_ITEMS));

  const selectedList = travelItems.slice(
    (selectedPage - 1) * GRID_ITEMS,
    selectedPage * GRID_ITEMS
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
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        totalPages={totalPages.current}
      />
    </>
  );
};

export default PaginatedTravelCards;
