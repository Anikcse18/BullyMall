import FeatureSlider from "./FeatureSlider";
import { Button } from "antd";
const Featured = () => {
  return (
    <section className=" bg-[#E5734F]">
      <div className="container mt-10">
        <div className="flex flex-col items-center gap-y-7">
          <h1 className="text-3xl custom-heading text-white pt-6 text-center">
            Featured Pets
          </h1>
          <p className="text-center w-[85%] text-gray-100 roboto uppercase px-10 lg:py-0 w-50">
            Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc
            solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
          </p>
          {<FeatureSlider />}
        </div>
      </div>
    </section>
  );
};

export default Featured;
