import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { Rate } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import ProductCard from "./Product/ProductCard";

const FeatureSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 50 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  // const append = () => {
  //   setSlides([...slides, "Slide " + ++appendNumber.current]);
  // };

  // const slideTo = (index) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };

  const dogBreeds = [
    {
      image: "https://i.ibb.co/P95VRfZ/FpDog-3.png",
      breedName: "Golden Retriever",
      rating: 2,
      price: 1200,
    },
    {
      image: "https://i.ibb.co/pWbmpBF/Fp-2.png",
      breedName: "German Shepherd",
      rating: 4,
      price: 1500,
    },
    {
      image: "https://i.ibb.co/QCGCxMc/Fp-1.png",
      breedName: "Bulldog",
      rating: 3,
      price: 1300,
    },
    {
      image: "https://i.ibb.co/P95VRfZ/FpDog-3.png",
      breedName: "Labrador Retriever",
      rating: 1,
      price: 1100,
    },
    {
      image: "https://i.ibb.co/pWbmpBF/Fp-2.png",
      breedName: "Beagle",
      rating: 4.6,
      price: 900,
    },
    {
      image: "https://i.ibb.co/QCGCxMc/Fp-1.png",
      breedName: "Poodle",
      rating: 3,
      price: 1400,
    },
    {
      image: "https://i.ibb.co/P95VRfZ/FpDog-3.png",
      breedName: "Rottweiler",
      rating: 4.5,
      price: 1600,
    },
    {
      image: "https://i.ibb.co/pWbmpBF/Fp-2.png",
      breedName: "Boxer",
      rating: 2.6,
      price: 1300,
    },
    {
      image: "https://i.ibb.co/QCGCxMc/Fp-1.png",
      breedName: "Dachshund",
      rating: 1.4,
      price: 800,
    },
    {
      image: "https://i.ibb.co/P95VRfZ/FpDog-3.png",
      breedName: "Shih Tzu",
      rating: 4,
      price: 1000,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {dogBreeds.map((breed, index) => (
          <SwiperSlide
            breed={breed}
            key={index}
            className="rounded-lg relative group"
          >
            <div className="flex flex-col p-2">
              <div className="h-36">
                <img src={breed.image} className="" />
              </div>
              <div className="mt-4 roboto">
                <h1>{breed.breedName}</h1>
                <Rate className="" allowHalf defaultValue={breed.rating} />
                <p>${breed.price}</p>
              </div>
              {/* hover items */}
              <div className="space-y-2 absolute top-[50%] left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-200 hover:bg-[#0702AA] hover:text-white w-10 flex justify-center p-3 rounded-lg">
                  <FaRegEye />
                </div>
                <div className="bg-gray-200 hover:bg-[#0702AA] hover:text-white w-10 flex justify-center p-3 rounded-lg">
                  <FiShoppingCart />
                </div>
                <div className="bg-gray-200 hover:bg-[#0702AA] hover:text-white w-10 flex justify-center p-3 rounded-lg">
                  <GiSelfLove />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeatureSlider;
