const ListingWithUs = () => {
  return (
    <section className="bg-[#E5734F] p-2">
      <div className="container  p-4">
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
    </section>
  );
};

export default ListingWithUs;
