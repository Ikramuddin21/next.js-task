"use client";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import DashboardTable from "./DashboardTable";
import { IoIosArrowDown } from "react-icons/io";

const DashboardTableContainer = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      {/* tabs */}
      <Box>
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
            }}
          >
            <Tab label="All" value="1" />
            <Tab label="Accepted" value="2" />
          </Tabs>
        </Box>
      </Box>

      {/* search/filter table */}
      <Box
        sx={{
          my: "20px",
          px: "24px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "16px",
        }}
      >
        <TextField
          placeholder="Search..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CiSearch size={24} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            width: { xs: "100%", md: "50%" },
            "& .MuiInputBase-input": {
              fontSize: "15px",
              color: "primary.main",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#919EAB33",
            },
          }}
        />

        <FormControl
          sx={{
            width: { xs: "100%", md: "20%" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            id="demo-simple-select"
            label="Type"
            defaultValue="all"
            IconComponent={(props) => (
              <IoIosArrowDown {...props} color="#1C252E" />
            )}
            //   onChange={handleChange}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "15px",
                color: "primary.main",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#919EAB33",
              },
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="accepted">Accepted</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* dashboard table */}
      <DashboardTable />
    </>
  );
};

export default DashboardTableContainer;
