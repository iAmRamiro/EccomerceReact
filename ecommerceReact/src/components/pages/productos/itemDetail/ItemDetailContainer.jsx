import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import ItemDetail from "./ItemDetail";
import { useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../../../firebaseConfig";
import { Box, Skeleton, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const itemID = useParams().id;

  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(dataBase, "products", itemID);

    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
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

  const skeletons = (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      mt={15}
      gap="10px"
    >
      <Box>
        <Skeleton variant="rectangular" width={500} height={500} />
      </Box>
      <Box display="flex" flexDirection="column" gap="10px">
        <Skeleton variant="text" width={300} height={40} />{" "}
        <Skeleton variant="text" width={80} height={20} />{" "}
        <Skeleton variant="text" width={100} height={50} />{" "}
        <Skeleton variant="rounded" width={120} height={40} />
        <Skeleton variant="text" width={400} height={100} />{" "}
      </Box>
    </Box>
  );

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
      {item === null ? (
        skeletons
      ) : (
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
