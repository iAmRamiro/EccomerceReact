import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (producto) => {
    let existe = cart.some((prod) => prod.id === producto.id);

    if (existe) {
      let newArray = cart.map((element) => {
        if (element.id == producto.id) {
          return { ...element, quantity: producto.quantity };
        } else {
          return element;
        }
      });

      localStorage.setItem("cart", JSON.stringify(newArray));
      setCart(newArray);
    } else {
      const updatedCart = [...cart, producto];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const deleteById = (id) => {
    let newCart = cart.filter((prod) => prod.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, cant) => acc + cant.quantity, 0);

    return total;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, element) => acc + element.price, 0);

    return totalPrice;
  };

  const getQuantityById = (id) => {
    let idFound = cart.find((elemnt) => elemnt.id == +id);
    /* return idFound ? idFound.quantity : undefined; */

    return idFound?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
