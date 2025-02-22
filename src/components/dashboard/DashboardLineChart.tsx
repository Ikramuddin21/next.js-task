"use client";
import axiosApi from "@/lib/axiosInstance";
import { Box, CircularProgress, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DashboardLineChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState<any>({});

  // fetch chart data & set chart data
  const fetchChartData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.get("/dashboard/stat?filter=this-week");
      if (data?.offers_sent) {
        const days = Object.keys(data?.offers_sent).map(
          (item) => item.slice(0, 1).toUpperCase() + item.slice(1, 3)
        );

        const offers = Object.values(data?.offers_sent);

        // set chart state
        setState({
          series: [
            {
              name: "Offer",
              data: offers,
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
              categories: days,
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
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "374px",
        }}
      >
        <CircularProgress />
      </Box>
    );

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
