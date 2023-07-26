import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorID } from "../../../helper/pedirDatos";
import { CartContext } from "../../../../context/CartContext";
import ItemDetail from "./ItemDetail";
import { useContext } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const itemID = useParams().id;

  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    pedirItemPorID(Number(itemID)).then((res) => {
      setItem(res);
    });
  }, [itemID]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...item,
      quantity: cantidad,
    };

    addToCart(data);
  };

  let previousQuantityInCart = getQuantityById(itemID);

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

  return (
    <div>
      {item && (
        <ItemDetail
          item={item}
          talles={talles}
          agregarAlCarrito={agregarAlCarrito}
          stock={item.stock}
          previousQuantityInCart={previousQuantityInCart}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
