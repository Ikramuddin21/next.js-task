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
import { ChangeEvent, useCallback, useState } from "react";
import { CiSearch } from "react-icons/ci";
import DashboardTable from "./DashboardTable";
import { IoIosArrowDown } from "react-icons/io";
import axiosApi from "@/lib/axiosInstance";
import { debounce } from "lodash";

const DashboardTableContainer = () => {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  // handle search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(status, "status");

  const debouncedSearch: any = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => handleSearch(e), 700),
    []
  );

  // tabs
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setStatus(newValue);
  };
  return (
    <>
      {/* tabs */}
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={status}
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
            <Tab label="All" value="all" />
            <Tab label="Accepted" value="accepted" />
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
          onChange={debouncedSearch}
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
            defaultValue=""
            onChange={(e) => setType(e.target.value)}
            IconComponent={(props) => (
              <IoIosArrowDown {...props} color="#1C252E" />
            )}
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
            <MenuItem value="">Choose One</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* dashboard table */}
      <DashboardTable type={type} search={search} status={status} />
    </>
  );
};

export default DashboardTableContainer;
