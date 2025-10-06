// src/app/tours/[id]/page.tsx
// This component is designed for a dynamic route like /tours/the-forest-hiker
import TourHero from "@/component/organism/TourDetailsPage/Hero";
import ExpeditionSec from "@/component/organism/TourDetailsPage/Expedition";
import Gallery from "@/component/organism/TourDetailsPage/Gallery";
import Reviews from "@/component/organism/TourDetailsPage/Reviews";
import { getDetailedTourById } from "@/_lib/apiClient";
import { notFound } from "next/navigation";
import MapWrapper from "@/component/organism/TourDetailsPage/MapWrapper";

export function generateStaticParams() {
  return [
    { tourId: "1" },
    { tourId: "2" },
    { tourId: "3" },
    { tourId: "4" },
    { tourId: "5" },
    { tourId: "6" },
    { tourId: "7" },
    { tourId: "8" },
    { tourId: "9" },
    { tourId: "10" },
  ];
}

const TourDetailsPage = async ({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) => {
  const { tourId } = await params;

  const tourData = await getDetailedTourById(tourId);
  if (!tourData) {
    notFound();
  }
  return (
    <div className="bg-slate-50 text-gray-800 relative">
      {/* 1. Hero Section */}
      <TourHero tourData={tourData} />

      <ExpeditionSec tourData={tourData} />

      <Gallery tourData={tourData} />

      <MapWrapper locations={tourData.locations} />

      {/* 5. Reviews Section */}
      <Reviews tourData={tourData} />
    </div>
  );
};

export default TourDetailsPage;
