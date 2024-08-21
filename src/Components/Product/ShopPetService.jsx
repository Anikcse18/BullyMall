import PropTypes from "prop-types";

const ShopPetService = ({ link }) => {
  const { name, image } = link;

  return (
    <section>
      <div className="text-center">
        <div className="bg-gray-300 flex flex-col justify-center items-center rounded-3xl w-[100px] h-[80px] p-4">
          <img src={image} alt="" className="w-1/2" />
        </div>
        <h1 className="text-gray-200 mt-2  lg:mt-3 text-xl font-bold">{name}</h1>
      </div>
    </section>
  );
};

ShopPetService.propTypes = {
  link: PropTypes.object,
};
export default ShopPetService;
