import TourList from "@/component/molecules/TourList/ToursList";
import ToursSearch from "@/component/molecules/TourList/SearchFilter/SearchFilter";
import { TourType } from "@/Types/Types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
    tourType?: TourType;
  }>;
}) {
  const searchParamsRes = await searchParams;
  const page = Number(searchParamsRes.page) || 1;
  const searchTerm = searchParamsRes.searchTerm || "";
  const tourType = searchParamsRes.tourType || "all";

  return (
    <>
      <main className="min-h-[calc(100vh-176px)] relative pt-16 pb-20">
        <ToursSearch />
        <TourList currPage={page} searchTerm={searchTerm} tourType={tourType} />
      </main>
    </>
  );
}
