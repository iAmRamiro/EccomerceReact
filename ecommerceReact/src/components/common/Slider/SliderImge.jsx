import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";

const SliderImge = ({
  arrayImagenes,
  currentIndex,
  goToNext,
  goToPrevious,
  moveDot,
  rightSwipe,
  leftSwipe,
  dotContainer,
}) => {
  return (
    <Box
      sx={{
        width: "1200px",
        height: "600px",
        margin: "0 auto",
        paddingTop: "1rem",
      }}
    >
      <Box sx={{ height: "100%", position: "relative" }}>
        <Box>
          <ArrowBackIosIcon sx={leftSwipe} onClick={goToPrevious} />
          <ArrowForwardIosIcon sx={rightSwipe} onClick={goToNext} />
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${arrayImagenes[currentIndex].url})`,
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
              sx={currentIndex === slideIndex ? { color: "red" } : {}}
              onClick={() => moveDot(slideIndex)}
            >
              {" "}
              <FiberManualRecordIcon sx={{ cursor: "pointer" }} />{" "}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SliderImge;
