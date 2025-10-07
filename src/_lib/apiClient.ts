// _lib/apiClient.ts

import { TourSimple, TourType, Tour, Reviews, User } from "@/Types/Types";
import fs from "fs/promises";
import path from "path";

export async function getAllSimpleTravels({
  currPage,
  searchTerm,
  tourType,
  limit,
}: {
  currPage: number;
  searchTerm: string;
  tourType: TourType;
  limit: number;
}) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    "Data",
    "tours-simple.json"
  );
  // Read the file's contents from the disk.
  const jsonData = await fs.readFile(filePath, "utf8");

  // Parse the JSON string into a JavaScript object.
  const dataArr = JSON.parse(jsonData);
  let filterArr: TourSimple[] = [];

  if (searchTerm !== "") {
    filterArr = dataArr.filter((tour: TourSimple) => {
      return tour.name
        .toLocaleLowerCase()
        .startsWith(searchTerm.toLocaleLowerCase());
    });
  } else filterArr = dataArr;

  if (tourType !== "all") {
    filterArr = filterArr.filter((filteredTour: TourSimple) => {
      return filteredTour.difficulty === tourType;
    });
  }

  const startIndex = (currPage - 1) * limit;
  const endIndex = currPage * limit;
  const paginatedList = filterArr.slice(startIndex, endIndex);

  return {
    toursList: paginatedList,
    totalPages: Math.ceil(filterArr.length / limit),
  };
}

export const getDetailedTourById = async (id: string) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    "Data",
    "tours.json"
  );
  // Read the file's contents from the disk.
  const jsonData = await fs.readFile(filePath, "utf8");

  // Parse the JSON string into a JavaScript object.
  const dataArr = JSON.parse(jsonData);
  const tourData = dataArr.find((tourElement: Tour) => {
    return String(tourElement.id) === id;
  });

  if (!tourData) return null;

  return tourData;
};

export const getReviewsByTourId = async (tourId: string, all = false) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    "Data",
    "reviews.json"
  );
  // Read the file's contents from the disk.
  const jsonData = await fs.readFile(filePath, "utf8");

  // Parse the JSON string into a JavaScript object.
  const reviewsDataArr = JSON.parse(jsonData);
  const tourReviews = reviewsDataArr.filter(
    (review: Reviews) => review.tour === tourId
  );

  return all ? tourReviews : tourReviews.slice(0, 6);
};

export const getUserById = async (userId: string) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    "Data",
    "users.json"
  );
  // Read the file's contents from the disk.
  const jsonData = await fs.readFile(filePath, "utf8");
  const usersDataArr = JSON.parse(jsonData);

  const user = usersDataArr.find((user: User) => user._id === userId);

  return user;
};
