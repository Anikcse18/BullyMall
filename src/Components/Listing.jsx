import ListingService from "./Product/ListingService";

const Listing = () => {
  const services = [
    {
      type: "Puppies",
      description:
        "A variety of puppies available for adoption, including different breeds and ages.",
      value: "If you are a Breeder Create Listing",
    },
    {
      type: "Groomers",
      description:
        "Professional groomers who provide bathing, trimming, and other grooming services for dogs.",
      value: "If you are a Breeder Create Listing",
    },
    {
      type: "Trainers",
      description:
        "Experienced trainers offering obedience training, behavior modification, and other training programs for dogs.",
      value: "If you are a Breeder Create Listing",
    },
  ];

  return (
    <section className="bg-[#FF9153] lg:py-3">
      <div className="bg-[#E5734F]">
        <div className="container">
          <div className="flex flex-col  items-center gap-y-7">
            <h1 className="text-3xl lg:w-[35%] flex flex-row items-start custom-heading text-white pt-6 text-center">
              <img src="./pet.png" alt="" className="hidden lg:block w-12" />
              Listing With Us
            </h1>
            <p className="text-center lg:w-[65%] text-gray-100 roboto uppercase ">
              Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc
              solum sat.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-9   ">
        <div className="flex flex-col items-center">
          <img src="./Listing_image.png" alt="" className="w-[70%]" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 mt-10">
          {services.map((service, idx) => (
            <ListingService service={service} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listing;
