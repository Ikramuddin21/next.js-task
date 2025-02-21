"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DashboardLineChart = () => {
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Offer",
        data: [25, 55, 63, 60, 66, 88, 114],
        color: "#1C252E",
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          endingShape: "rounded",
          borderRadius: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val;
          },
        },
      },
    },
  });
  return (
    <Box sx={{ width: "auto" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "600", color: "primary.main" }}
      >
        Offers Sent
      </Typography>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={374}
          width={"100%"}
        />
      </div>
    </Box>
  );
};

export default DashboardLineChart;
