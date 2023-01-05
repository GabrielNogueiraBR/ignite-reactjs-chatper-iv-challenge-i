import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface CountryBannerProps {
  name: string;
  imageSrc: string;
}

const ContinentBanner = ({ name, imageSrc }: CountryBannerProps) => {
  return (
    <Flex
      position="relative"
      align="flex-end"
      w="100%"
      h="31.25rem"
      bgImage={imageSrc}
      backgroundPosition="center"
      bgSize="cover"
      paddingLeft="8.75rem"
      paddingBottom="3.75rem"
      _after={{
        position: " absolute",
        content: '""',
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        background:
          "linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(.jpg);",
      }}
    >
      <Text
        fontSize="3rem"
        lineHeight="4.5rem"
        fontWeight={600}
        color="gray.50"
        zIndex={1}
      >
        {name}
      </Text>
    </Flex>
  );
};

export default ContinentBanner;
