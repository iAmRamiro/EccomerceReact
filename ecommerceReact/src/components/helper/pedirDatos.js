import { productMock } from "../../productMock";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    resolve(productMock);
  });
};

export const pedirItemPorID = (id) => {
  return new Promise((resolve, reject) => {
    const item = productMock.find((item) => item.id === id);

    item ? resolve(item) : reject((error) => console.error(error));
  });
};
