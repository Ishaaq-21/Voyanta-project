import LocationIcon from "../../icons/LocationIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import StopsIcon from "../../icons/StopsIcon";
import PeopleIcon from "../../icons/PeopleIcon";

const CardBody = () => {
  return (
    <>
      <div className="flex items-center text-gray-500 mb-2 text-sm">
        <span className="font-semibold text-amber-500 mr-1">MEDIUM</span> 15-DAY
        TOUR
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        Experience exhilarating bicycle rides over rough terrain in the scenic
        Manali-Leh region during the chilling winter.
      </p>

      <div className="grid grid-cols-2 gap-y-4 mb-6">
        <div className="flex items-center text-gray-700 text-sm">
          <LocationIcon />
          Manali, IND
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <CalendarIcon />
          September 2023
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <StopsIcon />5 stops
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <PeopleIcon />
          20 people
        </div>
      </div>
    </>
  );
};
export default CardBody;
