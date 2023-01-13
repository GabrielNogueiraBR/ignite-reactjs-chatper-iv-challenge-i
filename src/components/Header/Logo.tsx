import { Box } from "@chakra-ui/react";
import React from "react";

import ChakraNextImage from "../ChakraNextImage";

const Logo = () => {
  return (
    <Box
      position="relative"
      w={{
        base: "5.0625rem",
        md: "11.50375rem",
      }}
      h={{
        base: "1.25rem",
        md: "2.87rem",
      }}
    >
      <ChakraNextImage
        src="/assets/logo.svg"
        alt="logo"
        position="relative"
        fill="transparent"
      />
    </Box>
  );
};

export default Logo;
