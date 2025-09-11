// src/app/tours/[id]/page.tsx
// This component is designed for a dynamic route like /tours/the-forest-hiker

import type { FC } from "react";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  Mountain,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// --- DUMMY DATA ---
// In a real application, you would fetch this data based on the route's 'id' parameter.
// For example, using React Server Components, TanStack Query, or a useEffect hook.
const tourData = {
  id: "forest-hiker",
  name: "The Forest Hiker",
  location: "Banff National Park, CAN",
  duration: 5,
  heroImage:
    "https://images.unsplash.com/photo-1507525428034-b723a996f6ea?q=80&w=2070&auto=format&fit=crop",
  quickFacts: {
    nextDate: "June 2026",
    difficulty: "Easy",
    participants: 25,
    rating: 4.7,
    reviewsCount: 54,
  },
  description: [
    "Embark on a breathtaking adventure through the heart of the Canadian Rockies. The Forest Hiker tour is a 5-day journey designed for those who want to experience the raw beauty of Banff National Park without extreme physical demands. From turquoise glacial lakes to towering peaks, this tour is a feast for the senses.",
    "Our expert guides will lead you on scenic trails, share stories of the local flora and fauna, and ensure your comfort and safety. You will witness iconic landscapes, including Lake Louise and Moraine Lake, and create memories that will last a lifetime. This trip is perfect for families, solo travelers, and anyone with a love for the great outdoors.",
  ],
  guides: [
    {
      name: "Liam Carter",
      role: "Lead Guide",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Olivia Chen",
      role: "Tour Guide",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
  ],
  itinerary: [
    { day: 1, name: "Arrival in Banff", coords: { top: "50%", left: "30%" } },
    {
      day: 2,
      name: "Lake Louise & Moraine Lake",
      coords: { top: "40%", left: "55%" },
    },
    {
      day: 3,
      name: "Johnston Canyon Hike",
      coords: { top: "65%", left: "70%" },
    },
  ],
  reviews: [
    {
      name: "Ayla Cornell",
      review:
        "The scenery was absolutely surreal. The guides were knowledgeable and made the experience unforgettable. Highly recommended!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Eliana Stout",
      review:
        "A well-organized tour with a perfect balance of hiking and relaxation. The views were worth every step. Can't wait to book another trip!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Cristian Vega",
      review:
        "I enjoyed the tour, but I wish the pace was a bit faster on the second day. Overall, a great experience with stunning landscapes.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ],
  price: 397,
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

const TourDetailsPage: FC = () => {
  // In a real Next.js app, you might get the tour data like this:
  // const { id } = params;
  // const tourData = await getTourById(id);

  return (
    <div className="bg-slate-50 text-gray-800 relative">
      {/* 1. Hero Section */}
      <section className="flex-center  h-[calc(100vh-80px)] flex-center text-white p-4">
        {/* Background Image & Overlay */}
        <div className="absolute -top-[70px] w-full h-[100vh] -skew-y-5">
          <Image
            src={tourData.gallery[0]}
            alt="Mountain landscape"
            className="w-full h-full object-cover"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-brightness-75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8">
          <div>
            <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-primary">
              The {tourData.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-white font-medium">
              An Unforgettable Journey into the Wild
            </p>
          </div>

          {/* Mission Briefing / Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <p className="text-3xl font-bold">
                {tourData.quickFacts.rating}
                <span className="text-xl">/5</span>
              </p>
              <p className="text-sm uppercase tracking-widest text-primary">
                Rating
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <p className="text-3xl font-bold">
                {tourData.quickFacts.participants}
              </p>
              <p className="text-sm uppercase tracking-widest text-primary">
                Group Size
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <p className="text-3xl font-bold">
                {tourData.quickFacts.difficulty}
              </p>
              <p className="text-sm uppercase tracking-widest text-primary">
                Difficulty
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <p className="text-3xl font-bold">
                {new Date(tourData.quickFacts.nextDate).toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric" }
                )}
              </p>
              <p className="text-sm uppercase tracking-widest text-primary">
                Next Trip
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-slate-300 py-20 md:py-28">
        <div className="absolute inset-0 w-full h-full bg-slate-900 -skew-y-5 bg-slate-900 "></div>{" "}
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-primary bg-clip-text text-transparent">
                The Expedition
              </span>
            </h2>
            <div className="prose prose-xl prose-invert max-w-none text-slate-300 space-y-5">
              {tourData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          {/* Right Column: Guides */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
              Your Field Experts
            </h3>
            {tourData.guides.map((guide) => (
              <div key={guide.name} className="flex items-center space-x-4">
                <img
                  src={guide.avatar}
                  alt={guide.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-slate-700"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div>
                  <p className="font-bold text-lg text-white">{guide.name}</p>
                  <p className="text-primary">{guide.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text   text-transparent tracking-tight uppercase">
              Field Notes & Gallery
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of waypoints, sights, and moments captured from the
              trail.
            </p>
          </div>

          {/* Masonry-style Scrapbook Grid */}
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Itinerary Day 1 */}
            <div className="bg-white border-14 border-gray-500 p-6 rounded-lg shadow-lg transform lg:rotate-1">
              <p className="font-mono text-sm text-lime-600">DAY 01</p>
              <h4 className="text-xl font-bold text-slate-800 mt-1">
                {tourData.itinerary[0].name}
              </h4>
              <p className="mt-2 text-slate-600">
                {tourData.itinerary[0].description}
              </p>
            </div>
            {/* Gallery Image 1 */}
            <div className="bg-dark-primary p-3 rounded-md shadow-2xl transform lg:-rotate-2">
              <img
                src={tourData.gallery[1]}
                alt="Gallery image 2"
                className="rounded-sm"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Itinerary Day 2 */}
            <div className="bg-white border-14 border-gray-500 p-6  rounded-lg shadow-lg">
              <p className="font-mono text-sm text-lime-600">DAY 02</p>
              <h4 className="text-xl font-bold text-slate-800 mt-1">
                {tourData.itinerary[1].name}
              </h4>
              <p className="mt-2 text-slate-600">
                {tourData.itinerary[1].description}
              </p>
            </div>
            {/* Gallery Image 2 */}
            <div className="md:col-span-2 lg:col-span-1 bg-dark-primary p-3 rounded-md shadow-2xl transform lg:rotate-2">
              <img
                src={tourData.gallery[2]}
                alt="Gallery image 3"
                className="rounded-sm"
              />
            </div>
            {/* Map Snippet */}
            <div className="bg-white border-14 border-gray-500 p-6 rounded-lg shadow-lg">
              <p className="font-mono text-sm text-lime-600">AREA MAP</p>
              <h4 className="text-xl font-bold text-slate-800 mt-1">
                Route Overview
              </h4>
              <div className="mt-3 rounded-md overflow-hidden border-4 border-slate-200">
                <img src="/tours/tour-1cover.jpg" alt="Map snippet" />
              </div>
            </div>
            {/* Gallery Image 3 */}
            <div className="bg-dark-primary p-3 rounded-md shadow-2xl transform lg:-rotate-1">
              <img
                src="/tours/tour-1cover.jpg"
                className="rounded-sm bg-slate-800 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 5. Reviews Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-amber-500 text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300">
              See All Reviews
            </button>
          </div>
        </div>
      </section>
      {/* 6. CTA Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-slate-800 text-white p-8 md:p-12 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">
                What are you waiting for?
              </h2>
              <p className="mt-2 text-slate-300">
                {tourData.duration} days. 1 adventure. Infinite memories. Make
                it yours today!
              </p>
            </div>
            <button className="mt-6 md:mt-0 bg-amber-500 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300 shrink-0">
              Book Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetailsPage;
