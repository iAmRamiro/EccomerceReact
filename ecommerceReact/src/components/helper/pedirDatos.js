import { productMock } from "../../productMock";
import { dataBase } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

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
