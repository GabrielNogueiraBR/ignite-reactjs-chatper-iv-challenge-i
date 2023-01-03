import { VStack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

interface TypeProps {
  title: string;
  imageSrc: string;
}

const Type = ({ title, imageSrc }: TypeProps) => {
  return (
    <VStack spacing={8} justifyContent="center">
      <Flex position="relative" w="5.3125rem" h="5.3125rem">
        <ChakraNextImage src={imageSrc} alt={imageSrc} fill="transparent" />
      </Flex>
      <Text fontWeight={600} fontSize="1.5rem" lineHeight="1.875rem">
        {title}
      </Text>
    </VStack>
  );
};

export default Type;
