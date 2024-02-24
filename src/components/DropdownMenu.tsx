import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";

export default function DropdownMenu() {
  return (
    <Box
      sx={{
        width: "150px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Box>
        <Link
          to={ROUTES.home.link}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {ROUTES.home.icon} {ROUTES.home.text}
        </Link>
      </Box>
      <Box>
        <Link
          to={ROUTES.search.link}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {ROUTES.search.icon} {ROUTES.search.text}
        </Link>
      </Box>
      <Box>
        <Link
          to={ROUTES.settings.link}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {ROUTES.settings.icon} {ROUTES.settings.text}
        </Link>
      </Box>
    </Box>
  );
}
