import { Box, Container } from "@mui/material";
import React from "react";
import Title from "../../common/title/Title";
import TableCambioDePrenda from "./TableCambioDePrenda";

const PoliticaDeDevolucion = () => {
  return (
    <Container sx={{ marginBottom: "10px" }}>
      <Box textAlign={"center"}>
        <Title titulo={"Politica de Devolucion"} />
      </Box>

      <Box>
        <h3>Crack!</h3>
        <p>
          Si la creatina te hizo efecto y necesitas un cambio de talle, podes
          enviar un mail a:
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>CONSULTAS.WORLDFITNESS@GMAIL.COM</strong>
        </p>

        <p>Pones en el asunto "CAMBIO DE PRENDA" y el "NUMERO DE ORDEN"</p>

        <TableCambioDePrenda />

        <p>Políticas de cambio:</p>
        <ul>
          <li>
            Los cambios se aceptan únicamente con la prenda nueva, sin lavar
          </li>
          <li>Dentro del plazo de 10 días de recibida la compra.</li>
          <li>
            El costo de envio de la devolución y la entrega del cambio, están a
            cargo del comprador.
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default PoliticaDeDevolucion;
