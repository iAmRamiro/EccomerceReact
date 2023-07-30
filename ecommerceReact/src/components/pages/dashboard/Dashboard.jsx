import React from "react";
import { productMock } from "../../../productMock";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "@mui/material";

const Dashboard = () => {
  const fillProducts = () => {
    const prodRef = collection(dataBase, "products");
    productMock.forEach((prod) => addDoc(prodRef, prod));
  };

  return (
    <div>
      <h2>Rellenar Todos los productos</h2>
      <Button variant="contained" onClick={fillProducts}>
        Cargar todos los productos
      </Button>
    </div>
  );
};

export default Dashboard;
