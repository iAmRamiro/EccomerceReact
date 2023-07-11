import React from "react";
import ProductCard from "../../../common/productCard/ProductCard";

const ItemList = ({ products }) => {
  return (
    <>
      <ProductCard item={products} />
    </>
  );
};

export default ItemList;
