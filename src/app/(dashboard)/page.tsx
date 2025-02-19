"use client";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import icon1 from "@/assets/overview_icon.png";
import icon2 from "@/assets/overview_icon2.png";
import Image from "next/image";

const page = () => {
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
          // value={age}
          // label="Age"
          // onChange={handleChange}
          // inputProps={{ "aria-label": "Without label" }}
          // aria-placeholder="Test"
          // IconComponent={(props) => (<ExpandMoreOutlinedIcon {...props}/>)}
          IconComponent={(props) => (
            <IoIosArrowDown {...props} color="#1C252E" />
          )}
          sx={{
            color: "#1C252E",
            height: "36px",
            borderRadius: "8px",
            padding: "6px 12px",
            borderColor: "#919EAB29",
            // "& .MuiOutlinedInput-root": {
            //   border: 0,
            // },
            // "& .MuiSelect-nativeInput": {
            //   border: "1px solid #919EAB29",
            // },
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
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {/* item 1 */}
        <Box
          sx={{
            p: "24px",
            borderRadius: "16px",
            minWidth: "343px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
            minWidth: "343px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
            minWidth: "343px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
    </Box>
  );
};

export default page;
