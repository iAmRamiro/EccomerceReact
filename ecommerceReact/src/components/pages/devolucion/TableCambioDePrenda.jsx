import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableCambioDePrenda() {
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
              Cambio de Prenda - ORDEN XXXX
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell> consultas.worldfitness@gmail.com </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Cambio de Prenda - ORDEN XXXX </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
