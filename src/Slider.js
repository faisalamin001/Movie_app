import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={image1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
