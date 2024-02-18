import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

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
      <Box
        //wycentrowac
        sx={{
          height: "150px",
          display: "grid",
          gridTemplateColumns: "100px  auto ",
          alignContent: "center",
        }}
      >
        <Sidebar />
        <Logo />
      </Box>
      <Box
        sx={{ display: "flex", gap: "15px", minHeight: "500px", width: "100%" }}
      >
        <Box sx={{ padding: "10px" }}>{children}</Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
