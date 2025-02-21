"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DashboardBarChart = () => {
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Desktop",
        data: [44, 55, 96, 60, 66, 113, 100],
        color: "#007867",
      },
      {
        name: "Mobile",
        data: [76, 85, 101, 105, 114, 94, 56],
        color: "#FFAB00",
      },
    ],
    options: {
      legend: {
        position: "top",
        horizontalAlign: "right",
        // offsetX: -15,
        markers: {
          size: 5.5,
          shape: "circle",
          offsetX: -1,
        },
        fontWeight: "bold",
      },
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
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
        sx={{ mb: "24px", fontWeight: "600", color: "primary.main" }}
      >
        Website visits
      </Typography>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
          width={"100%"}
        />
      </div>
    </Box>
  );
};

export default DashboardBarChart;
