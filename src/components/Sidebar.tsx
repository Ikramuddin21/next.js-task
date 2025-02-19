import { Box, Button, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import dashboardIcon from "@/assets/dashboard_icon.png";
import onboardingIcon from "@/assets/onboarding_icon.png";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
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

export default Sidebar;
