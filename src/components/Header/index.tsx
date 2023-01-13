import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";
import Logo from "./Logo";
import ReturnButton from "./ReturnButton";

const Header = () => {
  const router = useRouter();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const isHomePage = router.asPath === "/";

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
        padding={{ base: "0.9375rem 0", md: "1.6875rem 0" }}
      >
        {!isHomePage && isSmallScreen && (
          <ReturnButton
            aria-label="return navigation page"
            onClick={() => router.back()}
          />
        )}
        <Logo />
      </Flex>
    </>
  );
};

export default Header;
