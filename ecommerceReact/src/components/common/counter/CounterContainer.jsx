import React from "react";
import Counter from "./Counter";

const CounterContainer = ({
  agregarAlCarrito,
  stock,
  previousQuantityInCart = 1,
  talle,
}) => {
  const [counter, setCounter] = React.useState(previousQuantityInCart);

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
        talle={talle}
        sumar={handleSuma}
        restar={handleResta}
        agregarAlCarrito={agregarAlCarrito}
      />
    </>
  );
};

export default CounterContainer;
