import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentInfo from "../../components/ContinentInfo";

const ContinentPage = () => {
  const router = useRouter();

  const { name } = router.query;

  return (
    <VStack spacing={20}>
      <ContinentBanner
        name="Europa"
        imageSrc="/assets/images/county_banner.png"
      />
      <ContinentInfo
        bio="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
        infos={{
          countriesAmount: 50,
          languagesAmount: 60,
          citiesTopOneHundredAmount: 27,
        }}
      />
    </VStack>
  );
};

export default ContinentPage;
