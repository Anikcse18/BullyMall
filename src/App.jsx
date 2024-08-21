import "./App.css";
import Footer from "./LayoutPage/Footer";
import Header from "./LayoutPage/Header";
import Featured from "./Components/Featured";

import Hero from "./Components/Hero";
import FeaturedServices from "./Components/FeaturedServices";
import ProductServices from "./Components/ProductServices";
// import ServicesSlider from "./Components/Slider/ServicesSlider";
import LookingFor from "./Components/LookingFor";
import ListingWithUs from "./Components/ListingWithUs";
import Listing from "./Components/Listing";
import ShopPeat from "./Components/ShopPeat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <FeaturedServices />
      <ProductServices />
      <LookingFor />
      <ListingWithUs />
      <Listing />
      <ShopPeat />
      <Footer />
    </>
  );
}

export default App;
