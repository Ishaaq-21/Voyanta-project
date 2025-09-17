// src/app/tours/[id]/page.tsx
// This component is designed for a dynamic route like /tours/the-forest-hiker

import type { FC } from "react";
import { Star } from "lucide-react";
import TourHero from "@/component/organism/TourDetailsPage/Hero";
import { Tour } from "@/Types/Types";
import ExpeditionSec from "@/component/organism/TourDetailsPage/Expedition";
import Gallery from "@/component/organism/TourDetailsPage/Gallery";
import Reviews from "@/component/organism/TourDetailsPage/Reviews";
import CTA from "@/component/organism/TourDetailsPage/CTA";
import { getDetailedTourById } from "@/_lib/apiClient";
import { notFound } from "next/navigation";

// --- DUMMY DATA ---
// In a real application, you would fetch this data based on the route's 'id' parameter.
// For example, using React Server Components, TanStack Query, or a useEffect hook.
const sampleTour: Tour = {
  startLocation: {
    description: "Central Park, New York City",
    type: "Point",
    coordinates: [-73.9654, 40.7829], // [longitude, latitude]
    address: "59th to 110th Street, Manhattan, NY, USA",
  },
  ratingsAverage: 4.8,
  ratingsQuantity: 126,
  images: [
    "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  ],
  startDates: [
    "2025-06-15T09:00:00.000Z",
    "2025-07-01T09:00:00.000Z",
    "2025-07-20T09:00:00.000Z",
  ],
  _id: "1",
  name: "The Forest Hiker",
  duration: 7,
  maxGroupSize: 15,
  difficulty: "medium",
  guides: ["guide_01", "guide_02"], // These could map to User IDs
  price: 997,
  summary:
    "A breathtaking week-long hike through dense forests and mountain trails.",
  description:
    "The Forest Hiker tour takes you deep into the heart of North America’s most pristine wilderness. Over seven days, you’ll explore ancient forests, cross crystal-clear rivers, and camp under the stars. Perfect for adventurers seeking a balance of challenge and tranquility.",
  imageCover: "/tours/forest-hike-cover.jpg",
  locations: [
    {
      _id: "loc_001",
      description: "Start point near Central Park",
      type: "Point",
      coordinates: [-73.9654, 40.7829],
      day: 1,
    },
    {
      _id: "loc_002",
      description: "Hudson Valley hiking trail",
      type: "Point",
      coordinates: [-74.006, 41.7],
      day: 3,
    },
    {
      _id: "loc_003",
      description: "Catskill Mountains camp",
      type: "Point",
      coordinates: [-74.15, 42.0],
      day: 5,
    },
  ],
};

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

const TourDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const tourData = await getDetailedTourById(id);
  if (!tourData) {
    notFound();
  }
  return (
    <div className="bg-slate-50 text-gray-800 relative">
      {/* 1. Hero Section */}
      <TourHero tourData={tourData} />

      <ExpeditionSec tourData={tourData} />

      <Gallery tourData={tourData} />

      {/* 5. Reviews Section */}
      <Reviews tourData={tourData} />

      {/* 6. CTA Section */}
      <CTA tourData={tourData} />
    </div>
  );
};

export default TourDetailsPage;
