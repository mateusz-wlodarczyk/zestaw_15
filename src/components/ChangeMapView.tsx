import React from "react";
import { useMap } from "react-leaflet";

export default function ChangeMapView({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const map = useMap();
  map.setView([latitude, longitude], map.getZoom());

  return null;
}
