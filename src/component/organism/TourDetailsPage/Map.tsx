// src/components/MapWithMarkers.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Location } from "@/Types/Types";

// IMPORTANT: Fix default icon paths for many bundlers / Next.js
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Correct the icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function MapWithMarkers({
  locations,
}: {
  locations: Location[];
}) {
  // ... rest of your component remains the same
  const center: [number, number] = locations.length
    ? [locations[0].coordinates[0], locations[0].coordinates[1]]
    : [51.505, -0.09];

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((l) => (
        <Marker
          key={l.description}
          position={[l.coordinates[0], l.coordinates[1]]}
        >
          <Popup>{l.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
