import Container from "../Container";
import { TourSimple } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import TourCard from "./TourCard/TourCard";
import NavButtons from "./PaginatedTravels/NavigationButtons";

const GRID_ITEMS = 6;

const TourList = async ({ currPage }: { currPage: number }) => {
  console.log("searparams page :  ->   " + currPage); // what is the problem I keep getting undefined ? (the url page has /?page=somenumber)
  const { toursList, totalPages } = await getAllSimpleTravels({
    currPage,
    limit: GRID_ITEMS,
  });

  return (
    <Container>
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8 place-items-center mb-8">
        {toursList.length > 0 &&
          toursList.map((currTour: TourSimple) => {
            return <TourCard key={currTour.id} tourElement={currTour} />;
          })}
      </div>
      <NavButtons currentPage={currPage} totalPages={totalPages} />
    </Container>
  );
};
export default TourList;
