import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        padding: "15px",
        margin: "auto",
        marginTop: "10px",
        width: "85%",
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box
        sx={{ display: "flex", gap: "15px", minHeight: "500px", width: "100%" }}
      >
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ padding: "10px" }}>{children}</Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
