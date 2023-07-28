import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Container } from "@mui/material";
import Title from "../../common/title/Title";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        <Title titulo={"Inicia Sesion"} />
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
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="E-MAIL"
              placeholder="Tu correo"
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
        </Box>
      </Box>

      <Box mt={5} fontSize={"20px"}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="/recuperar-cuenta"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>

      <Box mt={5}>
        <Button variant="contained" size="large">
          {" "}
          INICIA SESIÓN
        </Button>
      </Box>

      <Box mt={5} fontSize={"20px"}>
        <p>
          {" "}
          ¿No tenés cuenta?{" "}
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/register"
          >
            Crear cuenta
          </Link>
        </p>
      </Box>
    </Container>
  );
};

export default Login;
