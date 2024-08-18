import PropTypes from "prop-types";

const Services = ({ detail }) => {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div className="bg-gray-800 p-5 rounded-full hover:bg-[#0702AA] ">
        <img src={detail.image} alt="" className="w-5" />
      </div>
      <div className="roboto text-white">
        <h1 className=" text-xl hover:text-[#0702AA]">{detail.title}</h1>
        <p className="w-[80%] mt-2">{detail.description}</p>
      </div>
    </div>
  );
};
Services.propTypes = {
  detail: PropTypes.object, // Replace 'string' with the appropriate type
};

export default Services;
