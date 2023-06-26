import React, { useEffect } from "react";
import SliderImge from "./SliderImge";
import slidesIMGs from "./slidesIMGs";

const SliderContainer = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const GoToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesIMGs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const GoToNext = () => {
    const isLastSlide = currentIndex === slidesIMGs.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveDot = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GoToNext();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  });

  //styles

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

  const leftSwipe = {
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

  return (
    <div>
      <SliderImge
        arrayImagenes={slidesIMGs}
        currentIndex={currentIndex}
        goToNext={GoToNext}
        goToPrevious={GoToPrevious}
        moveDot={moveDot}
        rightSwipe={rightSwipe}
        leftSwipe={leftSwipe}
        dotContainer={dotContainer}
      />
    </div>
  );
};

export default SliderContainer;
