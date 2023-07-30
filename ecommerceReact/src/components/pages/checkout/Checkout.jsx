import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Title from "../../common/title/Title";
import { useFormik } from "formik";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";

import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import * as Yup from "yup";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [idOrder, setidOrder] = useState("");

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      apellido: "",
      calle: "",
      barrio: "",
      ciudad: "",
      dniCuil: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        item: cart,
        total: getTotalPrice(),
        date: serverTimestamp(),
      };

      console.log(order);

      // crear orden de compra
      let orderColections = collection(dataBase, "orders");
      addDoc(orderColections, order).then((res) => setidOrder(res.id));

      // modificar el stock de producto

      cart.forEach((element) =>
        updateDoc(doc(dataBase, "products", element.id), {
          stock: element.stock - element.quantity,
        })
      );
    },

    validationSchema: Yup.object({
      nombre: Yup.string().max(10).required("Este campo es obligatorio"),
      apellido: Yup.string().max(10).required("Este campo es obligatorio"),
      email: Yup.string()
        .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Email no válido")
        .required("El email es requerido"),
      ciudad: Yup.string().required("Este campo es obligatorio"),
      calle: Yup.string().required("Este campo es obligatorio"),
      barrio: Yup.string().required("Este campo es obligatorio"),
      dniCuil: Yup.number().required("Este campo es obligatorio"),
    }),

    validateOnChange: false,
  });

  return (
    <>
      {!idOrder ? (
        <Container maxWidth="xl">
          <Box textAlign="center">
            <Title titulo={"DATOS DE ENVIO"} />
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              id="email"
              label="E-MAIL"
              error={errors.email ? true : false}
              placeholder="Tu correo"
              name="email"
              helperText={errors.email}
              onChange={handleChange}
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Quiero recibir ofertas y novedades por email"
            />

            <Box>
              <h2>Entrega</h2>

              <Box border="3px solid #000" sx={{ borderLeftWidth: "8px" }}>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox checked={true} />
                    <p>Correo Argentino Clasico - Envio a domicilio</p>
                  </Box>
                  <Box ml="55px" pb="12px">
                    <small>Llega entre viernes y lunes </small>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box mb="20px">
              <h2>Datos del destinatario</h2>
              <Box mt="20px">
                <TextField
                  id="nombre"
                  fullWidth
                  error={errors.nombre ? true : false}
                  helperText={errors.nombre}
                  label="Nombre"
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                />
              </Box>

              <Box mt="20px">
                <TextField
                  id="apellido"
                  fullWidth
                  error={errors.apellido ? true : false}
                  helperText={errors.apellido}
                  label="Apellido"
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box>
              <h2>Domicilio del destinatario</h2>
              <Box mt="20px">
                <TextField
                  fullWidth
                  error={errors.calle ? true : false}
                  helperText={errors.calle}
                  label="Calle"
                  type="text"
                  name="calle"
                  onChange={handleChange}
                />
              </Box>
              <Box mt="20px">
                <TextField
                  id="barrio"
                  fullWidth
                  error={errors.barrio ? true : false}
                  helperText={errors.barrio}
                  label="Barrio"
                  type="text"
                  name="barrio"
                  onChange={handleChange}
                />
              </Box>
              <Box mt="20px">
                <TextField
                  id="ciudad"
                  fullWidth
                  error={errors.ciudad ? true : false}
                  helperText={errors.ciudad}
                  label="Ciudad"
                  type="text"
                  name="ciudad"
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box>
              <h2>Datos de Facturacion</h2>
              <Box mt="20px">
                <TextField
                  id="dniCuil"
                  fullWidth
                  label="DNI O CUIL"
                  error={errors.dniCuil ? true : false}
                  helperText={errors.dniCuil}
                  type="text"
                  name="dniCuil"
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box marginTop={2}>
              <Button size="large" variant="contained" type="submit">
                Continuar
              </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <h2>Su numer de orden es: {idOrder}</h2>
      )}
    </>
  );
};

export default Checkout;
