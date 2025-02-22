"use client";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import icon1 from "@/assets/overview_icon.png";
import icon2 from "@/assets/overview_icon2.png";
import DashboardBarChart from "@/components/dashboard/DashboardBarChart";
import DashboardLineChart from "@/components/dashboard/DashboardLineChart";
import DashboardTableContainer from "@/components/dashboard/DashboardTableContainer";
import axiosApi from "@/lib/axiosInstance";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { StatsDataType, UserType } from "@/type/types";
import OverviewCard from "./OverviewCard";

const DashboardContainer = () => {
  const [dashboardData, setDashboardData] = useState<StatsDataType | undefined>(
    undefined
  );

  const fetchSummaryData = async () => {
    const { data }: StatsDataType | any = await axiosApi.get<StatsDataType>(
      "/dashboard/summary?filter=this-week"
    );
    setDashboardData(data);

    // console.log(data, "dashboard data");
  };

  useEffect(() => {
    fetchSummaryData();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" sx={{ fontWeight: "700" }}>
          Dashboard
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="this_week"
          IconComponent={(props) => (
            <IoIosArrowDown {...props} color="#1C252E" />
          )}
          sx={{
            color: "primary.main",
            height: "36px",
            borderRadius: "8px",
            padding: "6px 12px",
            borderColor: "#919EAB29",
            "& .MuiInputBase-input": {
              padding: 0,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              padding: 0,
            },
          }}
        >
          <MenuItem value="this_week">This Week</MenuItem>
          <MenuItem value="next_week">Next Week</MenuItem>
        </Select>
      </Box>

      {/* overview */}
      <Box
        sx={{
          mt: "24px",
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
          gap: "24px",
        }}
      >
        {/* item 1 */}
        <OverviewCard
          data={{
            curr: dashboardData?.current?.active_users,
            pre: dashboardData?.previous?.active_users,
            title: "Total active users",
          }}
          icon={icon1}
        />
        {/* item 2 */}
        <OverviewCard
          data={{
            curr: dashboardData?.current?.clicks,
            pre: dashboardData?.previous?.clicks,
            title: "Total clicks",
          }}
          icon={icon1}
        />
        {/* item 3 */}
        <OverviewCard
          data={{
            curr: dashboardData?.current?.appearance,
            pre: dashboardData?.previous?.appearance,
            title: "Total appearances",
          }}
          icon={icon2}
        />
      </Box>

      {/* chart section */}
      <Box
        sx={{
          mt: "24px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: "24px",
            borderRadius: "16px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <DashboardBarChart />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: "24px",
            borderRadius: "16px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <DashboardLineChart />
        </Box>
      </Box>

      {/* table section */}
      <Box
        sx={{
          mt: "24px",
          py: "24px",
          borderRadius: "16px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ pl: "24px", fontWeight: "600", color: "primary" }}
        >
          Offer List
        </Typography>

        <DashboardTableContainer />
      </Box>
    </>
  );
};

export default DashboardContainer;
