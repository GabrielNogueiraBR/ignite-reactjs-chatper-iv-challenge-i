import { HStack, StackProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TypeRowProps extends StackProps {
  children: ReactNode;
}

const TypeRow = ({ children, ...rest }: TypeRowProps) => {
  return (
    <HStack w="100%" justify="space-between" align="center" {...rest}>
      {children}
    </HStack>
  );
};

export default TypeRow;
