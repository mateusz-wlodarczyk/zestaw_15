import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import ChangeMapView from "./ChangeMapView";

export default function SimpleMap({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const mapRef = useRef(null);

  return (
    //dodac errorBoundary?
    <Box sx={{ width: "100%", height: "500px" }}>
      <MapContainer
        //@ts-ignore
        center={[latitude, longitude]}
        zoom={13}
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeMapView latitude={latitude} longitude={longitude} />

        <TileLayer
          //@ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Box>
  );
}
