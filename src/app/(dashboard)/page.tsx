"use client";
import { Box, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import icon1 from "@/assets/overview_icon.png";
import icon2 from "@/assets/overview_icon2.png";
import Image from "next/image";
import DashboardBarChart from "@/components/DashboardBarChart";
import DashboardLineChart from "@/components/DashboardLineChart";
import { useState } from "react";

const page = () => {
  const [value, setValue] = useState("1");
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
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
        {/* <select
          name=""
          id=""
          style={{
            border: "1px solid #919EAB29",
            borderRadius: "8px",
            padding: "6px 12px",
          }}
        >
          <option value="">This Week</option>
          <option value="">Next Week</option>
        </select> */}
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
        <Box
          sx={{
            p: "24px",
            borderRadius: "16px",
            minWidth: { xs: "295px", sm: "343px" },
            // boxShadow:
            //   "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            // boxShadow:
            //   "rgba(145, 158, 171, 0.12) 0px 24px 24px -4px, rgba(145, 158, 171, 0.2) 0px 0px 2px 0px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total active users</Typography>
          <Typography variant="h1" sx={{ fontWeight: "700", my: "8px" }}>
            8.2k
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Image src={icon1} alt="" width={24} height={24} />
            <span style={{ fontWeight: "600" }}>8.2%</span>
            <span style={{ color: "#637381" }}>previous month</span>
          </Box>
        </Box>
        {/* item 2 */}
        <Box
          sx={{
            p: "24px",
            borderRadius: "16px",
            minWidth: { xs: "295px", sm: "343px" },
            // boxShadow:
            //   "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            // boxShadow:
            //   "rgba(145, 158, 171, 0.12) 0px 24px 24px -4px, rgba(145, 158, 171, 0.2) 0px 0px 2px 0px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total clicks</Typography>
          <Typography variant="h1" sx={{ fontWeight: "700", my: "8px" }}>
            8.2k
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Image src={icon1} alt="" width={24} height={24} />
            <span style={{ fontWeight: "600" }}>8.2%</span>
            <span style={{ color: "#637381" }}>previous month</span>
          </Box>
        </Box>
        {/* item 3 */}
        <Box
          sx={{
            p: "24px",
            borderRadius: "16px",
            minWidth: { xs: "295px", sm: "343px" },
            // boxShadow:
            //   "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            // boxShadow:
            //   "rgba(145, 158, 171, 0.12) 0px 24px 24px -4px, rgba(145, 158, 171, 0.2) 0px 0px 2px 0px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total appearances</Typography>
          <Typography variant="h1" sx={{ fontWeight: "700", my: "8px" }}>
            8.2k
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Image src={icon2} alt="" width={24} height={24} />
            <span style={{ fontWeight: "600" }}>8.2%</span>
            <span style={{ color: "#637381" }}>previous month</span>
          </Box>
        </Box>
      </Box>

      {/* chart section */}
      <Box
        sx={{ mt: "24px", display: "flex", alignItems: "center", gap: "24px" }}
      >
        <Box
          sx={{
            width: "50%",
            p: "24px",
            borderRadius: "16px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <DashboardBarChart />
        </Box>
        <Box
          sx={{
            width: "50%",
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

        <Box sx={{}}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="basic tabs example"
              sx={{
                pl: "24px",
                "& .MuiButtonBase-root": {
                  color: "secondary",
                  textTransform: "capitalize",
                },

                // "& .Mui-selected": {
                //   color: "#1C252E !important",
                // },
              }}
            >
              <Tab label="All" value="1" />
              <Tab label="Accepted" value="2" />
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
