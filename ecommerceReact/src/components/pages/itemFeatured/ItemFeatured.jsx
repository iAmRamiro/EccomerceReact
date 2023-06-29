import React from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../common/productCard/ProductCard";

const ItemFeatured = ({ item }) => {
  return <ProductCard item={item} />;
};

export default ItemFeatured;
