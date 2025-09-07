import { Search } from "lucide-react";

type searchInputType = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};
const SearchInput = ({ searchTerm, setSearchTerm }: searchInputType) => {
  return (
    <div className="relative flex-grow w-full">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        className="w-full bg-transparent pl-12 pr-4 py-3 text-gray-700 placeholder-gray-500 border-none rounded-full focus:outline-none focus:ring-0"
        placeholder="Search destinations or activities..."
      />
    </div>
  );
};
export default SearchInput;
