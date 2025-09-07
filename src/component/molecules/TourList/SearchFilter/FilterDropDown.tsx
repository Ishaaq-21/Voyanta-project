import { ChevronDown, MapPin } from "lucide-react";

type TourType = "all" | "easy" | "medium" | "difficult";
type FilterDropDownType = {
  tourType: TourType;
  setTourType: (tourType: TourType) => void;
};
const tourTypes = [
  { value: "all", label: "All Types" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "difficult", label: "Difficult" },
];
const FilterDropDown = ({ tourType, setTourType }: FilterDropDownType) => {
  return (
    <div className="relative flex items-center w-full md:w-1/2">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>
      <select
        value={tourType}
        onChange={(e) => setTourType(e.target.value as TourType)}
        className="w-full appearance-none bg-transparent pl-10 pr-8 py-3 text-gray-700 font-medium border-none rounded-full focus:outline-none focus:ring-0 cursor-pointer"
        aria-label="Filter by tour type"
      >
        {tourTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
        <ChevronDown className="h-5 w-5" />
      </div>
    </div>
  );
};
export default FilterDropDown;
