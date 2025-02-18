import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      {/* left sidebar */}
      <Box
        sx={{
          width: "18%",
          p: "24px 28px",
          borderRight: "1px solid #919EAB1F",
        }}
      >
        <Sidebar />
      </Box>
      {/* right */}
      <Box sx={{ width: "82%" }}>
        <TopBar />
        <Box sx={{ p: "24px 40px" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
