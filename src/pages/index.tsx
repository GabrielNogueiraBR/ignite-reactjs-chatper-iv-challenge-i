import { Divider, Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import SliderContinents from "../components/SliderContinents";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex w="100%" h="100%" position="relative" direction="column">
      <Banner />
      <TravelTypes />
      <Divider
        alignSelf="center"
        w="5.625rem"
        borderColor="gray.600"
        borderWidth="1px"
        bg='gray.600'
        opacity={1}
      />
      <SliderContinents />
    </Flex>
  );
}
