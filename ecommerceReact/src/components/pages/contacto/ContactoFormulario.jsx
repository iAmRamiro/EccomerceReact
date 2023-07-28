import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

export default function ContactoFormulario() {
  const { contact, handleContact } = useForm();

  const sendMessage = () => {
    console.log("enviado");
  };

  return (
    <Box
      component="form"
      sx={{
        width: 800,
        maxWidth: "100%",
        margin: "10px",
      }}
      noValidate
      autoComplete="off"
      onSubmit={() => handleContact(sendMessage)}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "40px",
          padding: "20px",
        }}
      >
        <Box>
          <TextField id="outlined" label="Nombre" placeholder="Tu nombre" />
        </Box>

        <Box>
          <TextField
            required
            id="outlined-required"
            label="E-MAIL"
            placeholder="Tu correo"
            name="email"
          />
        </Box>

        <Box>
          <TextField
            id="outlined-tel"
            label="TELEFONO (Opcional)"
            type="phone"
            name="telefono"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>

      <Box>
        <TextField
          fullWidth
          id="outlined"
          label="MENSAJE"
          name="mensaje"
          placeholder="Ingresa tu mensaje"
          multiline
          rows={6}
          rowsmax={5}
        />
      </Box>

      <Box marginTop={2}>
        <Button fullWidth size="large" variant="contained" type="submit">
          ENVIAR
        </Button>
      </Box>
    </Box>
  );
}
