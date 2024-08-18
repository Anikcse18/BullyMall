import React from "react";
import Services from "./Product/Services";

const FeaturedServices = () => {
  const featureDetails = [
    {
      image: "https://i.ibb.co/CvWTHtc/Vatenary.png",
      title: "Veterinary",
      description:
        "Comprehensive healthcare services for pets to ensure their well-being.",
    },
    {
      image: "https://i.ibb.co/KwxN5QW/Training.png",
      title: "Training",
      description:
        "Professional training services to teach pets obedience and good behavior.",
    },
    {
      image: "https://i.ibb.co/cbB4MG7/dog-sitting.png",
      title: "Sitting",
      description:
        "Reliable dog sitting services to care for pets while you're away.",
    },
    {
      image: "https://i.ibb.co/dcmnJSH/Grooming.png",
      title: "Grooming",
      description:
        "Expert grooming services to keep pets clean, healthy, and well-maintained.",
    },
  ];

  return (
    <div className="bg-[#FF9153] p-3">
      {/* Services Section */}
      <section className="container mt-24 ">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="">
            <div className="flex flex-col space-y-10">
              <h1 className="text-3xl custom-heading text-white pt-6 lg:flex lg:items-center ">
                <img
                  src="./pet.png"
                  alt=""
                  className="hidden lg:block w-16 "
                ></img>
                Featured Services
              </h1>
              <p className="text-gray-100 roboto uppercase">
                Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc
                solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
              </p>
            </div>
            <div className="space-y-4 mt-9">
              {featureDetails.map((detail, idx) => (
                <Services detail={detail} key={idx}></Services>
              ))}
            </div>
          </div>
          <div>
            <img src="./Service_img.png" alt="" />
          </div>
        </div>
      </section>
      {/* Dog Image */}
    </div>
  );
};

export default FeaturedServices;
