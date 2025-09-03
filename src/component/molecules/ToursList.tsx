"use client";
import { useEffect, useState } from "react";
import Container from "./Container";
import { TourSimple } from "@/Types/Types";
import { getAllSimpleTravels } from "@/_lib/apiClient";
import TourCard from "./TourCard/TourCard";
import { v4 as uuidv4 } from "uuid";
const TourList = () => {
  const [tourList, setTourList] = useState<TourSimple[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const toursData = await getAllSimpleTravels();
      setTourList(toursData);
    };
    fetchTours();
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {tourList.length > 0 &&
          tourList.map((currTour) => {
            return <TourCard key={uuidv4()} tourElement={currTour} />;
          })}
      </div>
    </Container>
  );
};
export default TourList;
