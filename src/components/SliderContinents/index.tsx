import React from "react";

import { Text, VStack } from "@chakra-ui/react";

import DynamicSlider from "./DynamicSlider";

const SliderContinents = () => {
  return (
    <VStack
      position="relative"
      w="100%"
      justifyContent="center"
      alignItems="center"
      padding={{
        base: "1.5rem 0",
        md: "3.375rem 6.25rem",
      }}
      spacing={{
        base: '1.25rem',
        md: "3.25rem"
      }}
    >
      <Text
        fontSize={{
          base: "1.25rem",
          md: "2.25rem",
        }}
        fontWeight={500}
        lineHeight={{
          base: "1.875rem",
          md: "3.375rem",
        }}
        textAlign="center"
        maxW="52.4375rem"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <DynamicSlider />
    </VStack>
  );
};

export default SliderContinents;
