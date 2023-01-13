import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";

import { IoChevronBackOutline } from "react-icons/io5";

type ReturnButtonProps = IconButtonProps;

const ReturnButton = ({ ...rest }: ReturnButtonProps) => {
  return (
    <IconButton
      position="absolute"
      left="1.375rem"
      minH="1rem"
      minW="1rem"
      w="1rem"
      h="1rem"
      p="0"
      m="0"
      variant="unstyled"
      icon={<Icon w="100%" h="100%" m="0" p="0" as={IoChevronBackOutline} />}
      {...rest}
    />
  );
};

export default ReturnButton;
