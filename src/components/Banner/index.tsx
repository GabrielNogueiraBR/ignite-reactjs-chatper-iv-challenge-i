import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const Banner = () => {
  return (
    <Flex
      position="relative"
      w="100%"
      h="20.9375rem"
      justifyContent="flex-start"
      alignItems="center"
      bgImage="/assets/images/banner_background.png"
      backgroundSize='cover'
      paddingLeft="8.75rem"
      marginBottom="2.075625rem"
    >
      <Stack spacing={5}>
        <Text
          fontSize="2.25rem"
          fontWeight={500}
          color="gray.50"
          maxW="26.625rem"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          fontSize="1.25rem"
          fontWeight={400}
          lineHeight="1.875rem"
          color="gray.100"
          maxW="32.75rem"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Stack>
      <Flex
        position="absolute"
        w="26.071875rem"
        h="16.92125rem"
        top="5.420625rem"
        right="9.175rem"
        transform="rotate(3deg)"
      >
        <ChakraNextImage
          src="/assets/airplane.svg"
          alt="airplane image"
          fill="transparent"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
