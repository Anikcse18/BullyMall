import PropTypes from "prop-types";

const ListingService = ({ service }) => {
  const { type, description, value } = service;
  return (
    <div className="text-white flex flex-col items-center space-y-4 ">
      <h1 className="custom-heading text-xl w-[40%] text-center"> {type} </h1>
      <p className="text-center w-[70%]">{description}</p>
      <p className="text-center">
        If you are a Breeder{" "}
        <span className="hover:text-blue-700">Create Listing</span>
      </p>
    </div>
  );
};
ListingService.propTypes = {
  service: PropTypes.object,
};

export default ListingService;
