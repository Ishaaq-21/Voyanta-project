import { TourSecProps } from "@/Types/Types";

const ExpeditionSec = ({ tourData }: TourSecProps) => {
  return (
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
            {tourData.description}
          </div>
        </div>

        {/* Right Column: Guides */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
            Your Field Experts
          </h3>
          {tourData.guides.map((guide) => (
            <div key={guide} className="flex items-center space-x-4">
              {/* here since I will store just the id of the guides in the guides arr, I will call for each one from the database than writes its data */}
              {/* I need to place a photo image for the user */}
              <div>
                <p className="font-bold text-lg text-white">Guide Name</p>
                <p className="text-primary">Camper</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpeditionSec;
