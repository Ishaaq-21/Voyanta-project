import LocationIcon from "../../icons/LocationIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import StopsIcon from "../../icons/StopsIcon";
import PeopleIcon from "../../icons/PeopleIcon";
import { TourSimple } from "@/Types/Types";
import { monthYearDate } from "@/utils/dateUtils/Date";

type CardBodyProps = {
  tourBody: TourSimple;
};
const CardBody = ({ tourBody }: CardBodyProps) => {
  const {
    difficulty,
    duration,
    summary,
    startLocation,
    startDates,
    stops,
    maxGroupSize,
  } = tourBody;
  return (
    <>
      <div className="flex items-center text-gray-500 mb-2 text-sm">
        <span className="font-semibold text-amber-500 mr-1">
          {difficulty.toUpperCase()}
        </span>{" "}
        {duration}-DAY TOUR
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{summary}</p>

      <div className="grid grid-cols-2 gap-y-4 mb-6">
        <div className="flex items-center text-gray-700 text-sm">
          <LocationIcon />
          {startLocation}
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <CalendarIcon />
          {monthYearDate(startDates[0])}
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <StopsIcon />
          {stops} stops
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <PeopleIcon />
          {maxGroupSize} people
        </div>
      </div>
    </>
  );
};
export default CardBody;
