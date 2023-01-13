import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Info from "./Info";

interface ContinentInfoProps {
  bio: string;
  infos: {
    countriesAmount: number;
    languagesAmount: number;
    citiesTopOneHundredAmount: number;
  };
}

const ContinentInfo = ({ bio, infos }: ContinentInfoProps) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100%"
      padding={{ base: "0 1rem", md: "0 8.75rem" }}
      gap={{ base: "1rem", md: "4.375rem" }}
      overflow="hidden"
    >
      <Text
        flex={{ base: "1", md: "1.2" }}
        fontSize={{ base: "0.875rem", md: "1.5rem" }}
        lineHeight={{ base: "1.3125rem", md: "2.25rem" }}
        fontWeight={400}
        textAlign="justify"
      >
        {bio}
      </Text>
      <HStack flex="1" justify="space-between">
        <Info title="países" value={infos.countriesAmount} />
        <Info title="línguas" value={infos.languagesAmount} />
        <Info
          title="cidades +100"
          value={infos.citiesTopOneHundredAmount}
          detail="Cidades que estão no top 100."
        />
      </HStack>
    </Flex>
  );
};

export default ContinentInfo;
