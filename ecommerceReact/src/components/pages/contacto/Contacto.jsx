import { Box, Container } from "@mui/system";
import React from "react";
import Title from "../../common/title/Title";
import ContactoFormulario from "./ContactoFormulario";

const Contacto = () => {
  return (
    <Container>
      <Box textAlign="center">
        <Title titulo={"Contactanos!"} />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ContactoFormulario />
      </Box>

      <Box textAlign="center">
        <p style={{ fontSize: "25px" }}>
          <i>Pronto recibira una respuesta en un plazo no mayor de 72hs</i>{" "}
        </p>

        <img
          src="https://images.squarespace-cdn.com/content/v1/6033033545e0687e342e126b/1614003978495-MSHNY4XBA4216M47PL71/MG_logo_brightredsmall.png"
          alt="thanks"
          width="400px"
        />
      </Box>
    </Container>
  );
};

export default Contacto;
