import Container from "./Container";
import { TourSimple } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import SelectedTravels from "./SelectedTravels";

const TourList = async () => {
  const toursList: TourSimple[] = await getAllSimpleTravels();
  return (
    <Container>
      <SelectedTravels travelItems={toursList} />
    </Container>
  );
};
export default TourList;
