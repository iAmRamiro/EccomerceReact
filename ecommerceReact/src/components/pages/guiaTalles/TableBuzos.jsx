import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, pecho, largo) {
  return { name, pecho, largo };
}

const rows = [
  createData("S", 57, 66),
  createData("M", 59, 71),
  createData("L", 62, 74),
  createData("XXL", 65, 76),
];

export default function TableBuzos() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: { xs: 150, sm: 650 } }} aria-label="simple table">
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
              <TableCell align="center">{row.largo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
