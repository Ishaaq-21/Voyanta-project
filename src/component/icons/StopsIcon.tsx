import React from "react";

const StopsIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-5 h-5 text-gray-500 mr-2 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-11v4m0 0l-2-2m2 2l2-2"
    ></path>
  </svg>
);

export default StopsIcon;
