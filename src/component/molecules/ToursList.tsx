import Container from "./Container";
import { TourSimple } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import PaginatedTravelCards from "./PaginatedTravelCards";

const TourList = async () => {
  const toursList: TourSimple[] = await getAllSimpleTravels();
  return (
    <Container>
      <PaginatedTravelCards travelItems={toursList} />
    </Container>
  );
};
export default TourList;
