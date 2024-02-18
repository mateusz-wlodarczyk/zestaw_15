import { Box } from "@mui/material";
import React from "react";
import { ROUTES } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      sx={{
        width: "90px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to={ROUTES.home.link}>{ROUTES.home.icon}</Link>
      <Link to={ROUTES.search.link}>{ROUTES.search.icon}</Link>
      <Link to={ROUTES.settings.link}>{ROUTES.settings.icon}</Link>
    </Box>
  );
}
