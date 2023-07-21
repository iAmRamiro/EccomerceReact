import React from "react";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const [counter, setCounter] = React.useState(1);

  const handleSuma = () => {
    counter < stock && setCounter(counter + 1);
  };

  const handleResta = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <>
      <Counter
        counter={counter}
        sumar={handleSuma}
        restar={handleResta}
        agregarAlCarrito={agregarAlCarrito}
      />
    </>
  );
};

export default CounterContainer;
