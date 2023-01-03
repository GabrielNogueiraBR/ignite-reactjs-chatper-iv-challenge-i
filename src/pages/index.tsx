import { Divider, Flex, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
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
        opacity={1}
      />
    </Flex>
  );
}
