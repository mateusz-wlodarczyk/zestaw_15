import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SimpleMap from "../components/SimpleMap";

export default function Search() {
  const [latitude, setLatitude] = useState<number>(10);
  const [longitude, setLongitude] = useState<number>(0);

  if ("geolocation" in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // console.log(latitude, longitude);
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("unkown error");
        }
      }
    );
  } else {
    console.error("Geolocation is not available in this browser.");
  }

  return (
    <Box sx={{ widht: "100%", height: "100%" }}>
      <SimpleMap latitude={latitude} longitude={longitude} />
    </Box>
  );
}
