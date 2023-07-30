import Home from "../components/pages/home/Home";
import Asesoria from "../components/pages/asesoria/Asesoria";
import Nosotros from "../components/pages/nosotros/Nosotros";
import ItemListContainer from "../components/pages/productos/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/productos/itemDetail/ItemDetailContainer";
import GuiaTalles from "../components/pages/guiaTalles/GuiaTalles";
import PoliticaDeDevolucion from "../components/pages/devolucion/PoliticaDeDevolucion";
import CompraMayorista from "../components/pages/compraMayorista/CompraMayorista";
import Contacto from "../components/pages/contacto/Contacto";
import Login from "../components/pages/login/Login";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import BusquedaContainer from "../components/pages/busqueda/BusquedaContainer";

export const routerMenu = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },

  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },

  {
    id: "productos",
    path: "/productos",
    Element: ItemListContainer,
  },

  {
    id: "categoria",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },

  {
    id: "itemDetail",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },

  {
    id: "asesoria",
    path: "/asesoria",
    Element: Asesoria,
  },

  {
    id: "talles",
    path: "/talles",
    Element: GuiaTalles,
  },

  {
    id: "politica-de-devolucion",
    path: "/politica-de-devolucion",
    Element: PoliticaDeDevolucion,
  },

  {
    id: "compras-mayoristas",
    path: "/compras-mayoristas",
    Element: CompraMayorista,
  },

  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },

  {
    id: "login",
    path: "/login",
    Element: Login,
  },

  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },

  {
    id: "carrito",
    path: "/cart",
    Element: CartContainer,
  },

  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },

  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },

  {
    id: "busqueda",
    path: "/busqueda",
    Element: BusquedaContainer,
  },
];
