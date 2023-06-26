import { Navbar } from "./components/layout/navbar/Navbar";
import SliderContainer from "./components/common/Slider/SliderContainer";
import ItemFeaturedContainer from "./components/pages/itemFeatured/ItemFeaturedContainer";

function App() {
  return (
    <>
      <Navbar />
      <SliderContainer />
      <ItemFeaturedContainer />
    </>
  );
}

export default App;
