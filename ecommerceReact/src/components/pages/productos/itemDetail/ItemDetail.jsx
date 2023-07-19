import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";

const ItemDetail = ({ item, talles }) => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Box sx={{ display: "flex", gap: "3rem" }}>
        <Box>
          <img src={item.img} />
        </Box>

        <Box>
          <Typography variant="h3">{item.title}</Typography>
          <Typography variant="h5" mt={2} mb={2}>
            {" "}
            ${item.price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid black",
              width: "190px",
            }}
          >
            <LocalShippingIcon sx={{ fontSize: "2rem" }} />
            <p
              style={{
                fontSize: "20px",
                margin: "0",
                fontWeight: "bold",
                padding: "5px",
              }}
            >
              Envio Gratis
            </p>
          </Box>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            3 CUOTAS SIN INTERES
          </p>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  variant="standard"
                  id="outlined"
                  select
                  label="Talle"
                  aria-required
                  defaultValue="-SELECCIONA-"
                  helperText="selecciona tu talle"
                >
                  {talles.map((tall) => (
                    <MenuItem key={tall.codigo} value={tall.talle}>
                      {tall.talle}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
            <Box sx={{ display: "flex", alignContent: "center", gap: "1rem" }}>
              <TextField
                variant="outlined"
                id="outlined-cantidad"
                label="Cantidad"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button variant="contained" size="large">
                Agregar Al Carrito
              </Button>
            </Box>
          </Box>
          <br />
          <hr />
          <h3>Descripcion del Producto</h3>
          <p>{item.description}</p>
        </Box>
      </Box>
    </Container>
  );
};

export default ItemDetail;