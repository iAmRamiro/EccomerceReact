import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, cintura, cadera, largo) {
  return { name, cintura, cadera, largo };
}

const rows = [
  createData("S", 57, 40, 68),
  createData("M", 59, 42, 70),
  createData("L", 62, 44, 72),
  createData("XXL", 65, 50, 74),
];

export default function TablePantalones() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: { xs: 130, sm: 650 } }} aria-label="simple table">
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
              <TableCell align="center">{row.cintura}</TableCell>
              <TableCell align="center">{row.cadera}</TableCell>
              <TableCell align="center">{row.largo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
