import { Navbar } from "./components/layout/navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/pages/nosotros/Nosotros";
import Asesoria from "./components/pages/asesoria/Asesoria";
import ItemListContainer from "./components/pages/productos/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/productos/itemDetail/ItemDetailContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "aaabb0",
    },
    secondary: {
      main: "#EE2F14",
      light: "#E78071",
    },
  },
});

const navLinks = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Productos",
    path: "/productos",
  },
  {
    title: "Nosotros",
    path: "/nosotros",
  },

  {
    title: "Asesoria",
    path: "/asesoria",
  },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar navLinks={navLinks} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/asesoria" element={<Asesoria />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
