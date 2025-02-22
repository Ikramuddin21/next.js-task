"use client";
import axiosApi from "@/lib/axiosInstance";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const DashboardBarChart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [state, setState] = useState<any>({});

  // fetch chart data & set chart data
  const fetchChartData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.get("/dashboard/stat?filter=this-week");
      if (data?.website_visits) {
        const cData = Object.entries(data?.website_visits);
        const days = cData?.map(
          (item: any) => item[0].slice(0, 1).toUpperCase() + item[0].slice(1, 3)
        );
        const desktopData = cData?.map((item: any) => item[1].desktop);
        const mobileData = cData?.map((item: any) => item[1].mobile);

        // set chart state
        setState({
          series: [
            {
              name: "Desktop",
              data: desktopData,
              color: "#007867",
            },
            {
              name: "Mobile",
              data: mobileData,
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
