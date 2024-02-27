import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FOOTER_LINK } from "../routes/utils";

export default function Footer() {
  return (
    <Box
      sx={{
        padding: "5px",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <p>Copyright &copy;{new Date().getFullYear()}</p>
      </Box>
      <Box sx={{ display: "flex", gap: "15px" }}>
        {FOOTER_LINK.map((el) => {
          return (
            <Link key={el.id} to={el.link} target="_blank">
              {el.icon}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
