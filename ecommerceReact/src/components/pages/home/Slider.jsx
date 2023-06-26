import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ImageSlider = ({ arrayImagenes }) => {
  const [CurrentIndex, SetCurrentIndex] = React.useState(0);

  const rightSwipe = {
    position: "absolute",
    top: "65%",
    transform: "translate(0,-50%)",
    right: "19%",
    fontSize: "45px",
    zIndex: 1,
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.2)",
  };

  const lefttSwipe = {
    position: "absolute",
    top: "65%",
    transform: "translate(0,-50%)",
    left: "19%",
    fontSize: "45px",
    zIndex: 1,
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.2)",
  };

  const dotContainer = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-5%",
    gap: "1rem",
  };

  const GoToPrevious = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? arrayImagenes.length - 1 : CurrentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  const GoToNext = () => {
    const isLastSlide = CurrentIndex === arrayImagenes.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  const moveDot = (index) => {
    SetCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GoToNext();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box sx={{ height: "100%", positon: "relative" }}>
      <Box>
        <ArrowBackIosIcon sx={lefttSwipe} onClick={GoToPrevious} />
        <ArrowForwardIosIcon sx={rightSwipe} onClick={GoToNext} />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${arrayImagenes[CurrentIndex].url})`,
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          backgroundSize: "cover",
          transition: " all 1s ease",

          ":hover": {
            opacity: 0.7,
          },
        }}
      ></Box>
      <Box sx={dotContainer}>
        {arrayImagenes.map((slide, slideIndex) => (
          <Box
            key={slideIndex}
            sx={CurrentIndex === slideIndex && { color: "Red" }}
            onClick={() => moveDot(slideIndex)}
          >
            {" "}
            <FiberManualRecordIcon sx={{ cursor: "pointer" }} />{" "}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
