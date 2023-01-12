import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Type from "./Type";
import TypeRow from "./TypeRow";

const TravelTypes = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  if (isSmallScreen)
    return (
      <Flex
        w="100%"
        direction="column"
        padding={{
          base: "0 3.125rem 2.25rem 3.125rem",
          md: "5rem 8.75rem",
        }}
        gap="1.6875rem"
      >
        <TypeRow>
          <Type title="vida noturna" imageSrc="/assets/cocktail.svg" />
          <Type title="praia" imageSrc="/assets/surf.svg" />
        </TypeRow>
        <TypeRow>
          <Type title="moderno" imageSrc="/assets/building.svg" />
          <Type title="clássico" imageSrc="/assets/museum.svg" />
        </TypeRow>
        <TypeRow justify='center'>
          <Type title="e mais..." imageSrc="/assets/earth.svg" />
        </TypeRow>
      </Flex>
    );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100%"
      padding={{
        base: "0 3.125rem 2.25rem 3.125rem",
        md: "5rem 8.75rem",
      }}
      justifyContent="space-between"
    >
      <Type title="vida noturna" imageSrc="/assets/cocktail.svg" />
      <Type title="praia" imageSrc="/assets/surf.svg" />
      <Type title="moderno" imageSrc="/assets/building.svg" />
      <Type title="clássico" imageSrc="/assets/museum.svg" />
    </Flex>
  );
};

export default TravelTypes;
