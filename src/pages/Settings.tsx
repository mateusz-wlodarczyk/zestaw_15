import { Box } from "@mui/material";
import React from "react";
import Map from "../components/SingleHeroMap";

const APIKEY = "FchiPuQyRjiEEEOPpnLXMhH_3c1KnOmejO88f8cwXow";

export default function Settings() {
  return (
    <Box>
      <Map apikey={APIKEY} />
    </Box>
  );
}
// AppId
// eTfuCF8zfDSaT45mNBTE;
// API key FchiPuQyRjiEEEOPpnLXMhH_3c1KnOmejO88f8cwXow;
