import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import Mario from "../../assets/images/mario.jpeg";
import Interstellar from "../../assets/images/interstellar.jpeg";
import Avengers from "../../assets/images/avengers.jpeg";

import { Autoplay, Pagination } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Mario} alt='mario-movie' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Interstellar} alt='interstellar-movie' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avengers} alt='avengers-movie' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
