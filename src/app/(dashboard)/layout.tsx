"use client";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { Box, Button, Drawer } from "@mui/material";
import { ReactNode, useState } from "react";
import { IoMdMenu } from "react-icons/io";

type PropsChildren = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: PropsChildren) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      {/* left sidebar */}
      <Box
        sx={{
          width: { xs: "10%", sm: "15%", md: "18%" },
          p: { md: "24px 10px", xl: "24px 28px" },
          borderRight: "1px solid #919EAB1F",
        }}
      >
        <Sidebar />
      </Box>

      {/* right */}
      <Box sx={{ width: { xs: "90%", sm: "85%", md: "82%" } }}>
        <TopBar />
        <Box sx={{ py: "24px", px: { xs: "20px", lg: "40px" } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
