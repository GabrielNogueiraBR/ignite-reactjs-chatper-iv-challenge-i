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
    <VStack margin="0" padding="0" justify="center" align="center">
      <Text
        fontSize="3rem"
        lineHeight="4.5rem"
        fontWeight={600}
        color="yellow.300"
        textAlign="center"
      >
        {value}
      </Text>
      <Text
        position="relative"
        fontSize="1.5rem"
        lineHeight="2.25rem"
        fontWeight={600}
        textAlign="center"
      >
        {title}
        {detail && (
          <Tooltip label={detail} hasArrow borderRadius="0.3125rem">
            <InfoOutlineIcon
              position="absolute"
              top="50%"
              right="-0.3125rem"
              boxSize="1rem"
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
