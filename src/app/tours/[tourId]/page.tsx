// src/app/tours/[id]/page.tsx
// This component is designed for a dynamic route like /tours/the-forest-hiker

import type { FC } from "react";
import { Star } from "lucide-react";
import TourHero from "@/component/organism/TourDetailsPage/Hero";
import ExpeditionSec from "@/component/organism/TourDetailsPage/Expedition";
import Gallery from "@/component/organism/TourDetailsPage/Gallery";
import Reviews from "@/component/organism/TourDetailsPage/Reviews";
import CTA from "@/component/organism/TourDetailsPage/CTA";
import { getDetailedTourById } from "@/_lib/apiClient";
import { notFound } from "next/navigation";
import MapWrapper from "@/component/organism/TourDetailsPage/MapWrapper";

// --- REUSABLE SUB-COMPONENTS ---

// A small utility for rendering star ratings
const StarRating: FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center text-amber-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
      ))}
      {halfStar && (
        <Star
          key="half"
          className="w-4 h-4 fill-current"
          style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
        />
      ))}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const TourDetailsPage = async ({ params }: { params: { tourId: string } }) => {
  const { tourId } = params;

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

      {/* 6. CTA Section */}
      <CTA tourData={tourData} />
    </div>
  );
};

export default TourDetailsPage;
