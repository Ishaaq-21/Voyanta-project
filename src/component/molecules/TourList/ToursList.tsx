import Container from "../Container";
import { TourSimple, TourType } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import TourCard from "./TourCard/TourCard";
import NavButtons from "./PaginatedTravels/NavigationButtons";

const GRID_ITEMS = 6;

type tourListProps = {
  currPage: number;
  searchTerm: string;
  tourType: TourType;
};

const TourList = async ({ currPage, searchTerm, tourType }: tourListProps) => {
  const { toursList, totalPages } = await getAllSimpleTravels({
    currPage,
    searchTerm,
    tourType,
    limit: GRID_ITEMS,
  });

  return (
    <Container className="relative">
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8 place-items-center mb-8">
        {toursList.length > 0 ? (
          toursList.map((currTour: TourSimple) => {
            return <TourCard key={currTour.id} tourElement={currTour} />;
          })
        ) : (
          <p className="text-gray-500 text-center text-xl col-span-full ">
            No journeys matched your search this time. Adventure is still out
            there—try different Name or Type!
          </p>
        )}
      </div>
      <NavButtons currentPage={currPage} totalPages={totalPages} />
    </Container>
  );
};
export default TourList;
