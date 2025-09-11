import { TourSecProps } from "@/Types/Types";
import Image from "next/image";

const TourHero = ({ tourData }: TourSecProps) => {
  return (
    <section className="flex-center  h-[calc(100vh-80px)] flex-center text-white p-4">
      {/* Background Image & Overlay */}
      <div className="absolute -top-[70px] w-full h-[100vh] -skew-y-5">
        <Image
          src={tourData.images[0]}
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
              {tourData.ratingsAverage}
              <span className="text-xl">/5</span>
            </p>
            <p className="text-sm uppercase tracking-widest text-primary">
              Rating
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <p className="text-3xl font-bold">{tourData.maxGroupSize}</p>
            <p className="text-sm uppercase tracking-widest text-primary">
              Group Size
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <p className="text-3xl font-bold">{tourData.difficulty}</p>
            <p className="text-sm uppercase tracking-widest text-primary">
              Difficulty
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <p className="text-3xl font-bold">
              {new Date(tourData.startDates[0]).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="text-sm uppercase tracking-widest text-primary">
              Next Trip
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHero;
