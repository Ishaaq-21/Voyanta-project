import React from "react";

import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { TourSimple } from "@/Types/Types";

type TourCardProps = {
  tourElement: TourSimple;
};

function TourCard({ tourElement }: TourCardProps) {
  return (
    <div className=" w-full mx-auto bg-white rounded-xl shadow-[0px_0px_7px_black] overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_black]">
      <CardHeader
        imgCoverPath={tourElement.imageCover}
        cardTitle={tourElement.name}
      />
      <div className="card-body-container p-6">
        <CardBody tourBody={tourElement} />
        <CardFooter
          price={tourElement.price}
          ratingPer={tourElement.ratingsAverage}
          ratingQuantity={tourElement.ratingsQuantity}
          tourId={tourElement.id}
        />
      </div>
    </div>
  );
}

export default TourCard;
