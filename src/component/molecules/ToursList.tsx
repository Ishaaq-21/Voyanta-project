import Container from "./Container";
import { TourSimple } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import TourCard from "./TourCard/TourCard";

const TourList = async () => {
  const toursList: TourSimple[] = await getAllSimpleTravels();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {toursList.length > 0 &&
          toursList.map((currTour) => {
            return <TourCard key={currTour.id} tourElement={currTour} />;
          })}
      </div>
    </Container>
  );
};
export default TourList;
