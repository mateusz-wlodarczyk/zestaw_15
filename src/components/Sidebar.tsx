import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";

const styleSidebarIcon = { width: "50px", height: "50px" };

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleOnclick = () => {
    setOpen((open) => !open);
  };
  return (
    <Box onClick={handleOnclick} sx={{ dispaly: "flex", flexDirection: "row" }}>
      {!open && <RxHamburgerMenu style={styleSidebarIcon} />}
      {open && (
        <Box sx={{ display: "flex", position: "absolute" }}>
          <CgClose style={{ width: "50px", height: "50px" }} />
          <DropdownMenu />
        </Box>
      )}
    </Box>
  );
}
