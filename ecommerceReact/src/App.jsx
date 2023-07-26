import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import CartContextComponent from "./context/CartContext";
import AppRouter from "./router/AppRouter";

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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CartContextComponent>
            <AppRouter />
          </CartContextComponent>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
