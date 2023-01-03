import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";
import Type from "./Type";

const TravelTypes = () => {
  return (
    <HStack w="100%" padding="5rem 8.75rem" justifyContent="space-between">
      <Type title="vida noturna" imageSrc="/assets/cocktail.svg" />
      <Type title="praia" imageSrc="/assets/surf.svg" />
      <Type title="moderno" imageSrc="/assets/building.svg" />
      <Type title="clássico" imageSrc="/assets/museum.svg" />
      <Type title="e mais..." imageSrc="/assets/earth.svg" />
    </HStack>
  );
};

export default TravelTypes;
