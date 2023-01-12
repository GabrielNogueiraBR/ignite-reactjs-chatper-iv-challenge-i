import { VStack, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

interface TypeProps {
  title: string;
  imageSrc: string;
}

const Type = ({ title, imageSrc }: TypeProps) => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={{
        base: "row",
        md: "column",
      }}
      gap={{
        base: 2,
        md: 8,
      }}
      justifyContent="center"
      alignItems="center"
    >
      {isSmallScreen ? (
        <Flex w="0.5rem" h="0.5rem" bg="yellow.300" borderRadius="50%" />
      ) : (
        <Flex position="relative" w="5.3125rem" h="5.3125rem">
          <ChakraNextImage src={imageSrc} alt={imageSrc} fill="transparent" />
        </Flex>
      )}
      <Text
        fontWeight={600}
        fontSize={{ base: "1.125rem", md: "1.5rem" }}
        lineHeight={{ base: "1.6875rem", md: "1.875rem" }}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default Type;
