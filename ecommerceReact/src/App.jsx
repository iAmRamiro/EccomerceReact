import { Navbar } from "./components/layout/navbar/Navbar";
import SliderContainer from "./components/common/Slider/SliderContainer";
import ItemFeaturedContainer from "./components/pages/itemFeatured/ItemFeaturedContainer";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
        <Navbar />
        <SliderContainer />
        <ItemFeaturedContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
