import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const Header = () => {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta
          name="description"
          content="Repository created to save the worldtrip project develop during the React course on Rocketseat."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        padding="1.6875rem 0"
      >
        <Box position="relative" w="11.50375rem" h="2.87rem">
          <ChakraNextImage
            src="/assets/logo.svg"
            alt="logo"
            position="relative"
            fill='transparent'
          />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
