"use client";
import dynamic from "next/dynamic";
import { Location } from "@/Types/Types";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function MapWrapper({ locations }: { locations: Location[] }) {
  return <Map locations={locations} />;
}
