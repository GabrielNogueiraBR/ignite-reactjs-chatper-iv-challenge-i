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
      h={{ base: "15.625rem", md: "28.125rem" }}
      position="relative"
      sx={{
        ".swiper-pagination-bullet": {
          width: { base: "0.5rem", md: "1rem" },
          height: { base: "0.5rem", md: "1rem" },
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
          right: { base: "1.25rem", md: "2.65625rem" },
          transform: { base: "scale(0.5)", md: "scale(1)" },
        },
        ".swiper-button-prev": {
          left: { base: "1.25rem", md: "2.65625rem" },
          transform: { base: "scale(0.5)", md: "scale(1)" },
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
