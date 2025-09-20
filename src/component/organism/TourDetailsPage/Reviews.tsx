import { getReviewsByTourId, getUserById } from "@/_lib/apiClient";
import MainButton from "@/component/atoms/MainButton";
import type { Reviews, TourSecProps, User } from "@/Types/Types";
import Image from "next/image";
import Link from "next/link";

const Reviews = async ({ tourData }: TourSecProps) => {
  const tourReviews: Reviews[] = await getReviewsByTourId(tourData.id);

  return (
    <section className="py-12 md:py-24  -skew-y-5">
      <div className="container mx-auto px-4 skew-y-5">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent tracking-tight uppercase mb-5 mx-auto w-fit">
          {" "}
          Reviews
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourReviews.length > 0 &&
            tourReviews.map(async (review: Reviews) => {
              const user: User = await getUserById(review.user);
              return (
                <div
                  key={review._id}
                  className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-center"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <Image
                      src={`/users/${user.photo}`}
                      alt={`photo of ${user.photo}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <p className="font-bold flex align-center text-dark-primary h-fit mb-2">
                      {user.name}
                    </p>
                  </div>
                  <p className="text-gray-600 italic">" {review.review} "</p>
                </div>
              );
            })}
        </ul>
        <div className="text-center mt-12">
          <MainButton as={Link} href={`/tours/reviews/${tourData.id}`}>
            See All Reviews
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
