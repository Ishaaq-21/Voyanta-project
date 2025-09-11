import MainButton from "@/component/atoms/MainButton";
import { TourSecProps } from "@/Types/Types";
import Link from "next/link";

const Reviews = ({ tourData }: TourSecProps) => {
  return (
    // here I think I will get all the reviews that matches the tour id from the database than iterate over them and write details for each one
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            key={tourData.name}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col"
          >
            <div className="flex items-center mb-4">
              {/* <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                /> */}
              <div>
                <p className="font-bold">Review name</p>
                {/* <StarRating rating={rev.rating} /> */}
              </div>
            </div>
            <p className="text-gray-600 italic">"Goood"</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <MainButton as={Link} href={`/tours/reviews/${tourData._id}`}>
            See All Reviews
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
