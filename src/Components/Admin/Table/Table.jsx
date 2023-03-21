import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Đặng Văn Huy", 18908424, "2 March 2023"),
  createData("Khoa Phùng ", 18908423, "2 March 2023"),
  createData("Nguyễn Lê Nam Giang", 18908422, "2 March 2023"),
  createData("Lê Nguyễn Phúc Khang", 18908421, "2 March 2023"),
  createData("Nguyễn Lê Nam Giang", 18908422, "2 March 2023"),
  createData("Lê Nguyễn Phúc Khang", 18908421, "2 March 2023"),
];


export default function BasicTable() {
  return (
      <div className="Table">
      <h3>User Detail</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id User</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.trackingId}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}