import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ServicesSlider.css";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

const ServicesSlider = () => {
  return (
    <div className="service">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./ServiceSlide_1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ServiceSlide_3.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
