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

  const rightSwipeStyles = {
    position: "absolute",
    top: "50%",
    right: "0",
    cursor: "pointer",
    color: "white",
    fontSize: "24px",
    zIndex: "1",
    background: "rgba(0, 0, 0, 0.5)",
  };

  const leftSwipeStyles = {
    position: "absolute",
    top: "50%",
    left: "0",
    cursor: "pointer",
    color: "white",
    fontSize: "24px",
    zIndex: "1",
    background: "rgba(0, 0, 0, 0.5)",
  };

  const dotContainerStyles = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  };

  return (
    <div>
      <SliderImge
        arrayImagenes={slidesIMGs}
        currentIndex={currentIndex}
        goToNext={GoToNext}
        goToPrevious={GoToPrevious}
        moveDot={moveDot}
        rightSwipe={rightSwipeStyles}
        leftSwipe={leftSwipeStyles}
        dotContainer={dotContainerStyles}
      />
    </div>
  );
};

export default SliderContainer;
