import { formatNumber } from "@/helper/numberFormat";
import { StatsDataType } from "@/type/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

interface OverviewCardProps {
  data: { curr: number; pre: number; title: string };
  icon: ReactNode;
}

const OverviewCard = ({ data, icon }: OverviewCardProps | any) => {
  return (
    <Box
      sx={{
        p: "24px",
        borderRadius: "16px",
        minWidth: { xs: "295px", sm: "343px" },
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Typography sx={{ fontWeight: "600" }}>{data?.title}</Typography>
      <Typography variant="h1" sx={{ fontWeight: "700", my: "8px" }}>
        {formatNumber(data?.curr)}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Image src={icon} alt="" width={24} height={24} />
        <span style={{ fontWeight: "600" }}>{`${formatNumber(
          data?.pre
        )?.replace("k", "")}%`}</span>
        <span style={{ color: "#637381" }}>previous month</span>
      </Box>
    </Box>
  );
};

export default OverviewCard;
