import { Link, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface SlideContinentProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  targetHref: string;
}

const SlideContinent = ({
  title,
  subtitle,
  imageSrc,
  targetHref,
}: SlideContinentProps) => {
  return (
    <LinkBox w="100%" h="100%">
      <NextLink href={targetHref}>
        <VStack
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          bgImage={imageSrc}
          backgroundPosition="center"
          bgSize="cover"
          _after={{
            position: " absolute",
            content: '""',
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
            background:
              "linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(.jpg);",
          }}
          spacing={{ base: 3, md: 4 }}
        >
          <Text
            fontSize={{
              base: "1.5rem",
              md: "3rem",
            }}
            fontWeight={700}
            lineHeight={{
              base: "2.25rem",
              md: "4.5rem",
            }}
            color="gray.50"
            textAlign="center"
            zIndex={1}
          >
            {title}
          </Text>
          <Text
            fontSize={{
              base: "0.875rem",
              md: "1.5rem",
            }}
            fontWeight={700}
            lineHeight={{
              base: "1.3125rem",
              md: "2.25rem",
            }}
            color="gray.100"
            textAlign="center"
            zIndex={1}
          >
            {subtitle}
          </Text>
        </VStack>
      </NextLink>
    </LinkBox>
  );
};

export default SlideContinent;
