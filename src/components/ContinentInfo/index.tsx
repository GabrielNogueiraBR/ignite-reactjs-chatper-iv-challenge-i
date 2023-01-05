import { HStack, Text } from "@chakra-ui/react";
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
    <HStack padding="0 8.75rem" spacing="4.375rem">
      <Text
        flex="1.2"
        fontSize="1.5rem"
        lineHeight="2.25rem"
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
    </HStack>
  );
};

export default ContinentInfo;
