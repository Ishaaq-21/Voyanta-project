import { TourSecProps } from "@/Types/Types";
import Image from "next/image";

const Gallery = ({ tourData }: TourSecProps) => {
  return (
    <section className="bg-slate-100 py-20 md:py-28 relative  -skew-y-5  ">
      <div className="container mx-auto px-4 relative skew-y-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text   text-transparent tracking-tight uppercase">
            Field Notes & Gallery
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto ">
            A collection of waypoints, sights, and moments captured from the
            trail.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourData.images.map((imgPath, index) => {
            return (
              <div
                key={imgPath}
                className={`p-3 rounded-md shadow-2xl transform  h-52 overflow-hidden ${
                  index % 2 === 0
                    ? "bg-slate-800 lg:-rotate-3"
                    : "bg-dark-primary lg:rotate-3"
                }`}
              >
                <Image
                  src={`/tours/${imgPath}`}
                  alt={imgPath}
                  className="w-full h-full object-cover"
                  fill={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
