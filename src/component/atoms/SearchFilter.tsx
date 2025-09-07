"use client";
import React, { useState } from "react";

// Using lucide-react for icons, which fits the clean aesthetic.
// You can install it with: npm install lucide-react
import { Search, ChevronDown, MapPin } from "lucide-react";

type TourType = "all" | "easy" | "medium" | "difficult";
const ToursSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tourType, setTourType] = useState<TourType>("all");

  // A more realistic set of filter options
  const tourTypes = [
    { value: "all", label: "All Types" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "difficult", label: "Difficult" },
  ];

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the search logic,
    // like sending a request to your backend.
    console.log(`Searching for: "${searchTerm}"`, `Type: "${tourType}"`);
  };

  return (
    <div className="flex justify-center items-center mb-16 font-sans px-4">
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col md:flex-row items-center w-full max-w-3xl bg-white rounded-2xl md:rounded-full shadow-lg p-4 md:p-2 transition-all duration-300 focus-within:shadow-xl gap-3 md:gap-0"
      >
        {/* Search Input */}
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value as string)}
            className="w-full bg-transparent pl-12 pr-4 py-3 text-gray-700 placeholder-gray-500 border-none rounded-full focus:outline-none focus:ring-0"
            placeholder="Search destinations or activities..."
          />
        </div>

        {/* Separator - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block border-l border-gray-200 h-8 mx-2"></div>

        {/* Horizontal line for mobile layout */}
        <hr className="w-full border-gray-100 md:hidden" />

        {/* Filter Dropdown */}
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

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto md:ml-2 bg-primary hover:bg-dark-primary transition duration-300 text-white font-semibold uppercase tracking-wider px-8 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
          style={{ letterSpacing: "0.05em" }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ToursSearch;
