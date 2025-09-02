import React from "react";

import Image from "next/image";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

// --- Main Card Component ---
// The main component that brings everything together.
// This is the default export.
function TourCard() {
  // In a real application, this component would be placed within a layout
  // that provides the gray background color. This wrapper div simulates that.
  return (
    <div
      className="bg-[#f0f2f5]  flex justify-center items-center p-2 rounded-xl"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_7px_black]">
        <CardHeader />
        <div className="card-body-container p-6">
          <CardBody />
          <CardFooter />
        </div>
      </div>
    </div>
  );
}

export default TourCard;
