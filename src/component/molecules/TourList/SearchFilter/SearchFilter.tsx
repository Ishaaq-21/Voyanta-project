"use client";
import React, { useEffect, useRef, useState } from "react";

// Using lucide-react for icons, which fits the clean aesthetic.
// You can install it with: npm install lucide-react
import FilterDropDown from "./FilterDropDown";
import SearchInput from "./SearchInput";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { TourType } from "@/Types/Types";

// I need to understand what happened here in details
const ToursSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );
  const [tourType, setTourType] = useState<TourType>(
    (searchParams.get("tourType") as TourType) || "all"
  );

  const prevParamsStr = useRef<string | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const prevParams = prevParamsStr.current;
    const currParams = JSON.stringify({ searchTerm, tourType });

    if (prevParams === currParams) {
      params.set("page", "1");
      prevParamsStr.current = currParams;
    }

    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }
    if (tourType) {
      params.set("tourType", tourType);
    } else {
      params.delete("tourType");
    }
    // Build new URL
    const newUrl = `${pathname}?${params.toString()}`;
    const currentUrl = `${pathname}?${searchParams.toString()}`;

    // Prevent redundant router.push when URLs are identical
    if (newUrl === currentUrl) return;

    const debounceId = setTimeout(() => {
      router.push(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(debounceId);
  }, [pathname, router, searchTerm, tourType]);
  return (
    <div className="flex justify-center items-center mb-16 font-sans px-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-3xl bg-white rounded-2xl md:rounded-full shadow-lg p-4 md:p-2 transition-all duration-300 focus-within:shadow-xl gap-3 md:gap-0">
        {/*Search Input */}
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Separator - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block border-l border-gray-400 h-8 mx-2"></div>

        {/* Horizontal line for mobile layout */}
        <hr className="w-full border-gray-100 md:hidden" />

        {/* Filter Dropdown */}
        <FilterDropDown tourType={tourType} setTourType={setTourType} />
      </div>
    </div>
  );
};

export default ToursSearch;
