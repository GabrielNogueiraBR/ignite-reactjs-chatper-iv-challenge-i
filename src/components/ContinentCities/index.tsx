import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CityCard from "./CityCard";

const ContinentCities = () => {
  return (
    <VStack
      w="100%"
      padding={{ base: "0 1rem", md: "0 8.75rem" }}
      justify="center"
      align="flex-start"
      spacing={10}
    >
      <Text
        fontSize={{ base: "1.5rem", md: "2.25rem" }}
        lineHeight={{ base: "2.25rem", md: "3.375rem" }}
        fontWeight={500}
      >
        Cidades +100
      </Text>
      <SimpleGrid
        w="100%"
        spacing={{ base: "1.25rem", md: "2.8125rem" }}
        minChildWidth="16rem"
      >
        <CityCard city="Londres" country="Reino Unido" />
        <CityCard city="Londres" country="Reino Unido" />
        <CityCard city="Londres" country="Reino Unido" />
        <CityCard city="Londres" country="Reino Unido" />
        <CityCard city="Londres" country="Reino Unido" />
        <CityCard city="Londres" country="Reino Unido" />
      </SimpleGrid>
    </VStack>
  );
};

export default ContinentCities;
