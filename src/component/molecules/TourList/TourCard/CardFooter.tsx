import MainButton from "@/component/atoms/MainButton";
import StarIcon from "@/component/icons/StarIcon";
import Link from "next/link";

type CardFooterProps = {
  price: number;
  ratingPer: number;
  ratingQuantity: number;
  tourId: number;
};

const CardFooter = ({
  price,
  ratingPer,
  ratingQuantity,
  tourId,
}: CardFooterProps) => {
  return (
    <div className="flex-between-center mt-6 pt-6 border-t border-gray-100">
      <div>
        <span className="text-lg font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 text-sm"> per person</span>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <StarIcon />
          {ratingPer} <span className="ml-1">({ratingQuantity} reviews)</span>
        </div>
      </div>
      <MainButton
        as={Link}
        href={`/tours/${tourId}`}
        small={true}
        className="bg-gray-500"
      >
        DETAILS
      </MainButton>
    </div>
  );
};
export default CardFooter;
