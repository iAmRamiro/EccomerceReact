import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorID } from "../../../helper/pedirDatos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const itemID = useParams().id;

  console.log(itemID);

  useEffect(() => {
    pedirItemPorID(Number(itemID)).then((res) => {
      setItem(res);
    });
  }, [itemID]);

  const talles = [
    {
      talle: "S",
      codigo: 40,
    },

    {
      talle: "M",
      codigo: 42,
    },

    {
      talle: "L",
      codigo: 44,
    },
  ];

  return <div>{item && <ItemDetail item={item} talles={talles} />}</div>;
};

export default ItemDetailContainer;
