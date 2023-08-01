import { Box, Container, MenuItem, TextField, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import CounterContainer from "../../../common/counter/CounterContainer";

const ItemDetail = ({
  item,
  talles,
  agregarAlCarrito,
  stock,
  previousQuantityInCart,
  selectedTalle,
  handleTalleChange,
}) => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          gap: "3rem",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "normal" },
        }}
      >
        <Box>
          <img src={item.img} width="350px" />
        </Box>

        <Box>
          <Typography variant="h4">{item.title}</Typography>
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
              {item.requiereTalle && (
                <Box>
                  <TextField
                    variant="standard"
                    id="outlined"
                    select
                    label="Talle"
                    value={selectedTalle}
                    onChange={handleTalleChange}
                    required
                    helperText="selecciona tu talle"
                  >
                    {talles.map((tall) => (
                      <MenuItem key={tall.codigo} value={tall.talle}>
                        {tall.talle}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              )}
            </Box>
            <Box>
              <Box>
                <CounterContainer
                  talle={selectedTalle}
                  agregarAlCarrito={agregarAlCarrito}
                  stock={stock}
                  previousQuantityInCart={previousQuantityInCart}
                />
              </Box>
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
