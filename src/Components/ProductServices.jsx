import ServicesSlider from "./Slider/ServicesSlider";

const ProductServices = () => {
  return (
    <section className=" bg-[#E5734F] p-8">
      <div className="container">
        <div className="flex flex-col  items-center gap-y-7">
          <h1 className="text-3xl lg:w-[35%] flex flex-row items-start custom-heading text-white pt-6 text-center">
            <img src="./pet.png" alt="" className="hidden lg:block w-12" />
            The Most Popular Breeds
          </h1>
          <p className="text-center lg:w-[65%] text-gray-100 roboto uppercase px-10 lg:py-0 w-50">
            Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc
            solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
          </p>
        </div>

        {/* Slider */}
        <div className="pb-2">
          <ServicesSlider />
        </div>

        <div className="flex flex-col text-white mt-4 lg:flex-row justify-around items-center gap-7">
          <div>
            <ul className="text-xs space-y-3">
              <li>Golden Retriever</li>
              <li>Labrador Retriever</li>
              <li>German Shepherd Dog</li>
              <li>Poodle.</li>
              <li>Yorkshire Terrier</li>
              <li>Bulldog</li>
              <li>Pembroke Welsh Corgi</li>
              <li>Rottweiler</li>
              <li>Cavalier King Charles Spaniel</li>
              <li>Australian Shepherd</li>
              <li>Miniature Schnauzer</li>
              <li>Dachshund</li>
              <li>Doberman Pinscher</li>
            </ul>
          </div>
          <div>
            <ul className="text-xs space-y-3">
              <li>Golden Retriever</li>
              <li>Labrador Retriever</li>
              <li>German Shepherd Dog</li>
              <li>Poodle.</li>
              <li>Yorkshire Terrier</li>
              <li>Bulldog</li>
              <li>Pembroke Welsh Corgi</li>
              <li>Rottweiler</li>
              <li>Cavalier King Charles Spaniel</li>
              <li>Australian Shepherd</li>
              <li>Miniature Schnauzer</li>
              <li>Dachshund</li>
              <li>Doberman Pinscher</li>
            </ul>
          </div>
          <div>
            <ul className="text-xs  space-y-3">
              <li>Golden Retriever</li>
              <li>Labrador Retriever</li>
              <li>German Shepherd Dog</li>
              <li>Poodle.</li>
              <li>Yorkshire Terrier</li>
              <li>Bulldog</li>
              <li>Pembroke Welsh Corgi</li>
              <li>Rottweiler</li>
              <li>Cavalier King Charles Spaniel</li>
              <li>Australian Shepherd</li>
              <li>Miniature Schnauzer</li>
              <li>Dachshund</li>
              <li>Doberman Pinscher</li>
            </ul>
          </div>
          <div>
            <ul className="text-xs  space-y-3">
              <li>Golden Retriever</li>
              <li>Labrador Retriever</li>
              <li>German Shepherd Dog</li>
              <li>Poodle.</li>
              <li>Yorkshire Terrier</li>
              <li>Bulldog</li>
              <li>Pembroke Welsh Corgi</li>
              <li>Rottweiler</li>
              <li>Cavalier King Charles Spaniel</li>
              <li>Australian Shepherd</li>
              <li>Miniature Schnauzer</li>
              <li>Dachshund</li>
              <li>Doberman Pinscher</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServices;
