import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, pecho, cintura, largo) {
  return { name, pecho, cintura, largo };
}

const rows = [
  createData("S", 48, 46, 65),
  createData("M", 50, 48, 68),
  createData("L", 52, 50, 68),
  createData("XL", 56, 52, 70),
];

export default function TableRemeras() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              fontWeight: "bold",
              backgroundColor: "black",
            }}
          >
            <TableCell sx={{ color: "white", fontSize: "20px" }}>
              Talles
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }} align="center">
              Pecho
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }} align="center">
              Cintura
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }} align="center">
              Largo
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ border: 1 }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.pecho}</TableCell>
              <TableCell align="center">{row.cintura}</TableCell>
              <TableCell align="center">{row.largo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
