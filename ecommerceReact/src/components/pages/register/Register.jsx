import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Container } from "@mui/system";
import Title from "../../common/title/Title";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Register({
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Title titulo={"CREAR CUENTA"} />
      </Box>

      <Box
        component="form"
        sx={{
          width: 800,
          maxWidth: "100%",
          margin: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField label="NOMBRE" id="outlined" fullWidth />
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              required
              fullWidth
              label="E-MAIL"
              placeholder="Tu correo"
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              fullWidth
              label="TELEFONO (Opcional)"
              type="tel"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                CONTRASEÑA
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>

          <Box sx={{ width: "100%" }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password ">
                REPETIR CONTRASEÑA
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-repeat"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box>
        <Button variant="contained" size="large" disabled>
          {" "}
          CREAR CUENTA
        </Button>
      </Box>

      <Box>
        <p>
          ¿Ya tenés una cuenta?{" "}
          <Link style={{ color: "black", textDecoration: "none" }} to="/login">
            <b>Inicia Sesion</b>
          </Link>
        </p>
      </Box>
    </Container>
  );
}
