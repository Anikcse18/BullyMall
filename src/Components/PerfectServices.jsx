// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./PerfectServices.css";

// // import required modules
import { Pagination } from "swiper/modules";

const PerfectServices = () => {
  return (
    <section className="perfectService border-2 border-[#E5734F] bg-[#E5734F]">
      <div className="container">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex flex-row lg:space-x-10 items-center p-5 justify-center">
              <div className="perfectServiceImg flex-shrink-0 max-w-[150px] lg:max-w-[300px]">
                <img
                  src="./Women.png"
                  alt=""
                  className="w-[20%] lg:w-[60%]" // Increased width
                />
              </div>
              <div className="text-white relative flex flex-col items-start justify-between">
                <h1 className="custom-heading text-xl lg:text-4xl text-left">
                  Perfect Services!
                </h1>
                <div className="lg:w-[75%] text-left roboto italic lg:space-y-8">
                  <p className="mt-2 lg:mt-5 text-sm lg:text-xl">
                    The breeder we worked with was very knowledgeable and
                    patient with our questions. Both of us were eager to ensure
                    our puppy would be a good match.
                  </p>
                  <p className="text-sm">. ........ Istiak</p>
                  <div className="w-[50px] lg:w-[80px] h-full mt-5">
                    <img src="./perfect_Icon.png" className="w-[90%]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row lg:space-x-10 items-center p-5 justify-center">
              <div className="perfectServiceImg flex-shrink-0 max-w-[150px] lg:max-w-[300px]">
                <img
                  src="./Women.png"
                  alt=""
                  className="w-[20%] lg:w-[60%]" // Increased width
                />
              </div>
              <div className="text-white relative flex flex-col items-start justify-between">
                <h1 className="custom-heading text-xl lg:text-4xl text-left">
                  Perfect Services!
                </h1>
                <div className="lg:w-[75%] text-left roboto italic lg:space-y-8">
                  <p className="mt-2 lg:mt-5 text-sm lg:text-xl">
                    The breeder we worked with was very knowledgeable and
                    patient with our questions. Both of us were eager to ensure
                    our puppy would be a good match.
                  </p>
                  <p className="text-sm">. ........ Istiak</p>
                  <div className="w-[50px] lg:w-[80px] lg:h-full">
                    <img src="./perfect_Icon.png" className="w-[90%]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row lg:space-x-10 items-center p-5 justify-center">
              <div className="perfectServiceImg flex-shrink-0 max-w-[150px] lg:max-w-[300px]">
                <img
                  src="./Women.png"
                  alt=""
                  className="w-[20%] lg:w-[60%]" // Increased width
                />
              </div>
              <div className="text-white relative flex flex-col items-start justify-between">
                <h1 className="custom-heading text-xl lg:text-4xl text-left">
                  Perfect Services!
                </h1>
                <div className="lg:w-[75%] text-left roboto italic lg:space-y-8">
                  <p className="mt-2 lg:mt-5 text-sm lg:text-xl">
                    The breeder we worked with was very knowledgeable and
                    patient with our questions. Both of us were eager to ensure
                    our puppy would be a good match.
                  </p>
                  <p className="text-sm">. ........ Istiak</p>
                  <div className="w-[50px] lg:w-[80px] lg:h-full">
                    <img src="./perfect_Icon.png" className="w-[90%]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row lg:space-x-10 items-center p-5 justify-center">
              <div className="perfectServiceImg flex-shrink-0 max-w-[150px] lg:max-w-[300px]">
                <img
                  src="./Women.png"
                  alt=""
                  className="w-[20%] lg:w-[60%]" // Increased width
                />
              </div>
              <div className="text-white relative flex flex-col items-start justify-between">
                <h1 className="custom-heading text-xl lg:text-4xl text-left">
                  Perfect Services!
                </h1>
                <div className="lg:w-[75%] text-left roboto italic lg:space-y-8">
                  <p className="mt-2 lg:mt-5 text-sm lg:text-xl">
                    The breeder we worked with was very knowledgeable and
                    patient with our questions. Both of us were eager to ensure
                    our puppy would be a good match.
                  </p>
                  <p className="text-sm">. ........ Istiak</p>
                  <div className="w-[50px] lg:w-[80px] lg:h-full">
                    <img src="./perfect_Icon.png" className="w-[90%]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PerfectServices;
