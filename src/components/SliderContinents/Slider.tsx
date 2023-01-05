import React from "react";

import { Flex } from "@chakra-ui/react";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SlideContinent from "./SlideContinent";

const Slider = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (_, className) =>
      '<span class="' + className + '">' + "</span>",
  };

  return (
    <Flex
      w="100%"
      h={450}
      position="relative"
      sx={{
        ".swiper-pagination-bullet": {
          width: "1rem",
          height: "1rem",
          background: "gray.400",
        },
        ".swiper-pagination-bullet-active": {
          background: "yellow.300",
        },
        ".swiper-button-next, .swiper-button-prev, .swiper-button-disabled": {
          color: "yellow.300",
          opacity: 1,
        },
        ".swiper-button-next": {
          right: "2.65625rem",
        },
        ".swiper-button-prev": {
          left: "2.65625rem",
        },
      }}
    >
      <Swiper
        pagination={pagination}
        navigation
        loop
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContinent
            title="Europa"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/europe.png"
            targetHref="/continent/europe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContinent
            title="América do Norte"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/north_america.jpg"
            targetHref="/continent/north_america"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContinent
            title="América do Sul"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/south_america.jpg"
            targetHref="/continent/south_america"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContinent
            title="Oceânia"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/oceania.jpg"
            targetHref="/continent/oceania"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContinent
            title="Ásia"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/asia.jpg"
            targetHref="/continent/asia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContinent
            title="África"
            subtitle="O continente mais antigo"
            imageSrc="/assets/images/africa.jpg"
            targetHref="/continent/africa"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Slider;
