import { TourSecProps } from "@/Types/Types";

const CTA = ({ tourData }: TourSecProps) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-slate-800 text-white p-8 md:p-12 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              What are you waiting for?
            </h2>
            <p className="mt-2 text-slate-300">
              {tourData.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-amber-500 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300 shrink-0">
            Book Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
