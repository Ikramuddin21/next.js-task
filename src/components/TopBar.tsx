import { Box, Popover, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "@/assets/avatar_top.png";
import { MouseEvent, useState } from "react";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          height: "72px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          p: "16px 40px",
          boxShadow: " rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
        }}
      >
        {/* avatar */}
        <Box
          sx={{
            p: "4px",
            border: "1px solid #5BE49B",
            borderRadius: "100px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Image src={avatar} alt="Avatar Preview" height={36} width={36} />
        </Box>
      </Box>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1, cursor: "pointer" }} onClick={handleClose}>
          Profile
        </Typography>
        <Typography sx={{ p: 1, cursor: "pointer" }}>Signout</Typography>
      </Popover>
    </>
  );
};

export default TopBar;
