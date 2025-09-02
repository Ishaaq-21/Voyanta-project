import StarIcon from "@/component/icons/StarIcon";

const CardFooter = () => {
  return (
    <div className="flex-between-center mt-6 pt-6 border-t border-gray-100">
      <div>
        <span className="text-lg font-bold text-gray-900">$649</span>
        <span className="text-gray-500 text-sm"> per person</span>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <StarIcon />
          4.7 <span className="ml-1">(8 reviews)</span>
        </div>
      </div>
      <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 transition-all duration-200 cursor-pointer">
        DETAILS
      </button>
    </div>
  );
};
export default CardFooter;
