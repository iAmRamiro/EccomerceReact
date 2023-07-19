import { Container } from "@mui/system";
import React from "react";
import Title from "../../common/title/Title";
import TableBuzos from "./TableBuzos";
import TableMusculosas from "./TableMusculosas";
import TablePantalones from "./TablePantalones";
import TableRemeras from "./TableRemeras";

const GuiaTalles = () => {
  const talles = [
    {
      id: "talleBuzos",
      title: "Buzos",
      component: <TableBuzos />,
    },

    {
      id: "talleMusculosas",
      title: "Musculosas",
      component: <TableMusculosas />,
    },

    {
      id: "talleRemeras",
      title: "Remeras",
      component: <TableRemeras />,
    },

    {
      id: "tallePantalones",
      title: "Pantalones",
      component: <TablePantalones />,
    },
  ];

  return (
    <Container sx={{ textAlign: "center" }}>
      <Title titulo={"Guia de Talles"} />
      {talles.map((talle) => (
        <div key={talle.id}>
          <h2>{talle.title}</h2>
          {talle.component}
        </div>
      ))}
    </Container>
  );
};

export default GuiaTalles;
