import { Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface InfoProps {
  title: string;
  value: number;
  detail?: string;
}

const Info = ({ title, value, detail }: InfoProps) => {
  return (
    <VStack
      margin="0"
      padding="0"
      justify={{ base: "center", md: "center" }}
      align={{ base: "flex-start", md: "center" }}
    >
      <Text
        fontSize={{ base: "1.5rem", md: "3rem" }}
        lineHeight={{ base: "2.25rem", md: "4.5rem" }}
        fontWeight={600}
        color="yellow.300"
        textAlign='center'
      >
        {value}
      </Text>
      <Text
        position="relative"
        fontSize={{ base: "1.125rem", md: "1.5rem" }}
        lineHeight={{ base: "1.6875rem", md: "2.25rem" }}
        fontWeight={{ base: 400, md: 600 }}
        textAlign="center"
      >
        {title}
        {detail && (
          <Tooltip label={detail} hasArrow borderRadius="0.3125rem">
            <InfoOutlineIcon
              position="absolute"
              top="50%"
              right={{ base: "-0.15rem", md: "-0.3125rem" }}
              boxSize={{ base: "0.520625rem", md: "1rem" }}
              color="gray.400"
              transform="translate(100%, -50%)"
            />
          </Tooltip>
        )}
      </Text>
    </VStack>
  );
};

export default Info;
