import Image from "next/image";
import { JSX } from "react";

type CardHeaderProps = {
  imgCoverPath: string;
  cardTitle: string;
};

const devideTitle = (cardTitle: string) => {
  const titleWords = cardTitle.split(" ");

  const firstPart = titleWords.slice(0, 2).join(" ");
  const secondPart = titleWords.slice(2).join(" ");
  return { firstPart, secondPart };
};
const CardHeader = ({
  imgCoverPath,
  cardTitle,
}: CardHeaderProps): JSX.Element => {
  const { firstPart, secondPart } = devideTitle(cardTitle);
  return (
    <div className="relative h-48">
      <Image
        className="w-full h-full object-cover"
        src={`/tours/${imgCoverPath}`}
        fill={true}
        alt="tour image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 z-10"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white z-20">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {firstPart.toUpperCase()}
        </h1>
        <p className="text-2xl font-bold tracking-wide text-amber-300">
          {secondPart.toUpperCase()}
        </p>
      </div>
      <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        ADVENTURE
      </span>
    </div>
  );
};
export default CardHeader;
