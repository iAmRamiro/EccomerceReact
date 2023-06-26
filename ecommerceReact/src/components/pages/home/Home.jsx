import { Box } from "@mui/material";
import React from "react";
import ImageSlider from "./Slider";

const HomePage = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dlncijm0v/image/upload/v1687368910/ecommerce/image1_gtrbxf.webp",
      title: "Star Nutrition",
    },

    {
      url: "https://res.cloudinary.com/dlncijm0v/image/upload/v1687368920/ecommerce/image2_t5iof2.webp",
      title: "Musculosas",
    },

    {
      url: "https://res.cloudinary.com/dlncijm0v/image/upload/v1687376362/ecommerce/remeraCaution_jz6oyn.webp",
      title: "Remeras",
    },
  ];

  return (
    <Box
      sx={{
        width: "1200px",
        height: "600px",
        margin: "0 auto",
        paddingTop: "1rem",
      }}
    >
      <ImageSlider arrayImagenes={slides} />
    </Box>
  );
};

export default HomePage;
