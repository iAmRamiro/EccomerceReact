import React, { useEffect, useState } from "react";

import ProductCard from "../../common/productCard/ProductCard";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import Busqueda from "./Busqueda";

const BusquedaContainer = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const searchQuery = searchParams.get("search");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    const dataRef = collection(dataBase, "products");
    getDocs(dataRef)
      .then((res) =>
        setData(
          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      )
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searched = filteredData.map((prod) => (
    <ProductCard item={prod} key={prod.id} />
  ));

  return (
    <Busqueda
      filteredData={filteredData}
      searched={searched}
      isLoading={isLoading}
    />
  );
};

export default BusquedaContainer;
