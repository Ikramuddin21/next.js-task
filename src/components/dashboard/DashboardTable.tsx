+"use client";
import axiosApi from "@/lib/axiosInstance";
import { Box, Button, CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface Data {
  user_name: string;
  email?: string;
  phone: string;
  company: string;
  jobTitle: string;
  type: string;
  status: string;
  action?: null;
}

interface Column {
  id:
    | "user_name"
    | "phone"
    | "company"
    | "jobTitle"
    | "type"
    | "status"
    | "action";
  label: string;
  minWidth?: number;
  align?: "left";
}

interface StatusStyleType {
  backgroundColor: string;
  color: string;
}

const DashboardTable = ({ status, search, type }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [tableData, setTableData] = useState([]);
  const [tableFilteredData, setTableFilteredData] = useState([...tableData]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("tableFilteredData", tableFilteredData);

  // render status style
  const renderStatusStyle = (status: string | any): StatusStyleType => {
    if (status === "accepted") {
      return { backgroundColor: "#22C55E29", color: "#118D57" };
    } else if (status === "rejected") {
      return { backgroundColor: "#FF563029", color: "#B71D18" };
    } else {
      return { backgroundColor: "#FFAB0029", color: "#B76E00" };
    }
  };

  // table columns
  const columns: readonly Column[] = [
    {
      id: "user_name",
      label: "Name",
      // minWidth: 170,
    },
    { id: "phone", label: "Phone number" },
    {
      id: "company",
      label: "Company",
      // minWidth: 170,
      align: "left",
    },
    {
      id: "jobTitle",
      label: "Job Title",
      // minWidth: 170,
      align: "left",
    },
    {
      id: "type",
      label: "Type",
      // minWidth: 170,
      align: "left",
    },
    {
      id: "status",
      label: "Status",
      // minWidth: 170,
      align: "left",
    },
    {
      id: "action",
      label: "",
      // minWidth: 170,
      align: "left",
    },
  ];

  // table rows
  // const rows: Data[] = [...tableData];

  // fetch table data
  const fetchTableData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.get(
        `/offers?page=${page}&per_page=${rowsPerPage}`
      );
      setTableData(data?.data);
      setTableFilteredData(data?.data);
      console.log("data api", data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(tableData, "table data");

  useEffect(() => {
    fetchTableData();
  }, []);

  // useEffect(() => {
  //   if (tableData?.length) setTableFilteredData(tableData);
  // }, [tableData.length]);
  console.log("status", status);
  console.log("type", type);
  console.log("search", search);

  // filter / search
  useEffect(() => {
    if (!!type) {
      const filterData = tableData?.filter((item: Data) => item?.type === type);
      setTableFilteredData(filterData);
      console.log(type, "type inside");
    } else {
      setTableFilteredData(tableData);
    }
    if (!!search) {
      const filterData = tableData?.filter((item: Data) =>
        item?.user_name.toLowerCase().includes(search.toLowerCase())
      );
      setTableFilteredData(filterData);
    } else {
      setTableFilteredData(tableData);
    }
    if (!!status) {
      const filterData = tableData?.filter(
        (item: Data) => item?.status === status
      );
      setTableFilteredData(filterData);
    } else {
      setTableFilteredData(tableData);
    }
  }, [search, type, status]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableFilteredData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: Data, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${row.phone}_${index}`}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ textTransform: "capitalize" }}
                        >
                          {column.id === "user_name" ? (
                            <div>
                              <p
                                style={{
                                  margin: 0,
                                  marginBottom: "5px",
                                  color: "#1C252E",
                                }}
                              >
                                {value}
                              </p>
                              <p style={{ margin: 0, color: "#919EAB" }}>
                                {row.email}
                              </p>
                            </div>
                          ) : column.id === "action" ? (
                            <div style={{ display: "flex", gap: "16px" }}>
                              <FaPen
                                size={20}
                                style={{
                                  color: "#637381",
                                  cursor: "pointer",
                                }}
                              />
                              <HiOutlineDotsVertical
                                size={20}
                                style={{
                                  color: "#637381",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          ) : column.id === "status" ? (
                            <div>
                              <Button
                                size="small"
                                sx={renderStatusStyle(value)}
                              >
                                {value}
                              </Button>
                            </div>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          "& .MuiTablePagination-select": { mx: "4px" },
          "& .MuiTablePagination-actions": { mx: "4px" },
          "& .MuiTablePagination-toolbar": {
            height: "20px !important",
          },
        }}
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={tableFilteredData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default DashboardTable;
