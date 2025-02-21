import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SidebarContent from "./SidebarContent";

const SidebarContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* responsive for mobile */}
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <Box
          sx={{
            pt: "20px",
            pl: { xs: "2px", sm: "28px" },
          }}
        >
          <IoMdMenu
            onClick={() => setOpen(true)}
            size={30}
            style={{
              color: "#1C252E",
              cursor: "pointer",
            }}
          />
        </Box>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <SidebarContent />
        </Drawer>
      </Box>

      {/* responsive for others device */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SidebarContent />
      </Box>
    </>
  );
};

export default SidebarContainer;
