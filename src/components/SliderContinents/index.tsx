import React from "react";

import { Text, VStack } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "./Slider";

const SliderContinents = () => {
  return (
    <VStack
      position="relative"
      w="100%"
      justifyContent="center"
      alignItems="center"
      padding="3.375rem 6.25rem"
      spacing="3.25rem"
    >
      <Text
        fontSize="2.25rem"
        fontWeight={500}
        lineHeight="3.375rem"
        textAlign="center"
        maxW="52.4375rem"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Slider />
    </VStack>
  );
};

export default SliderContinents;
