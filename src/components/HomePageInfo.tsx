import { Box, Button } from "@mui/material";
import React from "react";
import { ROUTES, welcomeText } from "../utils/constants";
import { Link } from "react-router-dom";

export default function HomePageInfo() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>{welcomeText.header}</h1> <p>{welcomeText.paragraph_1}</p>
      <Button sx={{ fontSize: "20px", marginTop: "30px" }}>
        <Link to={ROUTES.search.link}>{"--> ENTER <--"}</Link>
      </Button>
    </Box>
  );
}
