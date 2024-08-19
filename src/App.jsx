import "./App.css";
import Footer from "./LayoutPage/Footer";
import Header from "./LayoutPage/Header";
import Featured from "./Components/Featured";

import Hero from "./Components/Hero";
import FeaturedServices from "./Components/FeaturedServices";
import ProductServices from "./Components/ProductServices";
import ServicesSlider from "./Components/Slider/ServicesSlider";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <FeaturedServices />
      <ProductServices />
      <Footer />
    </>
  );
}

export default App;
