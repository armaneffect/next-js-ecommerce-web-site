"use client"

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperSlideComponent() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src="https://img.lazcdn.com/us/domino/f616a40f-f88d-411c-82e7-8c25481f50bf_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Slide 1"
            fill
          className="object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src="https://img.lazcdn.com/us/domino/784f15d9-c310-49cf-a783-3829a8313d40_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Slide 2"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src="https://img.lazcdn.com/us/domino/fc17c0eb-0f11-47ac-9750-eb2e946991f8_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Slide 3"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
