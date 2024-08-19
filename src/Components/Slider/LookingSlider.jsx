import PropTypes from "prop-types";
import "./LookingSlider.css";
const LookingSlider = ({ service }) => {
  const { title, description, image } = service;

  return (
    <section>
      <div className="flex flex-col items-center align-middle justify-between -space-y-14">
        <div className="clipped-container flex flex-grow">
          <img src={image} alt="" className="clipped-image" />
        </div>
        <div className="flex flex-col items-center space-y-4 text-white">
          <h1 className="text-xl hover:text-blue-700">{title}</h1>
          <p className="w-[80%] text-center hover:text-blue-700">{description}</p>
        </div>
      </div>
    </section>
  );
};

LookingSlider.propTypes = {
  service: PropTypes.object,
};

export default LookingSlider;
