// _lib/apiClient.ts

import fs from "fs/promises";
import path from "path";
import { TourSimple } from "@/Types/Types"; // Make sure to import your type

const sleep = new Promise((resolve) => setTimeout(resolve, 15000));

export async function getAllSimpleTravels({
  currPage,
  limit,
}: {
  currPage: number;
  limit: number;
}) {
  // Get the full path to the file.
  // process.cwd() points to the root of your Next.js project.
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

  const startIndex = (currPage - 1) * limit;
  const endIndex = currPage * limit;
  const paginatedList = dataArr.slice(startIndex, endIndex);

  return {
    toursList: paginatedList,
    totalPages: Math.ceil(dataArr.length / limit),
  };
}
