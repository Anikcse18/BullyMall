import "./App.css";
import Footer from "./LayoutPage/Footer";
import Header from "./LayoutPage/Header";
import Featured from "./Components/Featured";
import FeatureSlider from "./Components/FeatureSlider";
import Hero from "./Components/Hero";
import FeaturedServices from "./Components/FeaturedServices";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <FeaturedServices />
      <Footer />
    </>
  );
}

export default App;
