import { Box, Container } from "@mui/material";
import Title from "../../common/title/Title";

const CompraMayorista = () => {
  return (
    <Container>
      <Box textAlign={"center"}>
        <Title titulo={"Compras Mayoristas"} />
        <h2 style={{ fontSize: "4rem", textTransform: "uppercase" }}>
          Mayoristas
        </h2>
      </Box>
      <Box>
        <p style={{ fontSize: "20px" }}>
          <strong>
            Minimo de compra: 10 prendas&nbsp;(Estas pueden ser surtidas).{" "}
            <span>UNICAMENTE</span> revendedores
          </strong>
        </p>
        <p>- Forma de pago: Efectivo/Transferencia/Deposito</p>
        <p>- Lista de precios y fotos, se solicitan mediante:</p>
        <ul>
          <li>Email: mayorista.shark@gmail.com</li>
        </ul>
      </Box>
    </Container>
  );
};

export default CompraMayorista;
