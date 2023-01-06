import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RiEarthFill } from "react-icons/ri";

interface CityCardProps {
  city: string;
  country: string;
  imageSrc?: string;
  flagSrc?: string;
}

const CityCard = ({ city, country, imageSrc, flagSrc }: CityCardProps) => {
  return (
    <Card
      position="relative"
      w="16rem"
      _after={{
        position: " absolute",
        content: '""',
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        border: "1px solid rgba(255, 186, 8, 0.5)",
        borderRadius: "0.25rem",
        pointerEvents: "none",
      }}
    >
      <CardHeader
        w="100%"
        h="10.8125rem"
        bg="red"
        bgImage={imageSrc}
        backgroundPosition="center"
        bgSize="cover"
        borderRadius="0.25rem 0.25rem 0 0"
      />
      <CardBody padding="1.125rem 1.5rem 1.5rem 1.5rem">
        <HStack>
          <VStack align="flex-start" spacing={3}>
            <Text
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight={600}
              color="gray.600"
              textAlign="left"
            >
              {city}
            </Text>
            <Text
              fontSize="1rem"
              lineHeight="1.5rem"
              fontWeight={500}
              color="gray.400"
              textAlign="left"
            >
              {country}
            </Text>
          </VStack>
          <Flex flex="1" justifyContent="flex-end" alignItems="center">
            <Avatar
              size="sm"
              bg="gray.50"
              icon={
                <Icon
                  w="100%"
                  h="100%"
                  m="0"
                  p="0"
                  as={RiEarthFill}
                  color="gray.600"
                />
              }
              src={flagSrc}
            />
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CityCard;
