import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CityCard from "./CityCard";

const ContinentCities = () => {
  return (
    <VStack
      w="100%"
      padding="0 8.75rem"
      justify="center"
      align="flex-start"
      spacing={10}
    >
      <Text fontSize="2.25rem" lineHeight="3.375rem" fontWeight={500}>
        Cidades +100
      </Text>
      <SimpleGrid w="100%" spacing="2.8125rem" minChildWidth="16rem">
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
