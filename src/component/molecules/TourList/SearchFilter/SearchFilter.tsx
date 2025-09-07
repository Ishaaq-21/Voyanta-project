"use client";
import React, { useState } from "react";

// Using lucide-react for icons, which fits the clean aesthetic.
// You can install it with: npm install lucide-react
import FilterDropDown from "./FilterDropDown";
import SearchInput from "./SearchInput";
import { usePathname, useSearchParams } from "next/navigation";

type TourType = "all" | "easy" | "medium" | "difficult";

const ToursSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tourType, setTourType] = useState<TourType>("all");

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center mb-16 font-sans px-4">
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col md:flex-row items-center w-full max-w-3xl bg-white rounded-2xl md:rounded-full shadow-lg p-4 md:p-2 transition-all duration-300 focus-within:shadow-xl gap-3 md:gap-0"
      >
        {/* Separator - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block border-l border-gray-200 h-8 mx-2"></div>

        {/* Horizontal line for mobile layout */}
        <hr className="w-full border-gray-100 md:hidden" />

        {/*Search Input */}
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Filter Dropdown */}
        <FilterDropDown tourType={tourType} setTourType={setTourType} />

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto md:ml-2 bg-primary hover:bg-dark-primary transition duration-300 text-white font-semibold uppercase tracking-wider px-8 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
          style={{ letterSpacing: "0.05em" }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ToursSearch;
