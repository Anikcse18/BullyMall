import ShopPetService from "./Product/ShopPetService";

const ShopPeat = () => {
  const imageLinks = [
    { name: "Fish", image: "https://i.ibb.co/Gptgdfh/Fish-Icon.png" },
    { name: "Rabbit", image: "https://i.ibb.co/d6G0sYt/Rabbit-Icon.png" },
    { name: "Bird", image: "https://i.ibb.co/cJCBX6x/Bird-Icon.png" },
    { name: "Mew", image: "https://i.ibb.co/ZM7GdXW/Mew-Icon.png" },
    { name: "Dog", image: "https://i.ibb.co/2kWySBG/Dog-Icon.png" },
    { name: "Turtle", image: "https://i.ibb.co/Kmxn62q/Turtle-Icon.png" },
  ];
  return (
    <section className="bg-[#FF9153] py-10">
      <div className="  bg-[#E5734F]  ">
        <div className="container flex flex-col items-center">
          <h1 className="text-3xl lg:w-[35%] flex flex-row items-start text-center custom-heading text-white p-6">
            <img src="./pet.png" alt="" className="hidden lg:block w-12" />
            Shop by Peat
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center container px-6">
        <p className="text-center lg:w-[50%] text-gray-100 roboto ">
          Designed so animals can relax & indulge in pet stylists, run around
          our exercise yards, make new friends in doggy daycare, or simply spend
          hours in our dog grooming salon.
        </p>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-11 mt-10">
          {imageLinks.map((link, idx) => (
            <ShopPetService link={link} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPeat;
