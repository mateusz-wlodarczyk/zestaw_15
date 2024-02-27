import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/utils";

export default function HomePageInfo() {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* TODO: Add i18n support
       */}
      <h1>{"welcomeText.header"}</h1> <p>{"welcomeText.paragraph_1"}</p>
      <Button sx={{ fontSize: "20px", marginTop: "30px" }}>
        <Link to={ROUTES.search.link}>{"--> ENTER <--"}</Link>
      </Button>
    </Box>
  );
}
