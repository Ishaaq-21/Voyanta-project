import Image from "next/image";
import { JSX } from "react";

const CardHeader = (): JSX.Element => {
  return (
    <div className="relative h-48">
      <Image
        className="w-full h-full object-cover"
        src={"/tours/tour-1-cover.jpg"}
        fill={true}
        alt="tour image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 z-10"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white z-20">
        <h1 className="text-3xl font-extrabold tracking-tight">THE MOUNTAIN</h1>
        <p className="text-2xl font-bold tracking-wide text-amber-300">BIKER</p>
      </div>
      <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        ADVENTURE
      </span>
    </div>
  );
};
export default CardHeader;
