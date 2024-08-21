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
    <section className="bg-[#FF9153] p-3">
      <div className="container">
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
