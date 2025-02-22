"use client";
import SidebarContainer from "@/components/SidebarContainer";
import TopBar from "@/components/TopBar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type PropsChildrenType = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: PropsChildrenType) => {
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
        <SidebarContainer />
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
