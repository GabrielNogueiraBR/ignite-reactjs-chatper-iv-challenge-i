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
      <NextLink href={targetHref} passHref>
        <LinkOverlay>
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
            spacing={4}
          >
            <Text
              as="a"
              fontSize="3rem"
              fontWeight={700}
              lineHeight="4.5rem"
              color="gray.50"
              textAlign="center"
              zIndex={1}
            >
              {title}
            </Text>
            <Text
              fontSize="1.5rem"
              fontWeight={700}
              lineHeight="2.25rem"
              color="gray.100"
              textAlign="center"
              zIndex={1}
            >
              {subtitle}
            </Text>
          </VStack>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default SlideContinent;
