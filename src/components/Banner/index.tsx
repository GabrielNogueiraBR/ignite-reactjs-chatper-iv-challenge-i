import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const Banner = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      position="relative"
      w="100%"
      h={{
        base: "10.1875rem",
        md: "20.9375rem",
      }}
      justifyContent="flex-start"
      alignItems="center"
      bgImage="/assets/images/banner_background.png"
      backgroundSize="cover"
      paddingLeft={{
        base: "1rem",
        md: "8.75rem",
      }}
      marginBottom={{
        base: "none",
        md: "2.075625rem",
      }}
    >
      <Stack
        spacing={{
          base: 2,
          md: 5,
        }}
      >
        <Text
          fontSize={{
            base: "1.25rem",
            md: "2.25rem",
          }}
          lineHeight={{
            base: "1.875rem",
            md: "3.375rem",
          }}
          fontWeight={500}
          color="gray.50"
          maxW={{
            base: "14.875rem",
            md: "26.625rem",
          }}
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          fontSize={{
            base: "0.875rem",
            md: "1.25rem",
          }}
          fontWeight={400}
          lineHeight={{
            base: "1.3125rem",
            md: "1.875rem",
          }}
          color="gray.100"
          maxW="32.75rem"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Stack>
      {!isSmallScreen && (
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
      )}
    </Flex>
  );
};

export default Banner;
