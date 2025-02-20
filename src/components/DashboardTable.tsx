import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DashboardTable = () => {
  interface Data {
    name: string;
    email?: string;
    phone_number: string;
    company: string;
    job_title: string;
    type: string;
    status: string;
    action?: null;
  }

  interface Column {
    id:
      | "name"
      | "phone_number"
      | "company"
      | "job_title"
      | "type"
      | "status"
      | "action";
    label: string;
    minWidth?: number;
    align?: "left";
  }

  const columns: readonly Column[] = [
    {
      id: "name",
      label: "Name",
      minWidth: 170,
    },
    { id: "phone_number", label: "Phone number", minWidth: 100 },
    {
      id: "company",
      label: "Company",
      minWidth: 170,
      align: "left",
    },
    {
      id: "job_title",
      label: "Job Title",
      minWidth: 170,
      align: "left",
    },
    {
      id: "type",
      label: "Type",
      minWidth: 170,
      align: "left",
    },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
      align: "left",
    },
    {
      id: "action",
      label: "",
      minWidth: 170,
      align: "left",
    },
  ];

  // function createData(
  //   name: string,
  //   code: string,
  //   population: number,
  //   size: number
  // ): Data {
  //   const density = population / size;
  //   return { name, code, population, size, density };
  // }

  const rows: Data[] = [
    {
      name: "John Khan",
      email: "john12@gmail.com",
      phone_number: "0152102120",
      company: "Software Ltd",
      job_title: "Frontend Developer",
      type: "Monthly",
      status: "accepted",
    },
    {
      name: "John Khan",
      email: "john12@gmail.com",
      phone_number: "0152102120",
      company: "Software Ltd",
      job_title: "Frontend Developer",
      type: "Monthly",
      status: "accepted",
    },
  ];
  // createData("China", "CN", 1403500365, 9596961),
  // createData("Italy", "IT", 60483973, 301340),
  // createData("United States", "US", 327167434, 9833520),
  // createData("Canada", "CA", 37602103, 9984670),
  // createData("Australia", "AU", 25475400, 7692024),
  // createData("Germany", "DE", 83019200, 357578),
  // createData("Ireland", "IE", 4857000, 70273),
  // createData("Mexico", "MX", 126577691, 1972550),
  // createData("Japan", "JP", 126317000, 377973),
  // createData("France", "FR", 67022000, 640679),
  // createData("United Kingdom", "GB", 67545757, 242495),
  // createData("Russia", "RU", 146793744, 17098246),
  // createData("Nigeria", "NG", 200962417, 923768),
  // createData("Brazil", "BR", 210147125, 8515767),

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.phone_number}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" ? (
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
                              <Button>Accepted</Button>
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
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default DashboardTable;
