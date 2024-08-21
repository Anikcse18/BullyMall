import LookingSlider from "./Slider/LookingSlider";

const LookingFor = () => {
  const services = [
    {
      title: "Find Puppies",
      description:
        "Discover adorable puppies available for adoption or purchase in your area.",
      image: "https://i.ibb.co/yhKx9df/find-Puppies.png",
    },
    {
      title: "Find Groomers",
      description:
        "Locate professional pet groomers to keep your pets looking their best.",
      image: "https://i.ibb.co/rQbmxMd/find-Groomers.png",
    },
    {
      title: "Find Trainers",
      description:
        "Find skilled pet trainers to help your pets learn and behave better.",
      image: "https://i.ibb.co/4jX5fhC/find-Trainers.png",
    },
  ];

  return (
    <section className="bg-[#FF9153] p-3">
      <div className="container ">
        <div className="flex flex-col  items-center gap-y-7">
          <h1 className="text-3xl lg:w-[35%] flex flex-row items-start custom-heading text-white pt-6 text-center">
            <img src="./pet.png" alt="" className="hidden lg:block w-12" />
            What Are You Looking For?
          </h1>
          <p className="text-center lg:w-[65%] text-gray-100 roboto uppercase px-10 lg:py-0 w-50">
            Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc
            solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
          </p>
          <div className="flex flex-col lg:flex-row items-center">
            {services.map((service, idx) => (
              <LookingSlider service={service} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;
